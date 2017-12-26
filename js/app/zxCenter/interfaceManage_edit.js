$(function() {
    var code = getQueryString('code');
    var columns = [{
        field: 'description',
        title: '详情描述',
        type: 'textarea',
        isNotFace: false
    }, {
        field: 'name',
        title: '名称'
    }, {
        field: 'orderNo',
        title: '顺序'
    }, {
        field: 'price',
        title: '价格',
        amount: true
    }];

    buildDetail({
        fields: columns,
        code: code,
        detailCode: '805226',
        editCode: '805221'
    });

});