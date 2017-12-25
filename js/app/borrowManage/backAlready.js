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
            data1[v] = data.user.realName
            $('#applyUser').renderDropdown2(data1)
             return data.user.realName
        } ,      
        search: true
    }, {
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
    }, {
        field: 'fkDatetime',
        title: '放款时间'
    }, {
        field: ' realHkDatetime',
        title: '还款时间',
        formatter: dateTimeFormat,
    },{
        field: 'amount',
        title: '借款金额',
        amount: true,
    }, {
        field: 'code',
        title: '借款编号',
        search: true
    }, {
        field: 'mobile',
        title: '打款金额（元）'
    }, {
        field: 'loanType',
        title: '放款方式',
        formatter: function(v,data){
            return  Dict.getNameForList1('loan_type','623907',data.borrow.loanType)
        }
    }, {
        field: 'mobile',
        title: '续期费用（元）'
    }, {
        field: 'realHkAmount',
        title: '还款金额（元）'
    },  {
        field: 'payType',
        title: '还款方式',
        formatter: function (v, data) {
            if(data.payType === '5') {
                return '宝付银行卡代扣（自动）';
            }else if(data.payType === '6') {
                return '宝付银行卡代扣（客户）';
            }else {
                return '宝付银行卡代扣（平台）' ;
            }
        }
    }, {
        field: 'renewalCount',
        title: '续期次数',
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
            status: 4,
            isArchive: 0,
            isOverdue: 0
        },
        pageCode: '623085'
    });
 
     $('#filedBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }


        confirm("确定归档该笔订单？").then(function() {
            reqApi({
                code: '623074',
                json: {
                    code: selRecords[0].code,
                    updater: getUserName()
                }
            }).then(function() {
                sucList();
            });

        },function(){});

    });    
    

    
});