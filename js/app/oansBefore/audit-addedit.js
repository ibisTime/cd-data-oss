$(function() {
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var view = getQueryString('v');    
    var borrowCount,overdueCode,renewalCount;
    var fields = [{
        field: 'mobile',
        title: '申请人',
        formatter: function(v,data){  
            borrowCount = data.user.borrowCount;
            overdueCode = data.user.overdueCode;
            renewalCount = data.user.renewalCount;
            return data.user.mobile
        },
        afterSet:function(data){
            var html='<div class="tools" style="float: right;margin-left: 20px;">'+
                        '<div>'+
                            '<span style="float: left;margin-left: 20px;">借款次数:'+ borrowCount+' </span>'+
                            '<span style="float: left;margin-left: 20px;">逾期代码: '+ overdueCode +' </span>'+
                            '<span style="float: left;margin-left: 20px;">续期次数: '+  renewalCount +' </span>'+
                        '</div>'+               
                        '<ul class="toolbar"  style="float: left;">'+
                            '<li style="display:block;" id="reportBtn"><span><img src="/static/images/t01.png"></span>查看资信报告</li>'+
                        '</ul>'+
                     '</div>';            
            $('#mobile').append(html);
            $('#reportBtn').click(function() {
                window.location.href = "audit_report.html?userId=" + userId;
            });            
        },        
        readonly: view
    },{
        field: 'name',
        title: '申请产品',
        readonly: view,
        search: true,
        formatter:function(v,data){
            return data.product.name
        }
    }, {
        field: 'amount',
        title: '借款金额',
        readonly: view,
        amount:true,
        formatter:function(v,data){
            return moneyFormat(data.product.amount)
        }
    }, {
        field: 'sxAmount',
        title: '授信金额',
        readonly: view,
        amount:true,
        formatter:function(v,data){
            return moneyFormat(data.sxAmount)
        }
    }, {
        field: 'duration',
        title: '借款时长(天)',
        readonly: view,
        formatter:function(v,data){
            return data.product.duration
        }
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        readonly: view,
        formatter:function(v,data){
            return dateTimeFormat(data.applyDatetime)
        }
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList("apply_status","623907"),
        readonly: view,
    }, {
        field: 'remark',
        title: '备注',
        readonly: view,
    }, {
        title: '审核人',
        field: 'approver',
        maxlength: 250
    }, {
        title: '审核时间',
        field: 'approveDatetime',
        formatter: dateTimeFormat
    }, {
        title: '审核说明',
        field: 'approveNote',
        maxlength: 250
    }];
    
    buildDetail({
        fields: fields,
        view:view,
        code:code,
        detailCode: "623031",
    });
});