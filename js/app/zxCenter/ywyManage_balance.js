$(function() {
    var userId = getQueryString('userId');
    var mobile = getQueryString('mobile');
    var accountNumber = getQueryString('accountNumber');
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

    var columns = [{
        title: '手机号',
        field: 'mobile',
        formatter: function () {
            return mobile;
        }
    }, {
        title: '账户余额',
        field: 'amount',
        formatter: moneyFormat
    }, {
        title: '冻结金额',
        field: 'frozenAmount',
        formatter: moneyFormat
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
        type: 'o2m',
        title: '资金流水',
        field: 'flow',
        columns: [{
            title: '流水编号',
            field: 'code'
        },{
            title: '业务类型',
            field: 'bizType',
            type: "select",
            key: "currency",
            formatter: Dict.getNameForList("biz_type")
        },{
            title: '变动金额',
            field: 'transAmount',
            formatter: moneyFormat
        },{
            title: '变动前金额',
            field: 'preAmount',
            formatter: moneyFormat
        },{
            title: '变动后金额',
            field: 'postAmount',
            formatter: moneyFormat
        },{
            title: '变动时间',
            field: 'createDatetime'
        },{
            title: '状态',
            field: 'status'
        },{
            title: '备注',
            field: 'remark'
        }],
        pageCode: '802524',
        o2mvalue: {
            accountNumber: accountNumber,
            userId:userId,
            companyCode:OSS.companyCode
        }
    }
    ];
    buildDetail({
        fields: columns,
        view: view,
        code: {
            kind: "C",
            companyCode:OSS.companyCode,
            userId: userId,
            currency: 'CNY'
        },
        detailCode: '802503',
        _keys: [0]
    });

});