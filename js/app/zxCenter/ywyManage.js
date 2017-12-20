$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '手机号',
        field: 'mobileForQuery',
        search: true,
        formatter: function (v, data) {
            return data.mobile;
        }
    }, {
        title: '账户余额',
        field: 'amount',
        formatter: function (v,data) {
            return data.amount/1000
        }
    }, {
        title: "注册时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    },{
        title: "状态",
        field: "status",
        type: "select",
        key: "user_status",
        formatter: Dict.getNameForList("user_status")
    }, {
        title: '备注',
        field: 'remark'
    }
    ];
    buildList({
        columns: columns,
        pageCode: '805120',
        searchParams: {
            kind: "B",
            companyCode:OSS.companyCode
        }
    });

    $('#addRemarkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./ywyManage_addRemark.html?v=1&userId=" + selRecords[0].userId;
    });
    $('#reportListBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./ywyManage_reportList.html?userId=" + selRecords[0].userId;
    });
    $('#balanceBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./ywyManage_balance.html?v=1&userId=" + selRecords[0].userId+'&mobile='+selRecords[0].mobile+'&accountNumber='+selRecords[0].accountNumber;
    });
    $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }


        confirm("确定注销/激活该用户？").then(function() {
            reqApi({
                code: '805091',
                json: {
                    userId: selRecords[0].userId,
                    updater: getUserName()
                }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });

        },function(){});

    });
    $('#detailBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./ywyManage_addedit.html?v=1&userId=" + selRecords[0].userId;
    });
    $('#getClientBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./ywyManage_getClient.html?v=1&userId=" + selRecords[0].userId;
    });
    $('#daizhuceBtn').click(function() {
        window.location.href = "./ywyManage_daizhuce.html";
    });

});