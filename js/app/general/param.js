$(function() {



    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'ckey',
            title: '参数说明'
        },{
            field: 'cvalue',
            title: '参数值',
            search: true
        }, {
            field: 'remark',
            title: '备注'
        }
    ];
    buildList({
        router: 'param',
        columns: columns,
        searchParams:{
            type:"QINIU"
        },
        pageCode: '805915'
    });
});