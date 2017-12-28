$(function() {

	var code = getQueryString('code');
	var roleList = {};
	reqApi({
		sync: true,
		code: '805021',
		json: {}
	}).then(function (data) {
    data.forEach(function (t) {
    	if (t.code != 'salesman') {
        roleList[t.code] = t.name;
			}
		});
  });
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: 'P'
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
		code: code,
		detailCode: '805121',
		addCode: '805042'
	});

});