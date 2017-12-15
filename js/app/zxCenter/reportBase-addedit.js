$(function () {
  var code = getQueryString('code');
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
      var html = '<tr>'+
          '<td colspan="2">'+
            '<div class="th-inner">手机号：'+ data.mobile  +'</div>'+
            '<div class="fht-cell"></div>'+
          '</td>'+
        '</tr>';
      $('#sjTableList').html(html);
    }
  }
  // 添加芝麻认证数据
  function addZmrz (data) {
    if (!data) {

    } else {
      data = JSON.parse(data);
      var html = '<tr>'+
        '<td colspan="2">'+
          '<div class="th-inner">姓名：'+ data.realName  +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
        '<td colspan="2">'+
          '<div class="th-inner">身份证号：'+ data.idNo  +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
      '</tr>';
      $('#zmrzTableList').html(html);
    }
  }
  // 添加基本信息数据
  function addJbxxrz (data) {
    if (!data) {

    } else {
      data = JSON.parse(data);
      addJbxx(data);
      addZyxx(data);
      addJjlxr(data);
    }
  }
  // 添加基本信息
  function addJbxx(data) {
    var html = '<tr>' +
        '<td colspan="2">' +
          '<div class="th-inner">学历：' + userInfoDict.education[data.education] + '</div>' +
          '<div class="fht-cell"></div>' +
        '</td>' +
        '<td colspan="2">' +
          '<div class="th-inner">婚姻状况：' + userInfoDict.marriage[data.marriage] + '</div>' +
          '<div class="fht-cell"></div>' +
        '</td>'+
      '</tr>'+
      '<tr>'+
        '<td colspan="2">'+
          '<div class="th-inner">子女个数：'+ data.childrenNum +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
        '<td colspan="2">'+
          '<div class="th-inner">QQ：'+ data.qq +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>' +
      '</tr>' +
      '<tr>' +
        '<td colspan="4">' +
          '<div class="th-inner">邮箱：' + data.email + '</div>' +
          '<div class="fht-cell"></div>' +
        '</td>' +
      '</tr>' +
      '<tr>'+
        '<td colspan="4">'+
          '<div class="th-inner">居住地址：' + data.provinceCity + ' ' + data.address + '</div>' +
          '<div class="fht-cell"></div>' +
        '</td>' +
      '</tr>' +
      '<tr>' +
        '<td colspan="4">' +
        '<div class="th-inner">居住时长：' + userInfoDict.live_time[data.liveTime] +'</div>'+
        '<div class="fht-cell"></div>' +
        '</td>' +
      '</tr>';
    $('#jbxxTableList').html(html);
  }
  // 添加职业信息
  function addZyxx (data) {
    var html = '<tr>'+
        '<td colspan="2">'+
          '<div class="th-inner">职业：' + userInfoDict.occupation[data.occupation] + '</div>' +
          '<div class="fht-cell"></div>' +
        '</td>'+
        '<td colspan="2">'+
          '<div class="th-inner">月收入：' + userInfoDict.income[data.income] + '</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
      '</tr>'+
      '<tr>'+
        '<td colspan="2">'+
          '<div class="th-inner">单位名称：' + data.company + '</div>' +
          '<div class="fht-cell"></div>'+
        '</td>'+
        '<td colspan="2">'+
          '<div class="th-inner">单位电话：'+ data.phone +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
      '</tr>'+
      '<tr>'+
        '<td  colspan="4">' +
          '<div class="th-inner">单位地址：' + data.provinceCity + ' ' + data.address + '</div>' +
          '<div class="fht-cell"></div>' +
        '</td>' +
      '</tr>';
    $('#zyxxTableList').html(html);
  }
  // 添加紧急联系人
  function addJjlxr (data) {
    var html = '<tr>'+
        '<td colspan="1">'+
          '<div class="th-inner">亲属关系：'+ userInfoDict.family_relation[data.familyRelation] +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
        '<td colspan="1">'+
          '<div class="th-inner">姓名：'+ data.familyName +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
        '<td colspan="2">'+
          '<div class="th-inner">联系方式：'+ data.familyMobile +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
      '</tr>'+
      '<tr>'+
        '<td colspan="1">'+
          '<div class="th-inner">社会关系：'+ userInfoDict.society_relation[data.societyRelation] +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
        '<td colspan="1">'+
          '<div class="th-inner">姓名：'+ data.societyName +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
        '<td colspan="2">'+
          '<div class="th-inner">联系方式：'+ data.societyMobile +'</div>'+
          '<div class="fht-cell"></div>'+
        '</td>'+
      '</tr>';
    $('#jjlxrTableList').html(html);
  }
  // 添加身份证照片数据
  function addSfzrz (data) {
    if (!data) {

    } else {
      data = JSON.parse(data);
      var html = '<tr>'+
          '<td style=""  colspan="2" data-field="" tabindex="0">'+
            '<div class="th-inner ">身份证照片</div>'+
            '<div class="fht-cell"></div>'+
          '</td>'+
          '<td colspan="2">'+
            '<div class="th-inner">'+
              '<img src="'+OSS.picBaseUrl+'/'+data.identifyPic+'" class="personal">'+
              '<img src="'+OSS.picBaseUrl+'/'+data.identifyPicReverse+'" class="personal">'+
              '<img src="'+OSS.picBaseUrl+'/'+data.identifyPicHand+'" class="personal">'+
            '</div>'+
            '<div class="fht-cell"></div>'+
          '</td>'+
        '</tr>';
      $('#sfzTableList').html(html);
    }
  }
  // 添加定位认证数据
  function addDwrz (data) {
    if (!data) {

    } else {
      data = JSON.parse(data);
      var html = '<tr>'+
          '<td colspan="4">'+
            '<div class="th-inner">定位地址：' + data.province + data.city + data.area + data.address + '</div>' +
            '<div class="fht-cell"></div>' +
          '</td>'+
        '</tr>'+
        '<tr>'+
          '<td colspan="2">'+
            '<div class="th-inner">经纬度：' + data.longitude + ', ' +  data.latitude + '</div>' +
            '<div class="fht-cell"></div>'+
          '</td>'+
        '</tr>';
      $('#dwTableList').html(html);
    }
  }
  // 添加通讯录认证数据
  function addTxlrz (data) {
    if (!data) {

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

    } else {
      data = JSON.parse(data);
    }
  }
  // 添加芝麻信用数据
  function addZmfrz (data) {
    if (!data) {

    } else {
      data = JSON.parse(data);
      var html = '<tr>'+
          '<td colspan="4">'+
            '<div class="th-inner">芝麻分：' + data.zmScore + '</div>' +
            '<div class="fht-cell"></div>' +
          '</td>'+
        '</tr>';
      $('#zmfTableList').html(html);
    }
  }
  // 添加行业关注清单数据
  function addHygzqdrz (data) {
    if (!data) {

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
        $('#hygzqdTableList').bootstrapTable({
          striped: true,
          columns: [{
            title: '行业关注信息',
            field: 'tip'
          }],
          data: [{ tip: '未被关注' }]
        });
      }
    }
  }
  // 添加欺诈数据
  function addQzrz (data) {
    if (!data) {

    } else {
      data = JSON.parse(data);
      if (!data.verifyInfoList || !data.verifyInfoList.length) {
        data.verifyInfoList = ['无'];
      }
      var html = '';
      for (var i = 0; i < data.verifyInfoList.length; i++) {
        if (i == 0) {
          html += '<tr>'+
            '<td style="vertical-align: middle;" rowspan="' + data.verifyInfoList.length + '">'+
              '<div class="th-inner">' + data.score + '</div>' +
              '<div class="fht-cell"></div>' +
            '</td>'+
            '<td style="vertical-align: middle;" rowspan="' + data.verifyInfoList.length + '">'+
              '<div class="th-inner">' + (data.hit == 'no' ? '否' : '是') + '</div>' +
              '<div class="fht-cell"></div>' +
            '</td>'+
            '<td>'+
              '<div class="th-inner">' + data.verifyInfoList[i] + '</div>' +
              '<div class="fht-cell"></div>' +
            '</td>'+
          '</tr>';
        } else {
          html += '<tr>'+
              '<td>'+
                '<div class="th-inner">' + data.verifyInfoList[i] + '</div>' +
                '<div class="fht-cell"></div>' +
              '</td>'+
            '</tr>';
        }
      }
      $('#qzTableList').html(html);
    }
  }
  // 添加同盾认证数据
  function addTdrz (data) {
    if (!data) {

    } else {
      data = JSON.parse(data);
      tdData = JSON.parse(data.tdData);
      personInfo = JSON.parse(data.personInfo);
    }
  }
  // 获取报告详情和数据字典
  function getReportDict () {
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
    }).on('click', '.personal', function () {
      showImage($(this).attr('src'));
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
      content: '<img src="'+src+'" style="min-width:100%;width:400px;heiht:400px;"/>'
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
});