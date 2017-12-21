$(function() {
    var currency = getQueryString('currency') || "";
    var accountNumber = getQueryString('accountNumber') || "";
    var kind = getQueryString('kind') || "";

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '户名',
    },
    //     {
    //     field: 'channelType',
    //     title: '渠道',
    //     type: 'select',
    //     key: 'channel_type',
    //     search: true,
    //     formatter: Dict.getNameForList('channel_type'),
    // },
        {
        title: "币种",
        field: "currency",
        type: "select",
        key: "currency",
        formatter: Dict.getNameForList("currency")
    }, {
        field: 'bizType',
        title: '业务类型',
        type: 'select',
        search: true,
        key: 'biz_type',
        formatter: Dict.getNameForList("biz_type")
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
        title: "创建时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    }, {
            field1: 'dateStart',
            title1: '创建时间',
            type: 'date',
            field2: 'dateEnd',
            twoDate: true,
            search: true,
            visible: false
        },{
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'jour_status',
        search: true,
        formatter: Dict.getNameForList('jour_status'),
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        columns: columns,
        pageCode: "802520",
        searchParams: {
            "accountNumber":"",
            "type":"P",
            "kind":"0",
            "companyCode":OSS.companyCode,
            "systemCode":OSS.companyCode,
            "bizType":"ZXZX_BG"

        }
    });


    $('#examineBtn').on('click', function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != '1') {
            toastr.info('该记录不是待对账状态');
            return false;
        }
        location.href = "autoReconControl_addedit.html?v=1&code=" + selRecords[0].code;
    });

});