$(function() {



    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'remark',
            title: '参数说明'
        },{
            field: 'cvalue',
            title: '参数值',
            formatter: function (v,data) {
                if(data.ckey == 'VALID_TIME') {
                    return data.cvalue+ '分钟';
                }else{
                    return data.cvalue;
                }
            }
        }
    ];
    buildList({
        router: 'textParam',
        columns: columns,
        searchParams:{
            type:"text"
        },
        pageCode: '805915'
    });
});