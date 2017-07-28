$(function() {
  

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'id',
            title: '记录编号',
        },{
            title: "真实姓名",
            field: "realName",
            search: true
        },{
            field: 'idNo',
            title: '身份证号',
            search: true
        },{
            title: "银行卡号",
            field: "bankCard",
        },{
            title: "手机号",
            field: "mobile",
        }, {
            title: '国际移动设备标志',
            field: 'imei',
        }, {
            title: '电子邮箱',
            field: 'email',
        }, {
            title: '地址信息',
            field: 'address',
        }, {
            title: 'ip地址',
            field: 'ip',
        }, {
            title: '物理地址',
            field: 'mac',
        }, {
            title: 'wifi的物理地址',
            field: 'wifimac',
        }, {
            title: '欺诈信息验证',
            field: 'verifyCode',
        },{
            title: "创建时间",
            field: "createDatetime",
            formatter: dateTimeFormat,
            field1: 'dateStart',
            title1: '创建时间',
            type1: 'date',
            field2: 'dateEnd',
            type2: 'date',            
            search: true                      
        }
    ];
    buildList({
        columns: columns,
        searchParams:{
            type:"2",
        },        
        pageCode: '798502',
    });
   
});