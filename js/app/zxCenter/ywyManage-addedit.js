$(function() {
    var userId = getQueryString('userId');
    var view = getQueryString('v');
    var amount;
    reqApi({
        code: '802503',
        json: {
            userId: userId,
            currency: 'CNY'
        },
        sync: true
    }).then(function (data) {
        amount = data[0].amount;
    });
    var columns = [ {
        title: '手机号',
        field: 'mobile',
        search: true
    }, {
        title: '账户余额',
        field: 'amount',
        formatter: function () {
            return moneyFormat(amount);
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

    buildDetail({
        fields: columns,
        view: view,
        code: {
            userId: userId
        },
        detailCode: '805121'
    });

});