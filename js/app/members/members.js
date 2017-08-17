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
        "f1":"VIP会员",
    };    

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            title: "登录名",
            field: "loginName",
            // search: true
        },{
            title: "昵称",
            field: "nickname",
            // search: true
        }, {
            title: '手机号',
            field: 'mobile',
            search: true
        }
        // ,{
        //     field: 'userReferee',
        //     title: '推荐人',
        //     type: 'select',
        //     formatter: function(v, data) {
        //         if(data.referrer){
        //             if(data.referrer){
        //                 var res1 = data.referrer.kind ;
        //                 var res2 = data.referrer.mobile;
        //                 var level = data.referrer.level ;
        //                 if(res1 && res2){
        //                     if (res1 == 'f1') {
        //                         return Dict.getNameForList1("user_level","807706",level)+ '/' +res2
        //                     }else{
        //                         return userRefereeType[res1]+ '/' +res2
        //                     }
        //                 }else{
        //                    return "-" 
        //                 }                
        //             }
        //         }        
        //     }
        // }
        , {
            title: "用户类型",
            field: "kind",
            type: "select",
            formatter: function(v,data){
                return userKind[data.kind]
            }
        }, {
            title: "状态",
            field: "status",
            type: "select",
            key: "user_status",
            formatter: Dict.getNameForList("user_status"),
            search: true
        }, {
            title: "注册时间",
            field: "createDatetime",
            formatter: dateTimeFormat
        }, {
            title: '备注',
            field: 'remark'
        }
    ];
    buildList({
        router: 'members',
        columns: columns,
        pageCode: '805120',
        searchParams: {
            kind: "C",
            companyCode:OSS.companyCode
        }
    });

    $('#discountBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./discount.html?userId=" + selRecords[0].userId;

    });

    $("#borrowBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./borrow.html?userId=" + selRecords[0].userId;

    });    
    

    $('#rockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 2) {
            toastr.info("该账户已被注销");
            return;
        }
        var status = selRecords[0].status,
            toStatus;
        status == 0 ? toStatus = 2 : toStatus = 0;
        confirm("确定注销该账户？").then(function() {
            reqApi({
                code: '805052',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: toStatus
                }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });

        });

    });
    $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 0) {
            toastr.info("该账户是已正常状态");
            return;
        }
        confirm("确定激活该账户？").then(function() {
            reqApi({
                code: '805052',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: '0'
                }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });

        });
    });
    


    $('#editBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./custom_addedit.html?Code=" + selRecords[0].code+'&userId='+selRecords[0].userId;
    });
    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./custom_detail.html?Code=" + selRecords[0].code+'&userId='+selRecords[0].userId;
    });    
      
});