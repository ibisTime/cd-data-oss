$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        title: '姓名',
        field: 'realName',
        search: true
    }, {
        title: '手机号',
        field: 'mobileForQuery',
        search: true,
        formatter: function (v, data) {
            return data.mobile;
        }
    },{
        field: 'userReferee',
        title: '推荐人',
        pageCode: '805120',
        type: 'select',
        keyName: 'userId',
        valueName: 'mobile',
        params: {
            updater: '',
            kind: 'B'
        },
        search:true,
        formatter: function (v,data) {
            if(data.refereeUser){
                return data.refereeUser.mobile;
            }
        }
    },{
        field: 'count',
        title: '报告数量'
    },
    //     {
    //     field: 'systemCode',
    //     title: '平台代码'
    // },
        {
        field: 'createDatetime',
        title: '填写时间',
        formatter: dateTimeFormat
    },  {
        title: "状态",
        field: "status",
        type: "select",
        key: "user_status",
        formatter: Dict.getNameForList("user_status"),
    },  {
        title: '备注',
        field: 'remark'
    }
    ];
    buildList({
        columns: columns,
        pageCode: '805120',
        searchParams: {
            kind: "C",
            companyCode: OSS.companyCode
        }
    });
    $('#newestReportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        reqApi({
            code: 805333,
            json: {loanUser: selRecords[0].userId}
        }).then(function(data){
            if (data.code) {
                window.location.href = "reportBase_addedit.html?code=" + data.code;
            } else {
                toastr.info("该用户暂无报告");
            }
        });
    });
    $('#addRemarkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./userBase_addRemark.html?v=1&userId=" + selRecords[0].userId;
    });
    $('#reportListBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "userBase_reportList.html?userId=" + selRecords[0].userId;
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

        }, function(){});

    });
});