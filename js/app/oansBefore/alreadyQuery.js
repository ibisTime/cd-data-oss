$(function() {
    var userKind = {
        "C": "C端用户",
        // "P": "平台用户"
    };
    var data1 = {}, data2 = {};
  

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'applyUser',
        title: '申请人',
        type: 'select',
        formatter: function(v,data){
            data1[v] = data.user.realName;
            $('#applyUser').renderDropdown2(data1);           
            return data.user.realName
        },
        search: true
    }, {
        field: 'userId',
        title: '手机号',
        type: 'select',
        formatter: function(v, data){
            data2[data.user.userId] = data.user.mobile;
            $('#userId').renderDropdown2(data2);
            return data.user.mobile;
        },
        search: true

    },  {
        field: 'amount',
        title: '借款金额',
        formatter: function(v,data){
            return moneyFormat(data.product.amount)
        }
    }, {
        field: 'sxAmount',
        title: '授信金额',
        formatter: moneyFormat
    }, {
        field: 'overdueCode',
        title: '代码',
        formatter: function (v, data) {
            return data.user.overdueCode
        }
    },{
        field: 'approver',
        title: '审核人'
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        formatter: dateTimeFormat
    },{
        field: 'approveDatetime',
        title: '审核时间',
        formatter: dateTimeFormat
    },{
        field: 'status',
        title: '状态',
        // type: "select",
        // listCode: "623907",
        // params:{
        //     parentKey:"apply_status",
        // },
        // keyName:"dkey",
        // valueName:"dvalue",
        formatter: function(v,data){
            return "审核通过"
        },
        // search: true
    },{
        field: 'approveNote',
        title: '审核说明'
    },{
        field: 'remark',
        title: '备注'
    }];
    buildList({
        router: 'members',
        columns: columns,
        pageCode: '623030',
        searchParams: {
            // companyCode:OSS.companyCode
            statusList:[4,5,6,7,8,10]
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
                    toastr.info(selRecords[0].user.mobile + "不是待审核状态!");
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

         
            
        window.location.href = "./alreadyQuery_addedit.html?userId=" + selRecords[0].user.userId+"&code="+selRecords[0].code+"&v=1";
    });


});