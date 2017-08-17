$(function() {
    var userKind = {
        "C": "C端用户",
        // "P": "平台用户"
    };
  

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'applyUser',
        title: '申请人',
        formatter: function(v,data){
            return data.user.mobile
        }
    }, {
        field: 'name',
        title: '产品名',
        search: true,
        formatter: function(v,data){
            return data.product.name
        }
    }
    // , {
    //     field: 'level',
    //     title: '产品等级',
    //     type: "select",
    //     keyCode: "623907",
    //     params:{
    //         parentKey:"product_level",
    //     },
    //     keyName:"dkey",
    //     valueName:"dvalue",
    //     required: true,       
    //     formatter: function(v,data){
    //         return data.product.level
    //     }        
    // }
    , {
        field: 'amount',
        title: '借款金额',
        formatter: function(v,data){
            return moneyFormat(data.product.amount)
        }
    }, {
        field: 'duration',
        title: '借款时长(天)',
        formatter: function(v,data){
            return data.product.duration 
        }
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        formatter: function(v,data){
            return dateTimeFormat(data.applyDatetime)
        }
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        listCode: "623907",
        params:{
            parentKey:"apply_status",
        },
        keyName:"dkey",
        valueName:"dvalue",
        formatter: function(v,data){
            return data.status
        },
        search: true
    },{
        field: 'remark',
        title: '备注',
    }];
    buildList({
        router: 'members',
        columns: columns,
        pageCode: '623030',
        searchParams: {
            // companyCode:OSS.companyCode
        }
    });

    $('#reportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "audit_report.html?userId=" + selRecords[0].user.userId;

    }); 

    $('#checkBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 2) {
                    toastr.info(selRecords[0].code + "不是待审核状态!");
                    return;
                }        

        var dataCode = selRecords[0].code;
        window.location.href = "audit_check.html?userId=" + selRecords[0].userId+"&code="+selRecords[0].code+"&v=1";

    });       

    
    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

         
            
        window.location.href = "./audit_addedit.html?userId=" + selRecords[0].userId+"&code="+selRecords[0].code+"&v=1";
    });    
       
});