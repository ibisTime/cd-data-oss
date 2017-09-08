$(function () {
    var code = getQueryString('code');
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '续期编号'
    }, {
        field: 'cycle',
        title: '续期周期',
    }, {
        field: 'curNo',
        title: '第几次续期',
    }, {
        field: 'fwAmount',
        title: '续期服务费',
        amount: true
    }, {
        field: 'xsAmount',
        title: '续期信审费',
        amount: true
    }, {
        field: 'glAmount',
        title: '续期管理费',
        amount: true
    }, {
        field: 'yqAmount',
        title: '需支付的逾期费用',
        amount: true
    }, {
        field: 'lxAmount',
        title: '续期正常利息',
        amount: true
    }, {
        field: 'lxAmount',
        title: '续期总金额',
        amount: true
    }, {
        field: 'payCode',
        title: '三方支付编号',
    }, {
        field: 'payDatetime',
        title: '支付时间',
        formatter: dateTimeFormat
    }, {
        field: 'payType',
        title: '支付方式'
    }, {
        field: 'renewalCount',
        title: '订单续期(次)',
    }, {
        field: 'createDatetime',
        title: '续期时间',
        formatter: dateTimeFormat
    }, {
        field: 'startDate',
        title: '续期开始时间',
        formatter: dateTimeFormat
    }, {
        field: 'endDate',
        title: '续期结束时间',
        formatter: dateTimeFormat
    }, {
        field: 'step',
        title: '续期步长'
    }, {
        field: 'createDatetime',
        title: '续期时间',
        formatter: dateTimeFormat
    }, {
        field: 'createDatetime',
        title: '续期时间',
        formatter: dateTimeFormat
    }];

    buildList({
        columns: columns,
        searchParams:{
            borrowCode: code
        },        
        pageCode: '623090'
    });
       
});