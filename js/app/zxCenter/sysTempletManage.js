$(function() {
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
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '模板编号',
        field: 'code',
        search: true
    },{
        title: '模板名称',
        field: 'name'
    },{
        title: '接口列表',
        field: 'portList',
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
    },{
        title: '模板价格',
        field: 'totalPrice'
    }, {
        title: "修改时间",
        field: "updateDatetime",
        formatter: dateTimeFormat
    }
    ];
    buildList({
        router: 'zxCenter',
        columns: columns,
        pageCode: '805245',
        searchParams: {
            kind: "C",
            companyCode:OSS.companyCode
        }
    });

    $('#editBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "sysTempletManage_edit.html?Code=" + selRecords[0].code+"&portList="+selRecords[0].portList;
    });


});