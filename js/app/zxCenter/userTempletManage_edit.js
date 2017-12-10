$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    var userKind = {
        "C": "C端用户",
        // "P": "平台用户"
    };
    var userRefereeType = {
        "operator": "市/区运营商",
        "o2o": "o2o商家",
        "supplier":"供应商",
        "mingsu":"民宿主",
        "f1":"VIP会员",
    };

    var columns = [{
        title: '模板名称',
        field: 'name'
    },{
        title: '接口列表',
        field: 'portList',
        type: "checkbox",
        items: [
            {
                key: 'F1',
                value: '手机认证',
                disabled: true
            },{
                key: 'F2',
                value: '芝麻认证',
                disabled: true
            },{
                key: 'F3',
                value: '基本信息认证',
                disabled: true
            },{
                key: 'PID1',
                value: '身份证正反面'
            },{
                key: 'PDW2',
                value: '强制定位'
            },{
                key: 'PTXL3',
                value: '通讯录认证'
            },{
                key: 'PYYS4',
                value: '运营商认证'
            },{
                key: 'PZM5',
                value: '芝麻信用认证'
            },{
                key: 'PZM6',
                value: '行业关注清单认证'
            },{
                key: 'PZM7',
                value: '欺诈三接口认证'
            },{
                key: 'PTD8',
                value: '同盾认证'
            }
        ],
    },{
        title: '备注',
        field: 'remark'
    }
    ];
    buildDetail({
        fields: columns,
        code: code,
        detailCode: '805236',
        editCode: '805232',
        addCode: '805230',
        beforeSubmit: function(data) {
            data.updater = getUserId();
            if(data.portList!=undefined){
                data.portList = 'F1,'+'F2,'+'F3,'+data.portList;
            }else{
                data.portList = 'F1,F2,F3'
            }

            return data;
        }
    });

    $('#editBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./userTempletManage_edit?userId=" + selRecords[0].userId;
    });

});