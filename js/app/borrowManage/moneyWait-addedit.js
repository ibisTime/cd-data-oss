$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	
	var fields = [ {
        field: 'code1',
        title: '借款编号',
        formatter:function(v,data){
            return data.code
        }
    }, {
        field: 'mobile',
        title: '申请人',
        formatter:function(v,data){
            return data.user.mobile
        }
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
    }, {
        field: 'duration',
        title: '借款时长(天)',
    }, {
        field: 'lxAmount',
        title: '正常利息',
        amount: true,
    }, {
        field: 'fwAmount',
        title: '服务费',
        amount: true,
    }, {
        field: 'glAmount',
        title: '账户管理费',
        amount: true,
    }, {
        field: 'xsAmount',
        title: '快速信审费',
        amount: true,
    }, {
        field: 'lxAmount1',
        title: '综合费用',
        formatter:function(v,data){
          return  moneyFormat(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)

        },
        readonly:view,
    }, {
        field: 'yhAmount',
        title: '优惠金额',
        // amount: true,
        formatter:moneyFormat
    }, {
        field: 'Amount',
        title: '实际应打款金额',
        formatter:function(v,data){
          return  moneyFormat(data.amount-(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)+data.yhAmount)

        },
        readonly:view,
    }, {
        field: 'realName',
        title: '户名',
        formatter:function(v,data){
             return data.user.realName
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
        formatter: dateTimeFormat
    }, {
        field: 'updateDatetime',
        title: '最后更新时间',
        formatter: dateTimeFormat
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "borrow_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("borrow_status","623907")
    }, {
        field: 'remark',
        title: '备注',
    }];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		detailCode: '623086',
		addCode: '623000',
		editCode: '623001',
		beforeSubmit:function(data){
			data.updater = getUserId();
			return data;
		}
	});

});