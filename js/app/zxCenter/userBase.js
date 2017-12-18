$(function() {
    var userKind = {
        "C": "C端用户",
        // "P": "平台用户"
    };
    var userRefereeType = {
        "operator": "市/区运营商",
        "o2o": "o2o商家",
        "supplier":"供应商",
        "mingsu":"民宿主",
        "f1":"VIP会员"
    };

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
        field: 'mobile',
        search: true
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
            companyCode:OSS.companyCode
        }

    });
    $('#newestReportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "userBase_newestReport.html?UserId=" + selRecords[0].userId;
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
        window.location.href = "userBase_reportList.html?UserId=" + selRecords[0].userId;
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


});