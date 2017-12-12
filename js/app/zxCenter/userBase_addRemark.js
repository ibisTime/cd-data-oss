$(function() {
    var userId = getQueryString('userId');
    var view = getQueryString('v');
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

    var columns = [ {
        title: '手机号',
        field: 'mobile',
        readonly: view
    },{
        field: 'userReferee',
        title: '推荐人',
        readonly: view
    },  {
        title: '账户余额',
        field: 'balance',
        readonly: view
    }, {
        title: "注册时间",
        field: "createDatetime",
        formatter: dateTimeFormat,
        readonly: view
    },{
        title: "状态",
        field: "status",
        type: "select",
        key: "user_status",
        formatter: Dict.getNameForList("user_status"),
        readonly: view
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 250,
        required: true,
    }
    ];
    var options = {
        fields: columns,
        detailCode: '805121',
        code: {
            kind: "C",
            companyCode:OSS.companyCode,
            userId: userId
        }
    };
    options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = getUserName();
                data["approveResult"] = "1";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "623075",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    buildDetail(options);

    // buildDetail({
    //     fields: columns,
    //     code: code,
    //     detailCode: '805120',
    //     editCode: '805242',
    //     beforeSubmit: function(data) {
    //         data.updater = getUserId();
    //         if(data.portList!=undefined){
    //             data.portList = 'F1,'+'F2,'+'F3,'+data.portList;
    //         }else{
    //             data.portList = 'F1,F2,F3'
    //         }
    //
    //         return data;
    //     }
    // });

});