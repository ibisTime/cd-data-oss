$(function () {
    var data1 = {};
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'applyUser',
        title: '申请人',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.mobile
            $('#applyUser').renderDropdown2(data1)
             return data.user.mobile
        } ,      
        search: true
    },{
        field: 'mobile',
        title: '手机号',
        formatter: function(v, data){
            return data.user.mobile;
        }
    }, {
        field: 'overdueCode',
        title: '代码',
        formatter: function (v, data) {
            return data.user.overdueCode
        }
    }, {
        field: 'approver',
        title: '审核人'
    },{
        field: 'fkDatetime',
        title: '放款时间',
        formatter: dateTimeFormat
    }, {
        field: 'mobile',
        title: '到期时间',
        formatter: function(v, data){
            return data.user.mobile;
        }
    },{
        field: 'remainDays',
        title: '还款剩余天数',
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
    },  {
        field: 'code',
        title: '借款编号',
        search: true
    },
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
    // }, {
    //     field: 'yhAmount',
    //     title: '优惠金额',
    //     amount: true,
    // }, {
    //     field: 'renewalCount',
    //     title: '订单续期(次)',
    // }
      {
            field: 'mobile',
            title: '优惠费用（元）',
            formatter: function(v, data){
                return data.user.mobile;
            }
        }, {
            field: 'mobile',
            title: '实际打款（元）',
            formatter: function(v, data){
                return data.user.mobile;
            }
        },  {
        field: 'loanType',
        title: '放款方式',
        type: "select",
        key: "loan_type",
        keyCode:"623907",
        formatter: Dict.getNameForList("loan_type","623907"),
        search: true
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "borrow_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("borrow_status","623907")
    }, {
            field: 'mobile',
            title: '续期次数',
            formatter: function(v, data){
                return data.user.mobile;
            }
        }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        searchParams:{
            companyCode: OSS.companyCode,
            status: 3,
            isArchive: 0,
            isOverdue: 0
        },
        pageCode: '623085'
    });
 
    $('#renewalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "../afetrLoan/renewalRecords.html?Code=" + selRecords[0].code+"&v=1";
    });
    $('#contractManageBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }


        window.location.href = "./moneyBack_contractManage?Code=" + selRecords[0].code+"&v=1";
    });

});