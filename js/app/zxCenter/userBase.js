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
        "f1":"VIP会员"
    };

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        title: '姓名',
        field: 'realName',
        search: true
    }, {
        title: '手机号',
        field: 'mobile',
        search: true
    }, {
        title: '籍贯',
        field: 'jiGuan'
    },{
        field: 'identityNo',
        title: '身份证号'
    },{
        field: 'userReferee',
        title: '推荐人',
        search:true
    },{
        field: 'reportScore',
        title: '最新报告分',
        field1: 'reportScoreStart',
        title1: '最新报告分',
        type1: 'normalRange',
        field2: 'reportScoreEnd',
        search:true
    },{
        field: 'reportNum',
        title: '报告数量'
    }, {
        field: 'platformCode',
        title: '平台代码'
    }, {
        field: 'writtenTime',
        title: '填写时间',
        formatter: dateTimeFormat
    },  {
        title: "状态",
        field: "status",
        type: "select",
        key: "user_status",
        formatter: Dict.getNameForList("user_status"),
    },  {
        title: '备注',
        field: 'remark'
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