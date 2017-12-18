$(function() {
    var userId = getQueryString('userId');
    var userKind = {
        "C": "C端用户",
        // "P": "平台用户"
    };
    var userRefereeType = {
        "operator": "市/区运营商",
        "o2o": "o2o商家",
        "supplier":"供应商",
        "mingsu":"民宿主",
        "f1":"VIP会员"
    };

    var columns = [{
        title: "",
        field: "",
        checkbox: true
    },{
        title: "报告编号",
        field: "code"
    }, {
        title: '报告主人',
        field: 'reportUser',
        formatter: function(v,data) {
            if(data.F2){
                return JSON.parse(data.F2).realName;
            }
        }

    },{
        title: '手机号',
        field: 'mobile',
        formatter: function(v,data) {
            if(data.F1){
                return JSON.parse(data.F1).mobile;
            }
        }
    },{
        field: 'salesUserMobile',
        title: '所属业务员',
    }, {
        title: "类型",
        field: "type",
        type: "select",
        formatter: function (v,data) {
            if(data.type === '0'){
                return '获客'
            }else{
                return '订阅'
            }
        }
    }, {
        title: "报告规格",
        field: "portList",
        formatter: function (v,data) {
            if(data.portList.indexOf('F1')!=-1){
                data.portList=data.portList.replace(/F1/, "手机认证")
            }
            if(data.portList.indexOf('F2')!=-1){
                data.portList=data.portList.replace(/F2/, "芝麻认证")
            }
            if(data.portList.indexOf('F3')!=-1){
                data.portList=data.portList.replace(/F3/, "基本信息认证")
            }
            if(data.portList.indexOf('PID1')!=-1){
                data.portList=data.portList.replace(/PID1/, "身份证正反面")
            }
            if(data.portList.indexOf('PDW2')!=-1){
                data.portList=data.portList.replace(/PDW2/, "强制定位")
            }
            if(data.portList.indexOf('PTXL3')!=-1){
                data.portList=data.portList.replace(/PTXL3/, "通讯录认证")
            }
            if(data.portList.indexOf('PYYS4')!=-1){
                data.portList=data.portList.replace(/PYYS4/, "运营商认证")
            }
            if(data.portList.indexOf('PZM5')!=-1){
                data.portList=data.portList.replace(/PZM5/, "芝麻信用认证")
            }
            if(data.portList.indexOf('PZM6')!=-1){
                data.portList=data.portList.replace(/PZM6/, "行业关注清单认证")
            }
            if(data.portList.indexOf('PZM7')!=-1){
                data.portList=data.portList.replace(/PZM7/, "欺诈三接口认证")
            }
            if(data.portList.indexOf('PTD8')!=-1){
                data.portList=data.portList.replace(/PTD8/, "同盾认证")
            }
            return data.portList;
        }
    }, {
        title: "完整度",
        field: "intact",
        formatter: function (v,data) {
            if(data.intact){
                return ((+data.intact)*100+'%');
            }
        }
    }, {
        title: "填写时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    }
    ];

    buildList({
        router: 'members',
        columns: columns,
        pageCode: '805330',
        searchParams: {
            kind: "C",
            companyCode:OSS.companyCode,
            loanUser:userId
        }
    });
    $('#addRemarkBtn').css('display','none');
    $('#activeBtn').css('display','none');
    $('#newestReportBtn').css('display','none');
    $('#reportListBtn').css('display','none');

    $('.tools .toolbar').html('<li style="display:block;" id="detailBtn"><span><img src="/static/images/t01.png"></span>详情</li><li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        goBack();
    });
    $('#detailBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "reportBase_addedit.html?v=1&code=" + selRecords[0].code;
    });
});