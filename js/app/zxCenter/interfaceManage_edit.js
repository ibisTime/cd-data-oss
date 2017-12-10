$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    // var des = getQueryString('description');
    // console.log(des);
    var columns = [{
        field: 'description',
        title: '详情描述',
        search: true,
        type: 'textarea'
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'orderNo',
        title: '顺序'
    }, {
        field: 'price',
        title: '价格',
        amount:true,
        formatter: moneyFormat
    }];

    buildDetail({
        fields: columns,
        code: code,
        detailCode: '805226',
        editCode: '805221',
        beforeSubmit: function(data) {
            data.updater = getUserId();
            return data;
        }
    });

});