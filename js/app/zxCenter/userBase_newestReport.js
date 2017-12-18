$(function() {
    var userId = getQueryString('userId');
    console.log('123');
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
        field: 'jiGuan',
        formatter: function(v,data){
            if(data.province){
                if(data.address){
                    if(data.province == data.city ){
                        return data.city ;
                    }else{
                        return data.province + data.city ;
                    }
                }else{
                    if(data.province == data.city ){
                        return data.city + data.area;
                    }else {
                        return data.province + data.city ;
                    }
                }
            }else{
                return '-'
            }

        }
    },{
        field: 'idNo',
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
        field: 'createDatetime',
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
    buildDetail({
        fields: columns,
        detailCode: 805333,
        code:{
            loanUser:userId
        }

    });

});