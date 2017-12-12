$(function() {
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var view = getQueryString('v');
    console.log(userId);
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
        field: 'mobile'
    },{
        field: 'userReferee',
        title: '推荐人'
    },  {
        title: '账户余额',
        field: 'balance'
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
    buildDetail({
        fields: columns,
        code: code,
        view: view,
        detailCode: '805246',
        editCode: '805242',
        beforeSubmit: function(data) {
            data.updater = getUserId();
            if(data.portList!=undefined){
                data.portList = 'F1,'+'F2,'+'F3,'+data.portList;
            }else{
                data.portList = 'F1,F2,F3'
            }

            return data;
        }
    });

});