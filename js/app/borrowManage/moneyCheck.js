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
            data1[v] = data.user.realName;
            $('#applyUser').renderDropdown2(data1);
             return data.user.realName
        } ,     
        search: true
    }, {
        field: 'mobile',
        title: '手机号',
        formatter: function(v, data){
            return data.user.mobile;
        }
    },{
        field: 'overdueCode',
        title: '代码',
        formatter: function (v, data) {
            return data.user.overdueCode
        }
    },{
        field: 'amount',
        title: '借款金额',
        amount: true
    }, {
        field: 'yhAmount',
        title: '优惠金额',
        amount: true
    },  {
        field: 'bankcardNumber',
        title: '签约银行卡号',
        formatter:function(v,data){
            if(data.bankcard){
                return data.bankcard.bankcardNumber
            }
            
        }
    }, {
        field: 'signDatetime',
        title: '签约时间',
        formatter: dateTimeFormat
    }, {
        field: 'approver',
        title: '审核人'
    },{
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
            status: 0,
            isArchive: 0
        },
        pageCode: '623085'
    });

    $('#checkBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "./moneyCheck_check.html?Code=" + selRecords[0].code+"&v=1";
    });    

    $('#cancelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "./moneyCheck_cancel.html?Code=" + selRecords[0].code+"&v=1";
        

    });

    $('#reportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../oansBefore/audit_report.html?userId=" + selRecords[0].user.userId;

    });

    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }



        window.location.href = "./moneyCheck_addedit.html?userId=" + selRecords[0].user.userId+"&code="+selRecords[0].code+"&v=1";
    });
});