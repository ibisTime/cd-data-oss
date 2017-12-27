$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '所属业务员',
        field: 'salesUserMobile'
    }, {
        title: '模板名称',
        field: 'name'
    }, {
        title: '模板价格',
        field: 'totalPrice',
        formatter: function (v,data) {
            return moneyFormat(data.totalPrice);
        }
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
        deleteCode: '805231',
        searchParams: {
            kind: "C",
            companyCode:OSS.companyCode,
            orderColumn: 'update_datetime',
            orderDir: 'desc'
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