$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: 'banner名称',
        field: 'name',
        search: true
    }, {
        title: '位置',
        field: 'location',
        type: "select",
        key: "banner_location",
        formatter: function (v, data) {
            if(data.location === 'index_banner') {
                return '首页'
            }
        },
        data: {
            'index_banner': '首页'
        },
        search: true
    }, {
        title: '顺序',
        field: 'orderNo'
    }, {
        title: '备注',
        field: 'remark',
    }];
    buildList({
        router: 'banner',
        columns: columns,
        pageCode: '805805',
        deleteCode: '805801',
        searchParams: {
            companyCode: OSS.companyCode,
            type: 2,
            systemCode: OSS.system,
        }
    });



});