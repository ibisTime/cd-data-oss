$(function() {
    var code = getQueryString('code');
    var noteConfig = {
        title: '参数值',
        field: 'cvalue',
        type: "textarea",
        normalArea:true,
        required: true
    };
    var wxConfig;
    reqApi({
        code: '805916',
        json: {
            id: code
        },
        sync: true
    }).then(function(data) {
        if (data.type == "richText") {
            noteConfig.normalArea = false;
        }
        if (data.ckey === 'weixinID') {
            noteConfig.type = 'text';
            noteConfig.title = '微信号';
            noteConfig.formatter = function (v) {
                return JSON.parse(v).id;
            };
            wxConfig = {
                title: '微信号二维码',
                field: 'wximg',
                type: 'img',
                required: true,
                single: true,
                _keys: function (data) {
                    return JSON.parse(data.cvalue).pic;
                }
            }
        }
    })    
    var fields = [{
        title: '参数说明',
        field: 'remark',
        required: true,
        maxlength: 20,
        readonly: true
    }, noteConfig];

    wxConfig && fields.push(wxConfig);

    buildDetail({
        fields: fields,
        code: code,
        addCode: "805910",
        detailCode: '805916',
        editCode: '805911',
        beforeSubmit:function(data){
            data.remark = $('#remark').text();
            if(wxConfig) {
                var cvalue = {
                    id: data.cvalue,
                    pic: data.wximg
                };
                data.cvalue = JSON.stringify(cvalue);
            }
            return data;
        }
    });
});