$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	
	var fields = [ {
        field: 'code1',
        title: '借款编号',
        formatter:function(v,data){
            return data.code
        },
        readonly:view,
    }, {
        field: 'mobile',
        title: '申请人',
        formatter:function(v,data){
            return data.user.mobile
        },
        readonly:view,
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
        readonly:view,
    }, {
        field: 'duration',
        title: '借款时长(天)',
        readonly:view,
    }, {
        field: 'lxAmount',
        title: '正常利息',
        amount: true,
        readonly:view,
    }, {
        field: 'fwAmount',
        title: '服务费',
        amount: true,
        readonly:view,
    }, {
        field: 'glAmount',
        title: '账户管理费',
        amount: true,
        readonly:view,
    }, {
        field: 'xsAmount',
        title: '快速信审费',
        amount: true,
        readonly:view,
    }, {
        field: 'yhAmount',
        title: '优惠金额',
        formatter:moneyFormat,
        readonly:view,
    }, {
        field: 'Amount',
        title: '实际应打款金额',
        formatter:function(v,data){
          return  moneyFormat(data.amount-(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)+data.yhAmount)

        },
        readonly:view,
    }, {
        field: 'bank',
        title: '签约银行',
        formatter:function(v,data){
            return Dict.getNameForList1('bank','623907',data.infoBankcard.bank)
        },
        readonly:view,
    }, {
        field: 'cardNo',
        title: '签约银行卡号',
        formatter:function(v,data){
            return data.infoBankcard.cardNo
        },
        readonly:view,
    }, {
        field: 'privinceCity',
        title: '签约银行所在地',
        formatter:function(v,data){
            return data.infoBankcard.privinceCity
        },
        readonly:view,
    }, {
        field: 'signDatetime',
        title: '签约时间',
        formatter: dateTimeFormat,
        readonly:view,
    }, {
        field: 'updateDatetime',
        title: '最后更新时间',
        formatter: dateTimeFormat,
        readonly:view,
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "borrow_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("borrow_status","623907"),
        readonly:view,
    }, {
        field: 'remark',
        title: '备注',
        readonly:view,
    },{
        field: 'approveNote',
        title: '审核意见',        
        maxlength: 250
    }];
	
	// buildDetail({
	// 	fields: fields,
	// 	code: code,
	// 	detailCode: '623086',
	// 	editCode: '623071',
	// 	beforeSubmit:function(data){
	// 		data.updater = getUserName();
	// 		return data;
	// 	}
	// });

    var options = {
        fields: fields,
        code:code,
        detailCode: '623086',

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
                reqApi({
                    code: "623075",
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
                reqApi({
                    code: "623075",
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