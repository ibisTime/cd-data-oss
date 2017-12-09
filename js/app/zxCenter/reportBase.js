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
    },{
        title: "报告编号",
        field: "reportNo"
    }, {
        title: '报告主人',
        field: 'reportUser',
        search: true

    }, {
        title: '手机号',
        field: 'mobile'
    },{
        field: 'counterMan',
        title: '所属业务员',
        search: true
    }, {
        title: "类型",
        field: "kind",
        type: "select"
    }, {
        title: "报告规格",
        field: "reportGuiGe",
        search: true
    }, {
        title: "报告综合分",
        field: "reportScore",
    }, {
        title: "完整度",
        field: "wanzhengduPer",
    }, {
        title: "填写时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    }
    ];
    buildList({
        router: 'members',
        columns: columns,
        pageCode: '805120',
        searchParams: {
            kind: "C",
            companyCode:OSS.companyCode
        }
    });

});