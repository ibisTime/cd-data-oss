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
    },{
        field: 'mobile',
        title: '账号',
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
        title: '放款时间'
    }, {
        field: 'hkDatetime',
        title: '到期时间'
    },  {
        field: 'yqDays',
        title: '逾期天数'
    },{
        field: 'amount',
        title: '借款金额',
        amount: true
    }, {
        field: 'code',
        title: '借款编号',
        search: true
    }, {
        field: 'mobile',
        title: '实际打款金额',
        formatter: function(v, data){
            return data.user.mobile;
        }
    }, {
        field: 'yqlxAmount',
        title: '逾期利息',
        amount: true
    },  {
        field: 'totalAmount',
        title: '应收'
    }, {
        field: 'renewalCount',
        title: '逾期次数'
    },  {
        field: 'status',
        title: '状态',
        type: "select",
        key: "borrow_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("borrow_status","623907")
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        columns: columns,
        searchParams:{
            companyCode: OSS.companyCode,
            status: 6
        },
        pageCode: '623085'
    });
    
    $('#addRemarkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./addRemark.html?code=" + selRecords[0].code;

    });      
    
});