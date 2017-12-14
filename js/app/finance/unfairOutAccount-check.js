$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [ {
        field: 'code',
        title: '编号',
        readonly:view
    }, {
        field: 'accountName',
        title: '户名',
        readonly:view
    }, {
        field: 'currency',
        title: '币种',
        type: 'select',
        key: 'coin',
        formatter: Dict.getNameForList("coin"),
        readonly:view
    }, {
        field: 'direction',
        title: '方向',
        type: 'select',
        data: {
            '0': '红冲',
            '1': '蓝补'
        },
        readonly:view
    }, {
        field: 'amount',
        title: '金额',
        formatter: moneyFormat,
        readonly:view
    }, {
        field: 'applyUser',
        title: '申请人',
        readonly:view
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        formatter: dateTimeFormat,
        field1: 'applyDateStart',
        title1: '申请时间',
        type: 'date',
        field2: 'applyDateEnd',
        twoDate: true,
        readonly:view
    }, {
        field: 'approveUser',
        title: '审核人',
        readonly:view
    }, {
        field: 'approveDatetime',
        title: '审核时间',
        formatter: dateTimeFormat,
        field1: 'approveDateStart',
        title1: '审核时间',
        type: 'date',
        field2: 'approveDateEnd',
        twoDate: true,
        readonly:view
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'hl_status',
        formatter: Dict.getNameForList('hl_status'),
        readonly:view
    }, {
        field: 'jourCode',
        title: '流水编号',
        readonly:view
    }, {
        field: 'adjustNote',
        title: '调帐说明',
        maxlength: 250,
        required: true
    }];

    var options = {
        fields: fields,
        code:code,
        detailCode: '802805'
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['adjustUser'] = getUserName();
                data["adjustResult"] = "1";
                data["adjustNote"] = $("#adjustNote").val();
                reqApi({
                    code: "802801",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['adjustUser'] = getUserName();
                data["adjustResult"] = "1";
                data["adjustNote"] = $("#adjustNote").val();
                reqApi({
                    code: "802801",
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