$(function() {
  

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            title: '业务编号',
            field: 'bizNo',
            search: true
        },{
            title: "真实姓名",
            field: "realName",
            search: true
        }, {
            title: '是否在名单',
            field: 'isMatched',
            type:'select',
            data: {
                "true":'是',
                "false":'否'
            }
        }, {
            title: '行业关注名单信息',
            field: 'details',
        },{
            field: 'idNo',
            title: '身份证号',
            search: true
        },{
            field: 'openId',
            title: '芝麻开放平台唯一标识',
            search: true
        },{
            title: "创建时间",
            field: "createDatetime",
            formatter: dateTimeFormat,
        }
    ];
    buildList({
        columns: columns,
        pageCode: '798501',
    });
   
});