$(function () {
    var data1 = {};
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },  {
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
    },  {
        field: 'fkDatetime',
        title: '放款时间',
        formatter: dateTimeFormat
    }, {
        field: 'mobile',
        title: '到期时间',
        formatter: function(v, data){
            return data.user.mobile;
        }
    }, {
        field: 'yqDays',
        title: '逾期天数',
    },{
        field: 'amount',
        title: '借款金额',
        amount: true,
    }, {
        field: 'code',
        title: '借款编号',
        search: true
    }, {
        field: 'loanType',
        title: '放款方式',
        type: "select",
        key: "loan_type",
        keyCode:"623907",
        formatter: Dict.getNameForList("loan_type","623907")
    },{
            field: 'mobile',
            title: '实际放款金额',
            formatter: function(v, data){
                return data.user.mobile;
            }
        }, {
            field: 'renewalCount',
            title: '续期次数',
            formatter: function(v, data){
                return data.user.mobile;
            }
        }, {
            field: 'mobile',
            title: '应收',
            formatter: function(v, data){
                return data.user.mobile;
            }
        }];

    buildList({
        columns: columns,
        searchParams:{
            companyCode: OSS.companyCode,
            status: 5,
            isOverdue: 1,
            isArchive: 0
        },
        pageCode: '623085'
    });
 
    $('#renewalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "./renewalRecords.html?Code=" + selRecords[0].code+"&v=1";
    });  
 
    $('#confirmBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "./outTime_confirm.html?Code=" + selRecords[0].code+"&v=1";
    });    

    $('#reportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../oansBefore/audit_report.html?userId=" + selRecords[0].user.userId;

    });     
    

    $('#pressBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        var data = { code: selRecords[0].code};
        confirm("确认发短信对该用户进行催缴？").then(function() {
            reqApi({
                code: '623080',
                json: data
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        },function(){});  
      
       
    });       

    
});