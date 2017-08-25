$(function () {
    var data1 = {};

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '借款编号',
        search: true
    }, {
        field: 'applyUser',
        title: '申请人',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.mobile;
            $('#applyUser').renderDropdown2(data1);
             return data.user.mobile
        } ,     
        search: true
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
    }, {
        field: 'lxAmount',
        title: '综合费用',
        formatter:function(v,data){
          return  moneyFormat(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)

        }
    }
    // , {
    //     field: 'lxAmount',
    //     title: '正常利息',
    //     amount: true,
    // }, {
    //     field: 'fwAmount',
    //     title: '服务费',
    //     amount: true,
    // }, {
    //     field: 'glAmount',
    //     title: '账户管理费',
    //     amount: true,
    // }, {
    //     field: 'xsAmount',
    //     title: '快速信审费',
    //     amount: true,
    // }
    ,{
        field: 'yhAmount',
        title: '优惠金额',
        amount: true,
    }, {
        field: 'Amount',
        title: '实际应打款金额',
        formatter:function(v,data){
          return  moneyFormat(data.amount-(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)+data.yhAmount)

        }
    }, {
        field: 'realName',
        title: '户名',
        formatter:function(v,data){
             return data.user.realName
        } ,   
    }, {
        field: 'bank',
        title: '签约银行',
        formatter:function(v,data){
            return Dict.getNameForList1('bank','623907',data.infoBankcard.bank)
        }
    }, {
        field: 'cardNo',
        title: '签约银行卡号',
        formatter:function(v,data){
            return data.infoBankcard.cardNo
        }
    }, {
        field: 'privinceCity',
        title: '签约银行所在地',
        formatter:function(v,data){
            return data.infoBankcard.privinceCity
        }
    }, {
        field: 'signDatetime',
        title: '签约时间',
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

    buildList({
        columns: columns,
        searchParams:{
            companyCode: OSS.companyCode,
            status: 1,
            isArchive: 0
        },
        pageCode: '623085'
    });

    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "./moneyWait_check.html?Code=" + selRecords[0].code+"&v=1";
    });    
    
    
    
    
});