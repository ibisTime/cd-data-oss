$(function() {
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var view = getQueryString('v');
    
    var fields = [{
        field: 'name',
        title: '商品名',
        readonly: view,
        search: true,
        formatter:function(v,data){
            return data.product.name
        }
    }
    // , {
    //     field: 'level',
    //     title: '商品等级',
    //     type: "select",
    //     listCode: "623907",
    //     params:{
    //         parentKey:"product_level",
    //     },
    //     keyName:"dkey",
    //     valueName:"dvalue",
    //     readonly: view,
    // }
    , {
        field: 'amount',
        title: '借款金额',
        readonly: view,
        amount:true,
        formatter:function(v,data){
            return moneyFormat(data.product.amount)
        }
    }, {
        field: 'duration',
        title: '借款时长(天)',
        readonly: view,
        formatter:function(v,data){
            return data.product.duration
        }
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        readonly: view,
        formatter:function(v,data){
            return dateTimeFormat(data.applyDatetime)
        }
    }, {
        field: 'status',
        title: '状态',
        readonly: view,
    }, {
        field: 'remark',
        title: '备注',
        readonly: view,
    }, {
        title: '授信金额',
        field: 'sxAmount',
        amount:true,
    }, {
        title: '审核人',
        field: 'approver',
        maxlength: 250
    }, {
        title: '审核时间',
        field: 'approveDatetime',
        formatter: dateTimeFormat
    }, {
        title: '审核说明',
        field: 'approveNote',
        maxlength: 250
    }];
    
    buildDetail({
        fields: fields,
        view:view,
        code:code,
        detailCode: "623031",
    });
});