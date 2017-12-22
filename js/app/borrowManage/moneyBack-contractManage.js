$(function () {
    var code = getQueryString('code');
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
            data1[v] = data.user.mobile;
            $('#applyUser').renderDropdown2(data1);
             return data.user.mobile
        } ,      
        search: true
    }, {
        field: 'applyUser',
        title: '账号',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.mobile;
            $('#applyUser').renderDropdown2(data1);
            return data.user.mobile
        } ,
        search: true
    },{
        field: 'code',
        title: '借款编号',
        search: true
    }];

    buildList({
        columns: columns,
        searchParams:{
            code:code
        },
        pageCode: '623093'
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