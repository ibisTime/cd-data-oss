$(function() {
    var columns = [ {
        title: '手机号',
        field: 'mobile',
        required: true
    }];

    buildDetail({
        fields: columns,
        addCode: '805042',
        beforeSubmit:function (data) {
            data.updater = getUserId();
            data.kind = 'B';
            data.loginName = data.mobile;
            return data;
        }
    });
});