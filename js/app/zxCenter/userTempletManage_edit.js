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
        title: '模板价格',
        field: 'totalPrice'
    },{
        title: '接口列表',
        field: 'portList'
    }, {
        title: "修改时间",
        field: "updateDatetime",
        formatter: dateTimeFormat
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
        beforeSubmit: function(data) {
            data.updater = getUserId();
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