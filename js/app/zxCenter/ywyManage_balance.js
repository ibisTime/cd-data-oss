$(function() {
    var userId = getQueryString('userId');
    var mobile = getQueryString('mobile');
    var accountNumber = getQueryString('accountNumber');
    var view = getQueryString('v');

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
        title: "注册时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    },
    //     {
    //     title: "推荐人",
    //     field: "loginName",
    //     formatter: function (v, data) {
    //         if(data.refereeUser.loginName) {
    //             return data.refereeUser.loginName
    //         }
    //     }
    // },
        {
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
        }, {
            title: '业务类型',
            field: 'bizType',
            type: "select",
            key: "currency",
            formatter: Dict.getNameForList("biz_type")
        },  {
            title: '变动金额',
            field: 'transAmount',
            formatter: moneyFormat
        }, {
            title: '变动前金额',
            field: 'preAmount',
            formatter: moneyFormat
        }, {
            title: '变动后金额',
            field: 'postAmount',
            formatter: moneyFormat
        }, {
            title: '变动时间',
            field: 'createDatetime',
            formatter: dateTimeFormat
        }, {
            title: '状态',
            field: 'status',
            formatter: Dict.getNameForList('jour_status')
        }, {
            title: '业务说明',
            field: 'bizNote'
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
    }];
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