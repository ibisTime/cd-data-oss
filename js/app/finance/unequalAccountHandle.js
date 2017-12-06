$(function() {
    console.log("111");
    var code = getQueryString('code');
    var jourCode = getQueryString('jourCode');
    var view = true;

    var fields = [{
            field: 'realName',
            title: '户名',
            formatter: function(v, data) {
                return data.realName
            },
            search:true
        }, {
            field: 'accountNumber',
            title: '账号',
            formatter: function(v, data) {
                return data.realName
            }
        }, {
            field: 'channelType',
            title: '渠道',
            type: 'select',
            key: 'channel_type',
            formatter: Dict.getNameForList('channel_type'),
            search: true
        }, {
            field: 'bizType',
            title: '业务类型',
            type: 'select',
            key: 'biz_type',
            formatter: Dict.getNameForList('biz_type'),
            search: true
        }, {
            field: 'transAmount',
            title: '变动金额',
            formatter: moneyFormat
        }, {
            field: 'preAmount',
            title: '变动前金额',
            formatter: moneyFormat
        }, {
            field: 'postAmount',
            title: '变动后金额',
            formatter: moneyFormat
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'jour_status',
            formatter: Dict.getNameForList('jour_status'),
            search: true
        }, {
        title: '备注',
        field: 'tips',
        maxlength: 250,
        required: true
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '802806',
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.adjustResult = '1';
                data.adjustUser = getUserName();
                reqApi({
                    code: '802801',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.adjustResult = '0';
                data.adjustUser = getUserName();
                reqApi({
                    code: '802801',
                    json: data
                }).done(function(data) {
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