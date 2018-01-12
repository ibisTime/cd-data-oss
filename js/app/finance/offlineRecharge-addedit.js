 $(function() {
    var view = !!getQueryString('v');
    var userId = getQueryString('userId') || '';


    var fields = [{
        field: 'accountNumber',
        title: '用户账户',
        required: true,
        type: 'select',
        pageCode: userId ? '802503' : '802500',
        keyCode1: '805906',
        dict: [
            ['currency', 'currency'],
            ['type', 'account_type']
        ],
        params: {
            currency: 'CNY',
            userId: userId,
            type: 'B'
        },
        keyName: 'accountNumber',
        valueName: '{{realName.DATA}} - {{currencyName.DATA}} - {{typeName.DATA}}',
        searchName: 'realName',
        help: '支持户名查询'
    }, {
        title: "充值数量",
        field: 'amount',
        required: true,
        amount: true,
        formatter: moneyFormat
    }, {
        field: 'applyNote',
        title: '充值说明',
        maxlength: 255
    }];

    var options = {
        fields: fields,
        addCode: '802700',
        view: view,
        beforeSubmit: function(data) {
            data.applyUser = getUserId();
            data.bizType = 'ZXZX_ZZ';
            return data;
        }
    };

    buildDetail(options);

})