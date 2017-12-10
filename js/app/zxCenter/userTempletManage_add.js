$(function() {
    console.log('123');
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
        title: '是否默认',
        field: 'isDefault'
    },{
        title: '用户编号',
        field: 'userId'
    },{
        title: '模板名称',
        field: 'name'
    },{
        title: '接口列表',
        field: 'portList'
    },{
        title: '备注',
        field: 'remark'
    }
    ];
    buildDetail({
        fields: columns,
        detailCode: '805236',
        editCode: '805232',
        addCode: '805230',
        beforeSubmit: function(data) {
            data.updater = getUserId();
            return data;
        }
    });


});