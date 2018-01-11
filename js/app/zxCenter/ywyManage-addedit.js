$(function() {
    var userId = getQueryString('userId');
    var view = getQueryString('v');
    var level = getQueryString('level');
    // var discount = getQueryString('discount');
    var amount;
    reqApi({
        code: '802503',
        json: {
            userId: userId,
            currency: 'CNY'
        },
        sync: true
    }).then(function (data) {
        amount = data[0].amount;
    });
    var columns = [ {
        title: '手机号',
        field: 'mobile',
        search: true
    }, {
        title: '真实姓名',
        field: 'realName',
        afterSet: function (v) {
          if (!v) {
              $("#realName").closest('li').hide();
          }
        }
    }, {
        title: '身份证',
        field: 'idNo',
        afterSet: function (v) {
            if (!v) {
                $("#idNo").closest('li').hide();
            }
        }
    },{
        title: "等级",
        field: "level",
        readonly: level?false:true
    },{
        title: "折扣",
        field: "divRate",
        formatter: function(v, data) {
            if(data.divRate != null) {
                return (level?data.divRate :(data.divRate * 100)+'%' )
            } else {
                return '-'
            }
        },
        readonly: level?false:true,
        help: '输入时请输入0-1之间的数字，不需要输入百分号'
    }, {
        title: '账户余额',
        field: 'amount',
        formatter: function () {
            return moneyFormat(amount);
        }
    }, {
        title: "注册时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    },{
        title: "状态",
        field: "status",
        type: "select",
        key: "user_status",
        formatter: Dict.getNameForList("user_status")
    }, {
        title: '备注',
        field: 'remark'
    }
    ];
    var options = {
        fields: columns,
        view: view,
        code: {
            userId: userId
        },
        detailCode: '805121'
    };
    if(level) {
        options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var code = '805094';
                var data = {};

                if($("#divRate").val()>=0 && $("#divRate").val()<=1) {
                    data["divRate"] = $("#divRate").val();
                    data["updater"] = getUserName();
                    data['userId'] = userId;
                    data["level"] = $("#level").val();
                    reqApi({
                        code: code,
                        json: data
                    }).done(function() {
                        sucDetail();
                    });
                } else {
                    toastr.info('折扣为0-1之间的数字，不需要输入百分号')
                }
            }
        }
    }, {
            title: '返回',
            handler: function() {
                goBack();
            }
        }];
    }
    buildDetail(options);

});