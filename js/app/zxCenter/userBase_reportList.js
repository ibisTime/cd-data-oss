$(function() {
    var userId = getQueryString('userId');

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
        title: '所属业务员'
    }, {
        title: "类型",
        field: "type",
        type: "select",
        formatter: function (v, data) {
            return data.type === '0' ? '获客' : '订阅';
        }
    }, {
        title: "报告规格",
        field: "portList",
        formatter: function (v, data) {
            return data.portList.replace(/F1/, "手机认证")
                .replace(/F2/, "芝麻认证")
                .replace(/F3/, "基本信息认证")
                .replace(/PID1/, "身份证正反面")
                .replace(/PDW2/, "强制定位")
                .replace(/PTXL3/, "通讯录认证")
                .replace(/PYYS4/, "运营商认证")
                .replace(/PZM5/, "芝麻信用认证")
                .replace(/PZM6/, "行业关注清单认证")
                .replace(/PZM7/, "欺诈三接口认证")
                .replace(/PTD8/, "同盾认证");
        }
    }, {
        title: '状态',
        field: 'status',
        search: true,
        type: 'select',
        data: {
            '0': '未读',
            '1': '已读',
            '2': '已过期'
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
    }, {
        title: '最新备注',
        field: 'reportRemarkList',
        formatter: function (v) {
            return v ? v[v.length - 1].remark : '-';
        }
    }];

    buildList({
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