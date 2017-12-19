$(function() {
    var isPlatform = sessionStorage.getItem('loginKind') === 'P';

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        title: "报告编号",
        field: "code"
    }, {
        title: '报告主人',
        field: 'reportUser',
        search: true,
        formatter: function(v,data) {
            if(data.F2){
                return JSON.parse(data.F2).realName;
            }
        }

    },{
        title: '手机号',
        field: 'mobile',
        search: true,
        formatter: function(v,data) {
            if(data.F1){
                return JSON.parse(data.F1).mobile;
            }
        }
    },{
        field: 'salesUserMobile',
        title: '所属业务员',
        search: isPlatform,
        type: isPlatform ? 'select' : '',
        pageCode: '805120',
        keyName: 'userId',
        valueName: 'mobile',
        params: {
            updater: '',
            kind: 'C'
        }
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
    }];
    buildList({
        router: 'reportBase',
        columns: columns,
        pageCode: '805330',
        searchParams: {
            kind: "C",
            companyCode:OSS.companyCode,
            salesUser: !isPlatform ? sessionStorage.getItem('userId') : ''
        }
    });
});