$(function () {
  var code = getQueryString('code');
  var userId = getQueryString('userId');
    var userInfoDict = {
    'education': {},
    'marriage': {},
    'live_time': {},
    'occupation': {},
    'income': {},
    'family_relation': {},
    'society_relation': {}
  };
  var tdData, personInfo;

  getInitData();

  function getInitData () {
    getReportDict().then(function (report) {
      addSjrz(report['F1']);
      addZmrz(report['F2']);
      addJbxxrz(report['F3']);
      addSfzrz(report['PID1']);
      addDwrz(report['PDW2']);
      addTxlrz(report['PTXL3']);
      addYysrz(report['PYYS4']);
      addZmfrz(report['PZM5']);
      addHygzqdrz(report['PZM6']);
      addQzrz(report['PZM7']);
      addTdrz(report['PTD8']);
    });
    addListener();
  }
  // 添加手机认证数据
  function addSjrz(data) {
    if (!data) {
      $('#sjrzPannel').hide();
    } else {
      data = JSON.parse(data);
      var html = '<li class="clearfix">' +
          '<label>手机号:</label>' +
          '<span>'+ data.mobile +'</span>' +
        '</li>';
      $('#sjTableList').html(html);
    }
  }
  // 添加芝麻认证数据
  function addZmrz (data) {
    if (!data) {
      $('#zmrzPannel').hide();
    } else {
      data = JSON.parse(data);
      var html = '<li class="clearfix">' +
            '<label>姓名:</label>' +
            '<span>'+ data.realName +'</span>' +
          '</li>' +
          '<li class="clearfix">' +
            '<label>身份证号:</label>' +
            '<span>'+ data.idNo +'</span>' +
          '</li>';
      $('#zmrzTableList').html(html);
    }
  }
  // 添加基本信息数据
  function addJbxxrz (data) {
    if (!data) {
      $('#jbxxrzPannel').hide();
    } else {
      data = JSON.parse(data);
      addJbxx(data);
      addZyxx(data);
      addJjlxr(data);
    }
  }
  // 添加基本信息
  function addJbxx(data) {
    var html = '<li class="clearfix">' +
          '<label>学历:</label>' +
          '<span>'+ userInfoDict.education[data.education] +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>婚姻状况:</label>' +
          '<span>'+ userInfoDict.marriage[data.marriage] +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>子女个数:</label>' +
          '<span>'+ data.childrenNum +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>QQ:</label>' +
          '<span>'+ data.qq +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>邮箱:</label>' +
          '<span>'+ data.email +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>居住地址:</label>' +
          '<span>'+ data.provinceCity + ' ' + data.address +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>居住时长:</label>' +
          '<span>'+ userInfoDict.live_time[data.liveTime] +'</span>' +
        '</li>';
    $('#jbxxTableList').html(html);
  }
  // 添加职业信息
  function addZyxx (data) {
    var html = '<li class="clearfix">' +
          '<label>职业:</label>' +
          '<span>'+ userInfoDict.occupation[data.occupation] +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>月收入:</label>' +
          '<span>'+ userInfoDict.income[data.income] +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>单位名称:</label>' +
          '<span>'+ data.company +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>单位地址:</label>' +
          '<span>'+ data.companyProvinceCity + ' ' + data.companyAddress +'</span>' +
        '</li>'+
        '<li class="clearfix">' +
        '<label>单位电话:</label>' +
        '<span>'+ data.phone +'</span>' +
        '</li>';
    $('#zyxxTableList').html(html);
  }
  // 添加紧急联系人
  function addJjlxr (data) {
    var html = '<li class="clearfix">' +
          '<label>亲属关系:</label>' +
          '<span>'+ userInfoDict.family_relation[data.familyRelation] +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>姓名:</label>' +
          '<span>'+ data.familyName +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>联系方式:</label>' +
          '<span>'+ data.familyMobile +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>社会关系:</label>' +
          '<span>'+ userInfoDict.society_relation[data.societyRelation] +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>姓名:</label>' +
          '<span>'+ data.societyName +'</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>联系方式:</label>' +
          '<span>'+ data.societyMobile +'</span>' +
        '</li>';
    $('#jjlxrTableList').html(html);
  }
  // 添加身份证照片数据
  function addSfzrz (data) {
    if (!data) {
      $('#sfzrzPannel').hide();
    } else {
      data = JSON.parse(data);
      var identifyPic = OSS.picBaseUrl + '/' + data.identifyPic;
      var identifyPicReverse = OSS.picBaseUrl + '/' + data.identifyPicReverse;
      var identifyPicHand = OSS.picBaseUrl + '/' + data.identifyPicHand;
      var html = '<li class="clearfix">' +
            '<label>正面照:</label>' +
            '<span>' +
              '<div class="img-ctn" style="display: inline-block;position: relative;">' +
                '<div class="center-img-wrap">' +
                  '<img data-src="' + identifyPic +'" src="' + identifyPic + OSS.picShow + '" class="center-img"/>' +
                '</div>' +
              '</div>' +
            '</span>' +
          '</li>' +
          '<li class="clearfix">' +
            '<label>反面照:</label>' +
            '<span>' +
              '<div class="img-ctn" style="display: inline-block;position: relative;">' +
                '<div class="center-img-wrap">' +
                  '<img data-src="' + identifyPicReverse + '" src="' + identifyPicReverse + OSS.picShow + '" class="center-img"/>' +
                '</div>' +
              '</div>' +
            '</span>' +
          '</li>' +
          '<li class="clearfix">' +
            '<label>手持身份证照:</label>' +
            '<span>' +
              '<div class="img-ctn" style="display: inline-block;position: relative;">' +
                '<div class="center-img-wrap">' +
                  '<img data-src="' + identifyPicHand + '" src="' + identifyPicHand + OSS.picShow + '" class="center-img" />' +
                '</div>' +
              '</div>' +
            '</span>' +
          '</li>';
      $('#sfzTableList').html(html);
    }
  }
  // 添加定位认证数据
  function addDwrz (data) {
    if (!data) {
      $('#dwrzPannel').hide();
    } else {
      data = JSON.parse(data);
      var html = '<li class="clearfix">' +
            '<label>定位地址:</label>' +
            '<span>'+ data.province + data.city + data.area + data.address +'</span>' +
          '</li>' +
          '<li class="clearfix">' +
            '<label>经纬度:</label>' +
            '<span>'+ data.longitude + ', ' +  data.latitude +'</span>' +
          '</li>';
      $('#dwTableList').html(html);
    }
  }
  // 添加通讯录认证数据
  function addTxlrz (data) {
    if (!data) {
      $('#txlrzPannel').hide();
    } else {
      data = JSON.parse(data);
      data = data.filter(function (d) {
        return d.name || d.mobile;
      });
      $('#txlTableList').bootstrapTable({
        striped: true,
        columns: [{
          field: 'name',
          title: '姓名'
        }, {
          field: 'mobile',
          title: '手机号'
        }],
        data: data,
        pagination: true,
        pageSize: 10,
        pageList: [10, 20, 30, 40, 50]
      });
    }
  }
  // 添加运营商数据
  function addYysrz (data) {
    if (!data) {
      $('#yysrzPannel').hide();
    } else {
      data = JSON.parse(data);
      addYysUserInfo(data);
      addYysMobInfo(data);
      addYysJjlxrInfo(data);
      addYysFxlxrInfo(data);
      addYysJrjglxrInfo(data);
      addYysJrjglxrmxInfo(data);
      addQbthtjInfo(data);
      addMythtjInfo(data);
      addLxrgsdtjInfo(data);
      addYysxftjInfo(data);
      addMyxftjInfo(data);
      addJmhytjInfo(data);
      addJmdy3tInfo(data);
      addJmdy15tInfo(data);
      addCxjlInfo(data);
      addJ3ythtjInfo(data);
      addQblxrmxInfo(data);
    }
  }
  // 添加运营商用户信息数据
  function addYysUserInfo (data) {
    var html = '<li class="clearfix">' +
          '<label>姓名:</label>' +
          '<span>'+ data.user_info.real_name + '（和运营商数据' + realnameCheck(data) + '）</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>运营商登记姓名:</label>' +
          '<span>'+ data.mobile_info.real_name + '</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>身份证:</label>' +
          '<span>'+ data.user_info.identity_code + '（' + idNoValid(data) + '、和运营商数据' + idNoCheck(data) + '）</span>' +
        '</li>' +
        '<li class="clearfix">' +
          '<label>运营商登记身份证:</label>' +
          '<span>'+ data.mobile_info.identity_code + '</span>' +
        '</li>';
    var titles = ['性别', '年龄', '家庭地址', '家庭电话', '工作单位', '单位地址', '单位电话', '邮箱'];
    var keys = ['gender', 'age', 'home_addr', 'home_tel', 'company_name', 'work_addr', 'work_tel', 'email'];
    for (var i = 0; i < titles.length; i++) {
      html += '<li class="clearfix">' +
            '<label>' + titles[i] + ':</label>' +
            '<span>'+ (data.user_info[keys[i]] || '未填写') + '</span>' +
          '</li>';
    }
    $('#userInfoList').html(html);
  }
  // 真实姓名校验
  function realnameCheck (data) {
    if (data) {
      if (data.info_match.real_name_check_yys === '无数据') {
        return '匹配度未知';
      }
      return data.info_match.real_name_check_yys;
    }
    return '';
  }
  // 身份证是否有效
  function idNoValid(data) {
    if (data) {
      if (data.info_check.is_identity_code_valid === '是') {
        return '身份证有效';
      }
      if (data.info_check.is_identity_code_valid === '否') {
        return '身份证无效';
      }
      return '身份证有效性未知';
    }
  }
  // 身份证校验
  function idNoCheck(data) {
    if (data) {
      if (data.info_match.identity_code_check_yys === '无数据') {
        return '匹配度未知';
      }
      return data.info_match.identity_code_check_yys;
    }
    return '';
  }
  // 添加运营商手机信息数据
  function addYysMobInfo(data) {
    var html = '<li class="clearfix">' +
          '<label>手机号:</label>' +
          '<span>'+ data.mobile_info.user_mobile + '（' + isMobIdentity(data) + '）</span>' +
        '</li>';
    var titles = ['号码归属地', '运营商', '账号状态', '账户余额', '入网时间'];
    var keys = ['mobile_net_addr', 'mobile_carrier', 'account_status', 'account_balance', 'mobile_net_time'];
    for (var i = 0; i < titles.length; i++) {
      html += '<li class="clearfix">' +
            '<label>' + titles[i] + ':</label>';
      if (i === 3) {
        html += '<span>'+ (data.mobile_info[keys[i]] / 100) + '元</span>';
      } else {
        html += '<span>'+ (data.mobile_info[keys[i]] || '未知') + '</span>';
      }
      html += '</li>';
    }
    $('#mobileInfoList').html(html);
  }
  // 手机号是否实名认证
  function isMobIdentity (data) {
    var flag = !!(data && data.mobile_info.identity_code);
    return flag ? '已实名' : '未实名';
  }
  // 添加运营商紧急联系人数据
  function addYysJjlxrInfo (data) {
    var keys = ['emergency_contact1_detail', 'emergency_contact2_detail',
      'emergency_contact3_detail', 'emergency_contact4_detail', 'emergency_contact5_detail'];
    var tableData = [];
    keys.forEach(function (t) {
      if (data[t]) {
        tableData.push(data[t]);
      }
    });
    var contactDict = {
      'FATHER': '父亲',
      'MOTHER': '母亲',
      'SPOUSE': '配偶',
      'CHILD': '子女',
      'OTHER_RELATIVE': '其他亲属',
      'FRIEND': '朋友',
      'COWORKER': '同事',
      'OTHERS': '其他关系'
    };
    $('#jjlxrInfoList').bootstrapTable({
      striped: true,
      columns: [{
        field: 'contact_number',
        title: '手机号码'
      }, {
        field: 'contact_relation',
        title: '号码标签',
        formatter: function (v) {
          return contactDict[v];
        }
      }, {
        field: 'contact_area',
        title: '号码归属地'
      }, {
        field: 'call_count_3month',
        title: '近3月通话次数(次)'
      }, {
        field: 'call_time_3month',
        title: '近3月通话时长(秒)'
      }, {
        field: 'call_count_6month',
        title: '近6月通话次数(次)'
      }, {
        field: 'call_time_6month',
        title: '近6月通话时长(秒)'
      }, {
        field: 'call_count_active_6month',
        title: '近6月主叫通话次数(次)'
      }, {
        field: 'call_count_passive_6month',
        title: '近6月被叫通话次数(次)'
      }],
      data: tableData
    });
  }
  // 添加运营商风险联系人数据
  function addYysFxlxrInfo (data) {
    var tableData = data.risk_contact_stats;
    $('#fxlxrInfoList').bootstrapTable({
      striped: true,
      columns: [{
        field: 'risk_type',
        title: '风险类型'
      }, {
        field: 'contact_count_3month',
        title: '近3月通话号码数量'
      }, {
        field: 'call_count_3month',
        title: '近3月通话次数(次)'
      }, {
        field: 'call_time_3month',
        title: '近3月通话时长(秒)'
      }, {
        field: 'msg_count_3month',
        title: '近3月短信次数(次)'
      }, {
        field: 'contact_count_6month',
        title: '近6月通话号码数量'
      }, {
        field: 'call_count_6month',
        title: '近6月通话次数(次)'
      }, {
        field: 'call_time_6month',
        title: '近6月通话时长(秒)'
      }, {
        field: 'msg_count_6month',
        title: '近6月短信次数(次)'
      }],
      data: tableData
    });
  }
  // 添加运营商金融机构联系人数据
  function addYysJrjglxrInfo (data) {
    var tableData = data.finance_contact_stats;
    $('#jrjglxrInfoList').bootstrapTable({
      striped: true,
      columns: [{
        field: 'contact_type',
        title: '金融机构'
      }, {
        field: 'contact_count_3month',
        title: '近3月通话号码数量'
      }, {
        field: 'call_count_3month',
        title: '近3月通话次数(次)'
      }, {
        field: 'call_time_3month',
        title: '近3月通话时长(秒)'
      }, {
        field: 'msg_count_3month',
        title: '近3月短信次数(次)'
      }, {
        field: 'contact_count_6month',
        title: '近6月通话号码数量'
      }, {
        field: 'call_count_6month',
        title: '近6月通话次数(次)'
      }, {
        field: 'call_time_6month',
        title: '近6月通话时长(秒)'
      }, {
        field: 'msg_count_6month',
        title: '近6月短信次数(次)'
      }],
      data: tableData
    });
  }
  // 添加运营商金融机构联系人明细数据
  function addYysJrjglxrmxInfo (data) {
    var tableData = data.finance_contact_detail;
    $('#jrjglxrmxInfoList').bootstrapTable({
      striped: true,
      columns: [{
        field: 'contact_number',
        title: '号码'
      }, {
        field: 'contact_name',
        title: '号码标签',
        formatter: function (v) {
          return v.split(';').join('、');
        }
      }, {
        field: 'contact_area',
        title: '号码归属地'
      }, {
        field: 'call_count_3month',
        title: '近3月通话次数(次)'
      }, {
        field: 'call_time_3month',
        title: '近3月通话时长(秒)'
      }, {
        field: 'call_count_6month',
        title: '近6月通话次数(次)'
      }, {
        field: 'call_time_6month',
        title: '近6月通话时长(秒)'
      }, {
        field: 'call_count_active_6month',
        title: '近6月主叫通话次数(次)'
      }, {
        field: 'call_count_passive_6month',
        title: '近6月被叫通话次数(次)'
      }],
      data: tableData
    });
  }
  // 添加运营商全部通话统计数据
  function addQbthtjInfo (data) {
    var info = data.all_contact_stats;
    var keys = [
      'contact_count_1month;contact_count_3month;contact_count_6month',
      'contact_count_mutual_1month;contact_count_mutual_3month;contact_count_mutual_6month',
      'call_count_1month;call_count_3month;call_count_6month',
      'call_count_active_1month;call_count_active_3month;call_count_active_6month',
      'call_count_passive_1month;call_count_passive_3month;call_count_passive_6month',
      'call_time_1month;call_time_3month;call_time_6month',
      'call_time_active_1month;call_time_active_3month;call_time_active_6month',
      'call_time_passive_1month;call_time_passive_3month;call_time_passive_6month',
      'call_count_late_night_1month;call_count_late_night_3month;call_count_late_night_6month',
      'call_count_work_time_1month;call_count_work_time_3month;call_count_work_time_6month',
      'call_count_offwork_time_1month;call_count_offwork_time_3month;call_count_offwork_time_6month'
    ];
    var values = ['通话号码数量(个)', '互通号码数量(个)', '通话次数(次)', '主叫通话次数(次)', '被叫通话次数(次)',
      '通话时长(秒)', '主叫通话时长(秒)', '被叫通话时长(秒)', '深夜时间通话(次)', '工作时间通话(次)', '非工作时间通话(次)'];
    var tableData = [];
    var idx2key = ['one', 'three', 'six'];
    for (var i = 0; i < keys.length; i++) {
      var result = {
        title: values[i]
      };
      keys[i].split(';').forEach(function (t, idx) {
        result[idx2key[idx]] = info[t] || '--';
      });
      tableData.push(result);
    }

    $('#qbthtjInfoList').bootstrapTable({
      striped: true,
      columns: [{
        field: 'title',
        title: '项目'
      }, {
        field: 'one',
        title: '近1个月'
      }, {
        field: 'three',
        title: '近3个月'
      }, {
        field: 'six',
        title: '近6个月'
      }],
      data: tableData
    });
  }
  // 添加运营商每月通话统计数据
  function addMythtjInfo (data) {
    var tableData = data.all_contact_stats_per_month;
    $('#mythtjInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '月份',
        field: 'month'
      }, {
        title: '通话号码数量(个)',
        field: 'contact_count'
      }, {
        title: '通话次数(次)',
        field: 'call_count'
      }, {
        title: '主叫通话次数(次)',
        field: 'call_count_active'
      }, {
        title: '被叫通话次数(次)',
        field: 'call_count_passive'
      }, {
        title: '通话时长(秒)',
        field: 'call_time'
      }, {
        title: '主叫通话时长(秒)',
        field: 'call_time_active'
      }, {
        title: '被叫通话时长(秒)',
        field: 'call_time_passive'
      }, {
        title: '短信次数(次)',
        field: 'msg_count'
      }],
      data: tableData
    });
  }
  // 添加运营商联系人归属地统计数据
  function addLxrgsdtjInfo (data) {
    var tableData = data.contact_area_stats_per_city;
    $('#lxrgsdtjInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '归属地',
        field: 'contact_area_city'
      }, {
        title: '近3月通话号码数量',
        field: 'contact_count_3month'
      }, {
        title: '近3月通话次数(次)',
        field: 'call_count_3month'
      }, {
        title: '近3月通话时长(秒)',
        field: 'call_time_3month'
      }, {
        title: '近6月通话号码数量',
        field: 'contact_count_6month'
      }, {
        title: '近6月通话次数(次)',
        field: 'call_count_6month'
      }, {
        title: '近6月通话时长(秒)',
        field: 'call_time_6month'
      }, {
        title: '近6月主叫通话次数(次)',
        field: 'call_count_active_6month'
      }, {
        title: '近6月被叫通话次数(次)',
        field: 'call_count_passive_6month'
      }],
      data: tableData,
      pagination: true,
      pageSize: 10,
      pageList: [10, 20, 30, 40, 50]
    });
  }
  // 添加运营商消费统计数据
  function addYysxftjInfo (data) {
    var info = data.carrier_consumption_stats;
    var keys = [
      'consume_amount_1month;consume_amount_3month;consume_amount_6month',
      'consume_amount_call_1month;consume_amount_call_3month;consume_amount_call_6month',
      'consume_amount_data_1month;consume_amount_data_3month;consume_amount_data_6month',
      'consume_amount_msg_1month;consume_amount_msg_3month;consume_amount_msg_6month',
      'consume_amount_extra_1month;consume_amount_extra_3month;consume_amount_extra_6month',
      'consume_amount_other_1month;consume_amount_other_3month;consume_amount_other_6month',
      'recharge_count_1month;recharge_count_3month;recharge_count_6month',
      'recharge_amount_1month;recharge_amount_3month;recharge_amount_6month'
    ];
    var values = ['消费金额(元)', '通话消费金额(元)', '流量消费金额(元)', '短信消费金额(元)',
      '增值业务消费金额(元)', '其他消费金额(元)', '充值次数(次)', '充值金额(元)'];
    var tableData = [];
    var idx2key = ['one', 'three', 'six'];
    for (var i = 0; i < keys.length; i++) {
      var result = {
        title: values[i]
      };
      keys[i].split(';').forEach(function (t, idx) {
        if (i === 6) {
          result[idx2key[idx]] = info[t] || '--';
        } else {
          result[idx2key[idx]] = info[t] ? info[t] / 100 : '--';
        }
      });
      tableData.push(result);
    }

    $('#yysxftjInfoList').bootstrapTable({
      striped: true,
      columns: [{
        field: 'title',
        title: '项目'
      }, {
        field: 'one',
        title: '近1个月'
      }, {
        field: 'three',
        title: '近3个月'
      }, {
        field: 'six',
        title: '近6个月'
      }],
      data: tableData
    });
  }
  // 添加运营商每月消费统计数据
  function addMyxftjInfo (data) {
    var tableData = data.carrier_consumption_stats_per_month;
    $('#myxftjInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '月份',
        field: 'month'
      }, {
        title: '月消费金额(元)',
        field: 'consume_amount',
        formatter: function (v) {
          return v / 100;
        }
      }, {
        title: '月充值金额(元)',
        field: 'recharge_amount',
        formatter: function (v) {
          return v / 100;
        }
      }],
      data: tableData
    });
  }
  // 添加运营商静默活跃统计数据
  function addJmhytjInfo (data) {
    var info = data.active_silence_stats;
    var keys = [
      'active_day_1call_3month;active_day_1call_6month',
      'max_continue_active_day_1call_3month;max_continue_active_day_1call_6month',
      'silence_day_0call_3month;silence_day_0call_6month',
      'continue_silence_day_over3_0call_3month;continue_silence_day_over3_0call_6month',
      'continue_silence_day_over15_0call_3month;continue_silence_day_over15_0call_6month',
      'max_continue_silence_day_0call_3month;max_continue_silence_day_0call_6month'
    ];
    var values = ['通话活跃天数(天)', '最大连续通话活跃天数(天)', '无通话静默天数(天)',
      '连续无通话静默大于3天(次)', '连续无通话静默大于15天(次)', '最大连续无通话静默天数(天)'];
    var tableData = [];
    var idx2key = ['three', 'six'];
    for (var i = 0; i < keys.length; i++) {
      var result = {
        title: values[i]
      };
      keys[i].split(';').forEach(function (t, idx) {
        result[idx2key[idx]] = info[t] || '--';
      });
      tableData.push(result);
    }

    $('#jmhytjInfoList').bootstrapTable({
      striped: true,
      columns: [{
        field: 'title',
        title: '项目'
      }, {
        field: 'three',
        title: '近3个月'
      }, {
        field: 'six',
        title: '近6个月'
      }],
      data: tableData
    });
  }
  // 添加运营商连续无通话静默大于3天纪录数据
  function addJmdy3tInfo (data) {
    var tableData = data.active_silence_stats.continue_silence_day_over3_0call_6month_detail;
    $('#jmdy3tInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '开始日期',
        field: 'start_date'
      }, {
        title: '结束日期',
        field: 'end_date'
      }],
      data: tableData,
      pagination: true,
      pageSize: 10,
      pageList: [10, 20, 30, 40, 50]
    });
  }
  // 添加运营商连续无通话静默大于15天纪录数据
  function addJmdy15tInfo (data) {
    var tableData = data.active_silence_stats.continue_silence_day_over15_0call_6month_detail;
    $('#jmdy15tInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '开始日期',
        field: 'start_date'
      }, {
        title: '结束日期',
        field: 'end_date'
      }],
      data: tableData,
      pagination: true,
      pageSize: 10,
      pageList: [10, 20, 30, 40, 50]
    });
  }
  // 添加运营商出行记录分析数据
  function addCxjlInfo (data) {
    $('#cxjlfxInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '出发城市',
        field: 'leave_city'
      }, {
        title: '出发日期',
        field: 'leave_day'
      }, {
        title: '到达城市',
        field: 'arrive_city'
      }, {
        title: '到达日期',
        field: 'arrive_day'
      }],
      data: data.travel_track_analysis_per_city
    });
  }
  // 添加运营商近3个月各时间段通话统计数据
  function addJ3ythtjInfo (data) {
    var info = data.call_duration_stats_2hour;
    var tableData = [{
      title: '00:00-02:00',
      holiday: info.call_duration_holiday_3month.t_0,
      workday: info.call_duration_workday_3month.t_0
    }, {
      title: '02:00-04:00',
      holiday: info.call_duration_holiday_3month.t_1,
      workday: info.call_duration_workday_3month.t_1
    }, {
      title: '04:00-06:00',
      holiday: info.call_duration_holiday_3month.t_2,
      workday: info.call_duration_workday_3month.t_2
    }, {
      title: '06:00-08:00',
      holiday: info.call_duration_holiday_3month.t_3,
      workday: info.call_duration_workday_3month.t_3
    }, {
      title: '08:00-10:00',
      holiday: info.call_duration_holiday_3month.t_4,
      workday: info.call_duration_workday_3month.t_4
    }, {
      title: '10:00-12:00',
      holiday: info.call_duration_holiday_3month.t_5,
      workday: info.call_duration_workday_3month.t_5
    }, {
      title: '12:00-14:00',
      holiday: info.call_duration_holiday_3month.t_6,
      workday: info.call_duration_workday_3month.t_6
    }, {
      title: '14:00-16:00',
      holiday: info.call_duration_holiday_3month.t_7,
      workday: info.call_duration_workday_3month.t_7
    }, {
      title: '16:00-18:00',
      holiday: info.call_duration_holiday_3month.t_8,
      workday: info.call_duration_workday_3month.t_8
    }, {
      title: '18:00-20:00',
      holiday: info.call_duration_holiday_3month.t_9,
      workday: info.call_duration_workday_3month.t_9
    }, {
      title: '20:00-22:00',
      holiday: info.call_duration_holiday_3month.t_10,
      workday: info.call_duration_workday_3month.t_10
    }, {
      title: '22:00-24:00',
      holiday: info.call_duration_holiday_3month.t_11,
      workday: info.call_duration_workday_3month.t_11
    }];
    $('#j3ythtjInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '时间段',
        field: 'title'
      }, {
        title: '工作日通话时长(秒)',
        field: 'workday'
      }, {
        title: '节假日通话时长(秒)',
        field: 'holiday'
      }],
      data: tableData
    });
  }
  // 添加运营商全部联系人明细数据
  function addQblxrmxInfo (data) {
    $('#qblxrmxInfoList').bootstrapTable({
      striped: true,
      columns: [{
        title: '号码',
        field: 'contact_number'
      }, {
        title: '号码标签',
        field: 'contact_name'
      }, {
        title: '号码归属地',
        field: 'contact_area'
      }, {
        title: '近3月通话次数(次)',
        field: 'call_count_3month'
      }, {
        title: '近3月通话时长(秒)',
        field: 'call_time_3month'
      }, {
        title: '近6月通话次数',
        field: 'call_count_6month'
      }, {
        title: '近6月通话时长(秒)',
        field: 'call_time_6month'
      }, {
        title: '近6月主叫通话次数',
        field: 'call_count_active_6month'
      }, {
        title: '近6月被叫通话次数',
        field: 'call_count_passive_6month'
      }],
      data: data.all_contact_detail,
      pagination: true,
      pageSize: 10,
      pageList: [10, 20, 30, 40, 50]
    });
  }

  // 添加芝麻信用数据
  function addZmfrz (data) {
    if (!data) {
      $('#zmfrzPannel').hide();
    } else {
      data = JSON.parse(data);
      var html = '<li class="clearfix">' +
            '<label>芝麻分:</label>' +
            '<span>'+ data.zmScore +'</span>' +
          '</li>';
      $('#zmfTableList').html(html);
    }
  }
  // 添加行业关注清单数据
  function addHygzqdrz (data) {
    if (!data) {
      $('#hygzqdrzPannel').hide();
    } else {
      data = JSON.parse(data);
      var result = analyzeHygzqd(data);
      if (result) {
        $('#hygzqdTableList').bootstrapTable({
          striped: true,
          columns: [{
            title: '行业类型',
            field: 'bizCode'
          }, {
            title: '风险类型',
            field: 'type'
          }, {
            title: '风险代码',
            field: 'code'
          }, {
            title: '扩展信息',
            field: 'extendInfo',
            formatter: function (v, item) {
              var html = '';
              item.extendInfo.forEach(function(info) {
                html += '<p>' + info + '</p>';
              });
              return '<div>' + html + '</div>';
            }
          }],
          data: result,
          pagination: true,
          pageSize: 10,
          pageList: [10, 20, 30, 40, 50]
        });
      } else {
        $('#hygzqdTableList').parent().html('<ul class="form-info"><li class="clearfix"><label>未被关注</label></li></ul>')
      }
    }
  }
  // 添加欺诈数据
  function addQzrz (data) {
    if (!data) {
      $('#qzrzPannel').hide();
    } else {
      data = JSON.parse(data);
      if (!data.verifyInfoList || !data.verifyInfoList.length) {
        data.verifyInfoList = ['无'];
      }
      var html = '<li class="clearfix">' +
            '<label>评分:</label>' +
            '<span>'+ data.score +'</span>' +
          '</li>' +
          '<li class="clearfix">' +
            '<label>欺诈关注清单:</label>' +
            '<span>'+ (data.hit == 'no' ? '否' : '是') +'</span>' +
          '</li>' +
          '<li class="clearfix">' +
            '<label>扩展信息:</label>' +
            '<span>';
      for (var i = 0; i < data.verifyInfoList.length; i++) {
        html += '<p>' + data.verifyInfoList[i] + '</p>';
      }
      $('#qzTableList').html(html);
    }
  }
  // 添加同盾认证数据
  function addTdrz (data) {
    if (!data) {
      $('#tdrzPannel').hide();
    } else {
      data = JSON.parse(data);
      tdData = JSON.parse(data.tdData);
      personInfo = JSON.parse(data.personInfo);
    }
  }
  // 获取报告详情和数据字典
  function getReportDict () {
    if(code){
        return $.when(
            reqApi({
                code: 805332,
                json: {reportCode: code}
            }),
            reqApi({
                code: 805906,
                json: {}
            })
        ).then(function (report, dictList) {
            analyzeDictInfo(dictList);
            return report;
        });
    }else{
        return $.when(
            reqApi({
                code: 805333,
                json: {loanUser: userId}
            }),
            reqApi({
                code: 805906,
                json: {}
            })
        ).then(function (report, dictList) {
            analyzeDictInfo(dictList);
            return report;
        });
    }

  }
  // 解析数据字典
  function analyzeDictInfo (dictList) {
    dictList.forEach(function (item) {
      switch (item.parentKey) {
        case 'education':
          userInfoDict.education[item.dkey] = item.dvalue;
          break;
        case 'marriage':
          userInfoDict.marriage[item.dkey] = item.dvalue;
          break;
        case 'live_time':
          userInfoDict.live_time[item.dkey] = item.dvalue;
          break;
        case 'occupation':
          userInfoDict.occupation[item.dkey] = item.dvalue;
          break;
        case 'income':
          userInfoDict.income[item.dkey] = item.dvalue;
          break;
        case 'family_relation':
          userInfoDict.family_relation[item.dkey] = item.dvalue;
          break;
        case 'society_relation':
          userInfoDict.society_relation[item.dkey] = item.dvalue;
          break;
        default:
          break;
      }
    });
  }
  // 添加监听
  function addListener() {
    $('#jsForm').on('click', '.pageTitle', function () {
      var self = $(this);
      var $i = self.siblings('i');
      var $pannel = $(this).parent().siblings('.pannel');
      if ($i.hasClass('opean')) {
        $i.removeClass('opean').addClass('close');
        $pannel.slideUp();
      } else {
        $i.removeClass('close').addClass('opean');
        $pannel.slideDown();
      }
    }).on('click', '.center-img', function () {
      showImage($(this).attr('data-src'));
    });
    $('#watchTdBtn').on('click', function () {
      $.showTDReport(tdData, personInfo);
      $('.label-span').css({
        display: 'inline-block'
      });
    });
  }
  // 解析行业关注清单
  function analyzeHygzqd(data) {
    if (data.detail) {
      var hygzList = data.detail.map(function(item) {
        var result = {
          bizCode: '',
          type: '',
          code: '',
          extendInfo: []
        };
        // 解析bizCode和type
        var bizCode = HY_DATA.bizCode[item.bizCode];
        result.bizCode = bizCode.name;
        var type = bizCode.type[item.type];
        result.type = type.name;
        // 解析code
        var codePrefix = type.code.name ? type.code.name + '：' : '';
        result.code = codePrefix + type.code[item.code];
        // 解析extendInfo
        if (type.extendInfo && item.extendInfo) {
          item.extendInfo.forEach(function(info) {
            if (info.key !== 'id') {
              var key = type.extendInfo[info.key];
              var keyPrefix = key.name + '：';
              var value = info.value;
              if (info.key === 'event_max_amt_code') {
                value = key[info.value] || '未知';
              }
              result.extendInfo.push(keyPrefix + value);
            }
          });
        }
        return result;
      });
      return hygzList;
    }
    return null;
  }
  // 在屏幕上展示大图
  function showImage (src) {
    var dw = dialog({
      content: '<img src="'+src+'?imageMogr2/auto-orient" style="min-width:100%;width:400px;"/>'
    });
    dw.showModal();
    dw.__center();
    $('.ui-popup-backdrop').off('click').on('click', function() {
      dw.close().remove();
    });
    $('.ui-popup').off('click').on('click', function() {
      dw.close().remove();
    });
  }
    $('#backBtn').on('click', function() {
        goBack();
    });
});