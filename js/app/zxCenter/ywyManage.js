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
            return moneyFormat(data.amount);
        }
    }, {
        title: "注册时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    },{
        title: "等级",
        field: "level",
    },{
        title: "折扣",
        field: "divRate",
        formatter: function (v, data) {
            return (data.divRate != null?(data.divRate * 100) + "%":'-')

        }
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
                sucList();
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
    $('#zongdailiBtn').click(function() {
        window.location.href = "./ywyManage_zongdaili.html";
    });
    $('#daizhuceBtn').click(function() {
        window.location.href = "./ywyManage_daizhuce.html";
    });
    $('#setLevelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./ywyManage_addedit.html?v=1&userId=" + selRecords[0].userId + "&level=true";
    });

    $('#setDiscountBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./ywyManage_addedit.html?v=1&userId=" + selRecords[0].userId + "&discount=true";    });
});