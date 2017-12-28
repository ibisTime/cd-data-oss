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
        field: 'F2',
        search: true,
        pageCode: '805120',
        params: {
            updater: '',
            kind: 'C'
        },
        formatter: function(v, data) {
            if (data.F2) {
                return JSON.parse(data.F2).realName;
            }
        }
    },{
        title: '手机号',
        field: 'F1',
        search: true,
        pageCode: '805120',
        params: {
            updater: '',
            kind: 'C'
        },
        formatter: function(v,data) {
            if(data.F1){
                return JSON.parse(data.F1).mobile;
            }
        }
    },{
        field: 'salesUser',
        title: '所属业务员',
        search: isPlatform,
        type: isPlatform ? 'select' : '',
        pageCode: '805120',
        keyName: 'userId',
        valueName: 'mobile',
        params: {
            updater: '',
            kind: 'B'
        },
        formatter: function (v,data) {
            return data.salesUserMobile;
        }

    }, {
        title: "类型",
        field: "type",
        type: "select",
        formatter: function (v,data) {
            if (data.type === '0') {
                return '获客'
            } else {
                return '订阅'
            }
        }
    }, {
        title: "报告规格",
        field: "portList",
        formatter: function (v,data) {
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
        formatter: function (v, data) {
            if (data.intact) {
                return ((+data.intact) * 100 + '%');
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
    $('#remarkBtn').on('click', function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">添加备注</li></ul>' +
                '</form>'
        });
        dw.showModal();
        buildDetail({
            fields: [{
                field: 'remark',
                title: '备注',
                maxlength: 255
            }],
            container: $('#formContainer'),
            buttons: [{
                title: '确定',
                handler: function() {
                    var data = $('#popForm').serializeObject();
                    data.creater = getUserId();
                    data.reportCode = selRecords[0].code;
                    reqApi({
                        code: '805301',
                        json: data
                    }).done(function() {
                        sucList();
                        setTimeout(function() {
                            dw.close().remove();
                        }, 500);
                    });
                }
            }, {
                title: '返回',
                handler: function() {
                    dw.close().remove();
                }
            }]
        });
        dw.__center();
    });
});