$(function() {
    var userId = getQueryString('userId');

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        title: '姓名',
        field: 'realName',
        search: true,
        formatter: function (v, data) {
            if(data['F2']) {
                return JSON.parse(data['F2']).realName;
            }
        }
    }, {
        title: '手机号',
        field: 'mobile',
        search: true,
        formatter: function (v, data) {
            if(data['F1']) {
                return JSON.parse(data['F1']).mobile;
            }
        }
    }, {
            title: '身份证号',
            field: 'realName',
            formatter: function (v, data) {
                if(data['F2']) {
                    return JSON.parse(data['F2']).idNo;
                }
            }
        },
        {
            title: '住址',
            field: 'realName',
            formatter: function (v, data) {
                if(data['F3']) {
                    return JSON.parse(data['F3']).provinceCity + JSON.parse(data['F3']).address;
                }
            }
        }
    ];
    buildList({
        columns: columns,
        pageCode: '805350',
        searchParams: {
            salesUser: userId
        }
    });


    $('.tools .toolbar').html('<li style="display:block;" id="newestReportBtn"><span><img src="/static/images/t01.png"></span>最新报告</li><li style="display:block;" id="reportListBtn"><span><img src="/static/images/t01.png"></span>报告列表</li><li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#newestReportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "userBase_newestReport.html?UserId=" + selRecords[0].loanUser;
    });
    $('#reportListBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "userBase_reportList.html?userId=" + selRecords[0].loanUser;
    });
    $('#backBtn').on('click', function() {
        goBack();
    });
});