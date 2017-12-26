$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '编号',
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'orderNo',
        title: '顺序'
    }, {
        field: 'price',
        title: '价格',
        formatter: moneyFormat
    },{
        field: 'updateDatetime',
        title: '修改时间',
        formatter: dateTimeFormat
    }];
    buildList({
        columns: columns,
        pageCode: '805225',
        searchParams: {
            channelType: '0',
            companyCode: OSS.companyCode
        }
    });
    $("#editBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "interfaceManage_edit.html?code=" + selRecords[0].code;
    })

});