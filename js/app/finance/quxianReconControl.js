$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '户名',
        search: true
    }, {
        field: 'currency',
        title: '币种',
        type: 'select',
        key: 'currency',
        formatter: Dict.getNameForList("currency"),
        search: true
    }, {
        field: 'channelType',
        title: '渠道',
        key: 'channel_type',
        formatter: Dict.getNameForList('channel_type')
    }, {
        field: 'bizType',
        title: '业务类型',
        key: 'biz_type',
        formatter: Dict.getNameForList('biz_type')
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
        field: 'createDatetime',
        title: '创建时间',
        formatter: dateTimeFormat
    }, {
        field1: 'dateStart',
        title1: '创建时间',
        type: 'date',
        field2: 'dateEnd',
        twoDate: true,
        search: true,
        visible: false
    }, {
        field: 'workDate',
        title: '拟对账日期',
        type: 'date',
        search: true
    }];
    buildList({
        columns: columns,
        pageCode: '802520',
        beforeDetail: function(data) {
            location.href = "ledger_addedit.html?v=1&code=" + data.code;
        },
        beforeEdit: function(r) {
            if (r.status != '1') {
                toastr.info('该记录不是待对账状态');
                return false;
            }
            return true;
        },
        searchParams: {
            "accountNumber":"",
            "type":"P",
            "kind":"0",
            "companyCode": OSS.companyCode,
            "systemCode": OSS.companyCode,
            "bizType": -11,
            "channelType": 'out'
        },
        beforeSearch: function(data) {
            if (data.workDate) {
                data.workDate = data.workDate.replace(/-/g, "");
                return data;
            }
            return data;
        }
    });

});