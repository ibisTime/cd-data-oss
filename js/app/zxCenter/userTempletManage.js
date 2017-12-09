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
        title: '模板价格',
        field: 'totalPrice'
    }, {
        title: "修改时间",
        field: "updateDatetime",
        formatter: dateTimeFormat
    },{
        title: '备注',
        field: 'remark'
    }
    ];
    buildList({
        router: 'zxCenter',
        columns: columns,
        pageCode: '805235',
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
        window.location.href = "./userTempletManage_edit.html?Code=" + selRecords[0].code+"&portList="+selRecords[0].portList;
    });

});