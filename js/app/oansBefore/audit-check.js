$(function() {
	
	var code = getQueryString('code');
    var userId = getQueryString('userId');
    var view = getQueryString('v');
	
	var fields = [{
        field: 'name',
        title: '商品名',
        readonly: view,
        formatter:function(v,data){
            return data.product.name
        }
    }
    // , {
    //     field: 'level',
    //     title: '商品等级',
    //     type: "select",
    //  	listCode: "623907",
    //     params:{
    //         parentKey:"product_level",
    //     },
    //     keyName:"dkey",
    //     valueName:"dvalue",
    //     readonly: view,
    //     formatter:function(v,data){
    //         return data.product.level
    //     }
    // }
    , {
        field: 'amount',
        title: '借款金额',
        readonly: view,
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
    },{
        field: 'sxAmount',
        title: '授信金额',
        required: true,
        maxlength: 250
    },{
        field: 'approveNote',
        title: '审核意见',
        required: true,
        maxlength: 250
    }];
	
    var options = {
        fields: fields,
        code:code,
        detailCode: '623031',

    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = getUserName();
                data["approveResult"] = "1";
                data["approveNote"] = $("#approveNote").val();
                data["sxAmount"] = moneyParse($("#sxAmount").val());               
                reqApi({
                    code: "623023",
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
                data['approver'] = getUserName();
                data["approveResult"] = "0";
                data["approveNote"] = $("#approveNote").val();
                data["sxAmount"] = moneyParse($("#sxAmount").val());
                reqApi({
                    code: "623023",
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