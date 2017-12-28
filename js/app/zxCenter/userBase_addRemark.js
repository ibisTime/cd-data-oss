$(function() {
    var userId = getQueryString('userId');
    var view = getQueryString('v');

    var columns = [ {
        title: '手机号',
        field: 'mobile',
        readonly: view
    },{
        field: 'refereeUser',
        title: '推荐人',
        search:true,
        readonly: view,
        formatter: function (v,data) {
            if(data.refereeUser){
                return data.refereeUser.mobile;
            }
        }
    },{
        field: 'count',
        title: '报告数量',
        readonly: view
    },
    //     {
    //     field: 'systemCode',
    //     title: '平台代码',
    //     readonly: view
    // },
        {
        field: 'createDatetime',
        title: '填写时间',
        formatter: dateTimeFormat,
        readonly: view
    },  {
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
                data['userId'] = userId;
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "805195",
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


});