$(function () {
    var code = getQueryString('code');
    var data1 = {};
    var data2 = {};
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'userId',
        title: '申请人',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.realName;
            $('#userId').renderDropdown2(data1);
             return data.user.realName
        } ,      
        search: true
    }, {
        field: 'mobile',
        title: '账号',
        formatter:function(v,data){
            return data.user.mobile
        }
    },{
        field: 'code',
        title: '借款编号'
    }];

    buildList({
        columns: columns,
        pageCode: '623094'
    });
 
    $('#renewalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "../afetrLoan/renewalRecords.html?Code=" + selRecords[0].code+"&v=1";
    });
    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }



        window.location.href = "./contractManage_addedit.html?userId=" + selRecords[0].user.userId+"&code="+selRecords[0].code+"&v=1";
    });

    $('#reportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../oansBefore/audit_report.html?userId=" + selRecords[0].user.userId;

    });

    $('#downloadBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./contractManage_addedit.html?userId=" + selRecords[0].user.userId+"&code="+selRecords[0].code+"&v=1&download=1";
    });

});