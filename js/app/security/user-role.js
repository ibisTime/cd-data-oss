$(function() {
  var userId = getQueryString("userId");
  var roleList = {};

	reqApi({
    sync: true,
		code: '805021',
		json: {}
	}).done(function(data) {
    data.forEach(function (t) {
      if (t.code != 'salesman') {
        roleList[t.code] = t.name;
      }
    });
	});

  var fields = [{
    field: 'userId',
    type: 'hidden',
    value: userId
  }, {
    title: '用户名',
    field: 'loginName',
    required: true,
    maxlength: 30
  }, {
    title: '角色',
    field: 'roleCode',
    required: true,
    type: 'select',
    data: roleList
  }, {
    title: '备注',
    field: 'remark',
    maxlength: 250
  }];

  buildDetail({
    fields: fields,
    code: {
      userId: userId
    },
    detailCode: '805121',
    editCode: '805092'
	});
});