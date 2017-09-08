 $(function() {
    var userId = getQueryString('userId');
    var html,html1,html2,html3,html4,html5,html6,html7,html8,html9,html10,html12,
        html13,html14,html15,html16,html17,html18,html19,
        infoBasic,infoContact,infoOccupation,infoBankcard,infoCarrier,
        infoAntifraud,infoIdentifyPic,infoZMCredit,infoIdentifyFace;
    var userInfo={};
    var phoneInfo={};
    var report = {};
    var basicCheck = {};  
    var activeDegree1 = []; 
    var activeDegree2 = [];
    var infoAddressBook ;      
    var verifyInfo = "",riskInfoList="";
    
    // $.getJSON('/static/js/app/certificat/operator.json').
    
reqApi({
        code:"623050" ,
        json:{userId:userId}
    }).then(function(data){
        infoBasic = data.infoBasic;
        infoContact = data.infoContact;
        infoOccupation = data.infoOccupation;
        infoBankcard = data.infoBankcard;
        infoIdentify = data.infoIdentify;
        infoAntifraud = data.infoAntifraud;
        infoIdentifyPic = data.infoIdentifyPic;
        infoZMCredit = data.infoZMCredit;
        infoIdentifyFace = data.infoIdentifyFace
        
        if(data.infoAntifraudFlag == "0"){
            $('#page-title').append('<p style="float:right;color: red;">(未认证)</p>');
            $('#page-title6').append('<p style="float:right;color: red;">(未认证)</p>')
        }else if(data.infoAntifraudFlag == "1"){
            $('#page-title').append('<p style="float:right;color: green;">(已认证)</p>'); 
            $('#page-title6').append('<p style="float:right;color: green;">(已认证)</p>');
        }else{
            $('#page-title').append('<p style="float:right;color: orange;">(已过期)</p>');
            $('#page-title6').append('<p style="float:right;color: orange;">(已过期)</p>');
        } 

        if(data.infoAddressBookFlag == "0"){
            $('#page-title5').append('<p style="float:right;color: red;">(未认证)</p>')  
        }else if(data.infoAddressBookFlag == "1"){
            $('#page-title5').append('<p style="float:right;color: green;">(已认证)</p>')  
        }else{
             $('#page-title5').append('<p style="float:right;color: orange;">(已过期)</p>')
        }

        if(data.infoIdentifyPicFlag == "0" && data.infoIdentifyFaceFlag == "0"){
            $('#page-title2').append('<p style="float:right;color: red;">(未认证)</p>')  
        }else if(data.infoIdentifyPicFlag == "1" && data.infoIdentifyFaceFlag == "1"){
            $('#page-title2').append('<p style="float:right;color: green;">(已认证)</p>')  
        }else{
             $('#page-title2').append('<p style="float:right;color: orange;">(已过期)</p>')
        }        

        if(data.infoZMCreditFlag == "0"){
            $('#page-title3').append('<p style="float:right;color: red;">(未认证)</p>')  
        }else if(data.infoZMCreditFlag == "1"){
            $('#page-title3').append('<p style="float:right;color: green;">(已认证)</p>')  
        }else{
             $('#page-title3').append('<p style="float:right;color: orange;">(已过期)</p>')
        }        

        if(data.infoCarrierFlag == "0"){
            $('#page-title4').append('<p style="float:right;color: red;">(未认证)</p>')  
        }else if(data.infoCarrierFlag == "1"){
            $('#page-title4').append('<p style="float:right;color: green;">(已认证)</p>')  
        }else{
             $('#page-title4').append('<p style="float:right;color: orange;">(已过期)</p>')
        }        

             
        if(data.infoBasicFlag !== "0" && data.infoIdentifyFlag !== "0" ){
            html ='<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">基本信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ infoIdentify.realName +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                '</tr>'+
                                '<tr data-index="1">'+
                                '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ infoIdentify.idNo +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">学历：'+ Dict.getNameForList1('education','623907',infoBasic.education) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                         
                                    '</td>'+
                                '</tr>'+                                
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">婚姻状况：' +Dict.getNameForList1('marriage','623907',infoBasic.marriage) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">子女个数：'+ infoBasic.childrenNum +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                                
                                '<tr data-index="3">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">居住地址：'+ infoBasic.provinceCity +infoBasic.address +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">居住时长：'+ Dict.getNameForList1('live_time','623907',infoBasic.liveTime) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="4">'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">QQ：'+ infoBasic.qq +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">邮箱：'+ infoBasic.email +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                               
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';        
            $('#tableList').append(html);                   
        }
       
        
        if(data.infoOccupationFlag !== "0" ){
            html1 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList1" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">职业信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">职业：'+ Dict.getNameForList1('occupation','623907',infoOccupation.occupation) +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">月收入：'+ Dict.getNameForList1('income','623907',infoOccupation.income) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">单位名称：'+ infoOccupation.company +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">单位电话：'+ infoOccupation.phone +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="4" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">单位地址：'+infoOccupation.provinceCity +' , '+infoOccupation.address +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                                                              
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';   

            $('#tableList1').append(html1);   

        }
        
        if (data.infoContactFlag  !== "0" ) {
            html2 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList2" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">紧急联系人</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">家庭关系：'+  Dict.getNameForList1('family_relation','623907',infoContact.familyRelation) +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ (infoContact.familyName?infoContact.familyName:"") +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">联系方式：'+ infoContact.familyMobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">社会关系：'+ Dict.getNameForList1('society_relation','623907',infoContact.societyRelation) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+  
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ (infoContact.societyName?infoContact.societyName:"") +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                                                      
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">联系方式：'+ infoContact.societyMobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                                                          
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';
            $('#tableList2').append(html2);
                      
        }

        if (data.infoBankcardFlag && data.infoBankcardFlag  !== "0" ) {
               html3 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList3" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">银行卡信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">银行卡号：'+ infoBankcard.cardNo +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">开户行：'+ Dict.getNameForList1('bank','623907',infoBankcard.bank) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">预留手机号：'+ infoBankcard.mobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">开户省市：'+ infoBankcard.privinceCity +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                                                          
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';
            $('#tableList3').append(html3);  
           } 
           if(data.infoAntifraudFlag  !== "0" ){
                if(infoAntifraud.verifyInfoList){
                    infoAntifraud.verifyInfoList.each(function(i, index) {
                        verifyInfo += i+"</br>"
                    });            
                }

                if(infoAntifraud.riskInfoList){
                    infoAntifraud.riskInfoList.each(function(i, index) {
                        riskInfoList += i+"</br>"
                    });            
                }  

            html10='<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">欺诈识别</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0"><td style="">欺诈评分</td><td style="">'+ infoAntifraud.score +'</td></tr>'+
                                '<tr data-index="1"><td style="">欺诈信息验证</td><td style="">'+ verifyInfo +'</td></tr>'+
                                '<tr data-index="2"><td style="">欺诈关注清单</td><td style="">'+ (infoAntifraud.hit == 'yes'? riskInfoList:'否') +'</td></tr>'+
                            '</div>'+
                            '<div class="fixed-table-footer" style="display: none;">'+
                                '<table>'+
                                    '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';  
            $('#tableList11').append(html10);                            
           }

                     
           
        if(data.infoIdentifyFaceFlag !== "0" && data.infoIdentifyPicFlag !== "0"){
            html4 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList4" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">身份信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ infoIdentifyFace.realName  +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ infoIdentifyFace.idNo  +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">身份证照片</div>'+
                                         '<div class="fht-cell"></div>'+                                        
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">'+
                                            '<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPic+'" style="max-width:100px;height:100px;" class="personal">'+
                                            '<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPicReverse+'" style="max-width:100px;height:100px;" class="personal1">'+
                                            '<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPicHand+'" style="max-width:100px;height:100px;" class="personal2">'+
                                        '</div>'+
                                         '<div class="fht-cell"></div>'+                                         
                                    '</td>'+ 
                                '</tr>'+                                               
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';
            $('#tableList4').append(html4);            
        }
            
        if(data.infoZMCreditFlag  !== "0" ){
            html5 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList5" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">认证信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">芝麻信用分：' + infoZMCredit.zmScore +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+                                    
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">是否被关注：'+ (infoZMCredit.isMatched?infoZMCredit.details:'否') +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                                                          
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';    
            $('#tableList5').append(html5);         
        }
            
        if(data.infoCarrierFlag  !== "0" ){

            infoCarrier = JSON.parse(data.infoCarrier);
            infoCarrier.user_basic.each(function(i, index) {
                userInfo[i.key] = i.value
                
            });
            infoCarrier.cell_phone.each(function(i, index) {
                phoneInfo[i.key] = i.value
                
            });     
            infoCarrier.report.each(function(i, index) {
                report[i.key] = i.value
                
            }); 
            infoCarrier.basic_check_items.each(function(i, index) {
                basicCheck[i.check_item] = i.result;
                
            });        

            infoCarrier.active_degree.each(function(i, index) {
                
                if(i.app_point == "call_day" || i.app_point == "dial_cnt"|| i.app_point == "dialed_cnt"|| i.app_point == "dial_time"|| i.app_point == "dialed_time"){
                    activeDegree1.push(i)
                }
                if(i.app_point !== "call_day" && i.app_point !== "dial_cnt"&& i.app_point !== "dialed_cnt"&& i.app_point !== "dial_time"&& i.app_point !== "dialed_time"){
                activeDegree2.push(i)
            }                
               
            });    

        var locationList = infoCarrier.friend_circle.location_top_list;
        var peerNumList = infoCarrier.friend_circle.peer_num_top_list;
        var summary = infoCarrier.friend_circle.summary;

        
                

            html6 ='<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList6" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">用户基本信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ userInfo.name +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ userInfo.id_card +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">'+ userInfo.gender +' | '+ userInfo.age+' | '+userInfo.native_place +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">手机号码：'+ phoneInfo.mobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">'+ report.source_name_zh +' |  注册时间:'+ phoneInfo.reg_time+' |  开户时长:'+phoneInfo.in_time +'月</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="3">'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">套餐：'+ phoneInfo.package_name+' |  余额:'+ (phoneInfo.available_balance*0.01).toFixed(2) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">归属地：'+ phoneInfo.phone_attribution +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="4">'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">邮箱：'+ phoneInfo.email +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">星座：'+ userInfo.constellation +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="5">'+
                                    '<td style="" colspan="4" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">居住地址：'+ phoneInfo.address+'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                               ' </tr>'+
                               '<tr data-index="6">'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">注册地址：'+ phoneInfo.phone_attribution +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">通话记录完整性：'+ basicCheck.call_data_check +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                               
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';            

            html7='<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList7" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">社交分析</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0"><td style="">朋友圈大小</td><td style="">'+ summary[0].value +'</td><td style="">'+ summary[5].value +'</td><td style="">近3/6月联系号码数</td></tr>'+
                                '<tr data-index="1"><td style="">朋友圈亲密度</td><td style="">'+ summary[1].value +'</td><td style="">'+ summary[6].value +'</td><td style=""> 近3/6月联系十次以上的号码数量</td></tr>'+
                                '<tr data-index="2"><td style="">朋友圈中心地</td><td style="">'+ summary[2].value +'</td><td style="">'+ summary[7].value +'</td><td style="">近3/6月联系次数最多的归属地</td></tr>'+
                                '<tr data-index="3"><td style="">朋友圈是否在本地</td><td style="">'+ summary[3].value +'</td><td style="">'+ summary[8].value +'</td><td style="">近3/6月朋友圈中心地是否与手机归属地一致</td></tr>'+
                                '<tr data-index="4"><td style="">互通电话的号码数目</td><td style="">'+ summary[4].value +'</td><td style="">'+ summary[9].value +'</td><td style=""></td></tr>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';   

            html13='<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">风险识别(I)</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0"><td style="">号码沉默度</td><td style="">'+ basicCheck.mobile_silence_3m +'</td><td style="">'+ basicCheck.mobile_silence_6m +'</td><td style="">满分10分</td></tr>'+
                                '<tr data-index="1"><td style="">欠费风险度</td><td style="">'+ basicCheck.arrearage_risk_3m +'</td><td style="">'+ basicCheck.arrearage_risk_6m +'</td><td style="">满分10分</td></tr>'+
                                '<tr data-index="2"><td style="">亲情网风险度</td><td style="">'+ basicCheck.binding_risk +'</td><td style="">--</td><td style="">满分10分</td></tr>'+                      
                            '</div>'+
                            '<div class="fixed-table-footer" style="display: none;">'+
                                '<table>'+
                                    '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';
            html8 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList8" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">风险识别(II)</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0"><td style="">申请人姓名+身份证号码是否出现在法院黑名单</td><td style="">'+ basicCheck.is_name_and_idcard_in_court_black +'</td></tr>'+
                                '<tr data-index="1"><td style="">申请人姓名+身份证号码是否出现在金融机构黑名单</td><td style="">'+ basicCheck.is_name_and_idcard_in_finance_black +'</td></tr>'+
                                '<tr data-index="2"><td style="">申请人姓名+手机号码是否出现在金融机构黑名单</td><td style="">'+ basicCheck.is_name_and_mobile_in_finance_black +'</td></tr>'+
                            '</div>'+
                            '<div class="fixed-table-footer" style="display: none;">'+
                                '<table>'+
                                    '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';

            html9='<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">消费识别</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="1"><td style="">'+infoCarrier.active_degree[2].app_point_zh+'</td><td style="">'+ infoCarrier.active_degree[2].item.item_3m +'</td><td style="">'+ infoCarrier.active_degree[2].item.item_6m +'</td></tr>'+
                                '<tr data-index="2"><td style="">账单最新认证时间</td><td style="">'+ phoneInfo.bill_certification_day +'</td><td style="">--</td></tr>'+
                            '</div>'+
                            '<div class="fixed-table-footer" style="display: none;">'+
                                '<table>'+
                                    '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';
  

            html12 = '<div class="bootstrap-table" style="width: 80%;">'+
                    '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                        '<div class="fixed-table-header" style="display: none;">'+
                            '<table></table>'+
                        '</div>'+
                        '<div class="fixed-table-body">'+
                            '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                            '<table id="tableList12" data-show-export="true" class="table table-hover table-striped"  >'+
                                '<thead>'+
                                    '<tr>'+
                                        '<th style="" colspan="4" tabindex="0">'+
                                            '<div class="th-inner ">信息校验</div>'+
                                            '<div class="fht-cell"></div>'+
                                       '</th>'+
                                    '</tr>'+
                                '</thead>'+
                                '<tbody>'+
                                    '<tr data-index="0"><td style="">身份证号码有效性</td><td style="">'+ basicCheck.idcard_check +'</td></tr>'+
                                    '<tr data-index="1"><td style="">邮箱有效性</td><td style="">'+ basicCheck.email_check +'</td></tr>'+
                                    '<tr data-index="2"><td style="">通讯地址有效性</td><td style="">'+ basicCheck.address_check +'</td></tr>'+
                                    '<tr data-index="3"><td style="">身份证号码是否与运营商数据匹配</td><td style="">'+ basicCheck.idcard_match +'</td></tr>'+
                                    '<tr data-index="4"><td style="">姓名是否与运营商数据匹配</td><td style="">'+ basicCheck.name_match +'</td></tr>'+
                                    '<tr data-index="5"><td style="">通话记录完整性</td><td style="">'+ basicCheck.call_data_check +'</td></tr>'+                                                                                        
                                '</tbody>'+
                        '</div>'+
                        '<div class="fixed-table-footer" style="display: none;">'+
                            '<table>'+
                                '<tbody>'+
                                    '<tr></tr>'+
                                '</tbody>'+
                            '</table>'+
                        '</div>'+
                    '</div>'+
                '</div>';  

                    
            $('#tableList6').append(html6);
            $('#tableList17').bootstrapTable('append',report ); 
            $('#tableList7').append(html7);   
            $('#tableList18').append(html13);
            $('#tableList8').append(html8); 
            $('#tableList19').bootstrapTable('append',infoCarrier.call_risk_analysis);
            $('#tableList9').bootstrapTable('append', activeDegree1);  
            $('#tableList10').append(html9);  
            $('#tableList12').append(html12);
            $('#tableList20').bootstrapTable('append',infoCarrier.consumption_detail);
            $('#tableList21').bootstrapTable('append',infoCarrier.roam_analysis);
            $('#tableList22').bootstrapTable('append', activeDegree2);
            $('#tableList23').bootstrapTable('append', infoCarrier.call_contact_detail);
            $('#tableList24').bootstrapTable('append', infoCarrier.call_duration_detail[0].duration_list); 
            $('#tableList25').bootstrapTable('append', infoCarrier.call_duration_detail[1].duration_list);  
            $('#tableList26').bootstrapTable('append', infoCarrier.contact_region[0].region_list);
            $('#tableList27').bootstrapTable('append', infoCarrier.contact_region[1].region_list);
            $('#tableList28').bootstrapTable('append', infoCarrier.call_time_detail);
            $('#tableList29').bootstrapTable('append', infoCarrier.call_family_detail);
            $('#tableList30').bootstrapTable('append', infoCarrier.call_service_analysis);
            $('#tableList31').bootstrapTable('append', infoCarrier.main_service); 
            $('#tableList32').bootstrapTable('append', infoCarrier.roam_detail);


            if(peerNumList){
                peerNumList[0].top_item.each(function(i, index) {
                $('#tableList13').bootstrapTable('append',peerNumList[0].top_item[index]);
                });
                peerNumList[1].top_item.each(function(i, index) {
                    $('#tableList14').bootstrapTable('append',peerNumList[1].top_item[index]);
                });   
            }

            if(locationList){
                locationList[0].top_item.each(function(i, index) {
                    $('#tableList15').bootstrapTable('append',locationList[0].top_item[index]);
                }); 
                locationList[1].top_item.each(function(i, index) {
                    $('#tableList16').bootstrapTable('append',locationList[1].top_item[index]);
                });                
            }            

    }

            if(data.infoAddressBookFlag  !== "0"){
                infoAddressBook = JSON.parse(data.infoAddressBook);
                $('#tableList33').bootstrapTable('append', infoAddressBook);
            }    


            
                        
            function personImg(imgClass,imgPic,closeClass){
                $('.'+imgClass).on('click',function(){

                    var dw = dialog({
                        content: '<img src="'+OSS.picBaseUrl+'/'+imgPic+'" style="min-width:100%;width:400px;heiht:400px;" class="'+closeClass+'">'
                    });                

                    dw.showModal(); 

                    dw.__center();

                    $('.ui-popup-backdrop').on('click', function() {
                        dw.close().remove();
                    }); 
                     
                    $('.ui-popup').on('click', function() {
                        dw.close().remove();
                    });                          
                  
                })                
            }

            if(data.infoIdentifyPicFlag !== "0"){
                personImg('personal' ,infoIdentifyPic.identifyPic,"closepic")
                personImg('personal1' ,infoIdentifyPic.identifyPicReverse ,"closepic1")
                personImg('personal2' ,infoIdentifyPic.identifyPicHand ,"closepic2")                
            }

                        

 
    });


    $('#tableList9').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '活跃识别'
            },{
                field: 'item_3m',
                title: '近3月',
                formatter:function(v,data){
                    return data.item.item_3m
                }                
            },{
                field: 'item_6m',
                title: '近6月',
                formatter:function(v,data){
                    return data.item.item_6m
                }                
            }
    ] }); 
      
    $('#tableList13').bootstrapTable({
            columns: [{
                field: 'peer_number',
                title: '联系人号码 (近3月通话次数Top3降序)',
            },{
                field: 'peer_num_loc',
                title: '归属地',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] });

    $('#tableList14').bootstrapTable({
            columns: [{
                field: 'peer_number',
                title: '联系人号码 (近6月通话次数Top3降序)',
            },{
                field: 'peer_num_loc',
                title: '归属地',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] });

    $('#tableList15').bootstrapTable({
            columns: [{
                field: 'location',
                title: '联系人号码归属地 (近3月通话次数Top3降序)',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'peer_number_cnt',
                title: '通话号码数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] }); 

    $('#tableList16').bootstrapTable({
            columns: [{
                field: 'location',
                title: '联系人号码归属地 (近6月通话次数Top3降序)',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'peer_number_cnt',
                title: '通话号码数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] });   

    $('#tableList17').bootstrapTable({
        columns: [{
            field: 'source_name_zh',
            title: '数据来源',
        },{
            field: 'data_type',
            title: '数据类别',
            search: true
        },{
            title: "获取时间",
            field: "data_gain_time",
        }
    ]});    

    $('#tableList19').bootstrapTable({
            columns: [{
                field: 'analysis_desc',
                title: '号码类别(风险联系)',
            },{
                field: 'call_cnt_3m',
                title: '近3月通话次数',
                formatter:function(v,data){
                    return data.analysis_point.call_cnt_3m
                }
            },{
                field: 'call_cnt_6m',
                title: '近6月通话次数',
                formatter:function(v,data){
                    return data.analysis_point.call_cnt_6m
                }                
            },{
                field: 'call_time_3m',
                title: '近3月通话时长（秒）',
                formatter:function(v,data){
                    return data.analysis_point.call_time_3m
                }                
            },{
                field: 'call_time_6m',
                title: '近6月通话时长（秒）',
                formatter:function(v,data){
                    return data.analysis_point.call_time_6m
                }                
            }
    ] });    
        

    $('#tableList20').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '消费细类统计',
            },{
                field: 'item_1m',
                title: '近1月消费金额（分）',
                formatter:function(v,data){
                    return data.item.item_1m
                }                
            },{
                field: 'item_3m',
                title: '近3月消费金额（分）',
                formatter:function(v,data){
                    return data.item.item_3m
                }                
            },{
                field: 'item_6m',
                title: '近6月消费金额（分）',
                formatter:function(v,data){
                    return data.item.item_6m
                }                
            },{
                field: 'avg_item_3m',
                title: '近3月月均消费金额（分）',
                formatter:function(v,data){
                    return data.item.avg_item_3m
                }                
            },{
                field: 'avg_item_6m',
                title: '近6月月均消费金额（分）',
                formatter:function(v,data){
                    return data.item.avg_item_6m
                }                
            }
    ] }); 

    $('#tableList21').bootstrapTable({
            columns: [{
                field: 'roam_location',
                title: '漫游地',
            },{
                field: 'roam_day_cnt_3m',
                title: '近3月漫游天数',                
            },{
                field: 'roam_day_cnt_6m',
                title: '近6月漫游天数',                
            },{
                field: 'continue_roam_cnt_3m',
                title: '近3月最大连续漫游天数',                
            },{
                field: 'continue_roam_cnt_6m',
                title: '近6月最大连续漫游天数'                
            },{
                field: 'max_roam_day_cnt_3m',
                title: '近3月连续漫游1天以上的次数'                
            },{
                field: 'max_roam_day_cnt_6m',
                title: '近6月连续漫游1天以上的次数'                
            }
    ] }); 

    $('#tableList22').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '通话社交总体统计',
            },{
                field: 'item_1m',
                title: '近1月',
                formatter:function(v,data){
                    return data.item.item_1m
                }                
            },{
                field: 'item_3m',
                title: '近3月',
                formatter:function(v,data){
                    return data.item.item_3m
                }                
            },{
                field: 'item_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.item.item_6m
                }                
            },{
                field: 'avg_item_3m',
                title: '近3月月均',
                formatter:function(v,data){
                    return data.item.avg_item_3m
                }                
            },{
                field: 'avg_item_6m',
                title: '近6月月均',
                formatter:function(v,data){
                    return data.item.avg_item_6m
                }                
            }
    ] });     


    $('#tableList23').bootstrapTable({
            columns: [{
                field: 'peer_num',
                title: '联系人号码（通话社交详细统计）',
            },{
                field: 'company_name',
                title: '号码标识',                
            },{
                field: 'group_name',
                title: '号码类型',                
            },{
                field: 'city',
                title: '归属地',                
            },{
                field: 'call_cnt_1w',
                title: '近一周通话次数'                
            },{
                field: 'call_cnt_1m',
                title: '近一月通话次数'                
            },{
                field: 'call_cnt_3m',
                title: '近三月通话次数'                
            },{
                field: 'call_cnt_6m',
                title: '近六月通话次数'                
            },{
                field: 'call_time_3m',
                title: '近三月通话时长（秒）'                
            },{
                field: 'call_time_6m',
                title: '近六月通话时长（秒）'                
            }
    ] });    

    $('#tableList24').bootstrapTable({
            columns: [{
                field: 'time_step_zh',
                title: '通话时段（近三月）',
            },{
                field: 'total_cnt',
                title: '通话次数',
                formatter:function(v,data){
                    return data.item.total_cnt
                }                                
            },{
                field: 'uniq_num_cnt',
                title: '通话号码数',
                formatter:function(v,data){
                    return data.item.uniq_num_cnt
                }                                
            },{
                field: 'total_time',
                title: '通话时长（秒）',
                formatter:function(v,data){
                    return data.item.total_time
                }                                
            },{
                field: 'dial_cnt',
                title: '主叫次数',
                formatter:function(v,data){
                    return data.item.dial_cnt
                }                                
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
                formatter:function(v,data){
                    return data.item.dialed_cnt
                }                                
            },{
                field: 'farthest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.farthest_call_time
                }                                
            },{
                field: 'latest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.latest_call_time
                }                                
            }
    ] });  

    $('#tableList25').bootstrapTable({
            columns: [{
                field: 'time_step_zh',
                title: '通话时段（近六月）',
            },{
                field: 'total_cnt',
                title: '通话次数',
                formatter:function(v,data){
                    return data.item.total_cnt
                }                                
            },{
                field: 'uniq_num_cnt',
                title: '通话号码数',
                formatter:function(v,data){
                    return data.item.uniq_num_cnt
                }                                
            },{
                field: 'total_time',
                title: '通话时长（秒）',
                formatter:function(v,data){
                    return data.item.total_time
                }                                
            },{
                field: 'dial_cnt',
                title: '主叫次数',
                formatter:function(v,data){
                    return data.item.dial_cnt
                }                                
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
                formatter:function(v,data){
                    return data.item.dialed_cnt
                }                                
            },{
                field: 'farthest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.farthest_call_time
                }                                
            },{
                field: 'latest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.latest_call_time
                }                                
            }
    ] });

    $('#tableList26').bootstrapTable({
            columns: [{
                field: 'region_loc',
                title: '联系人手机号码归属地 (近3月联系次数降序)',                
            },{
                field: 'region_call_cnt',
                title: '通话次数',                                
            },{
                field: 'region_uniq_num_cnt',
                title: '通话号码数'                                
            },{
                field: 'region_call_time',
                title: '通话时长（秒）'                                
            },{
                field: 'region_dial_cnt',
                title: '主叫次数'                                
            },{
                field: 'region_dialed_cnt',
                title: '被叫次数'                                
            },{
                field: 'region_dial_time',
                title: '主叫时长（秒）'                                
            },{
                field: 'region_dialed_time',
                title: '被叫时长（秒）'                                
            },{
                field: 'region_avg_dial_time',
                title: '平均主叫时长（秒）'                                
            },{
                field: 'region_avg_dialed_time',
                title: '平均被叫时长（秒）'                                
            },{
                field: 'region_dial_cnt_pct',
                title: '主叫次数比重'                                
            },{
                field: 'region_dialed_cnt_pct',
                title: '被叫次数比重'                                
            },{
                field: 'region_dial_time_pct',
                title: '主叫时长比重'                                
            },{
                field: 'region_dialed_time_pct',
                title: '被叫时长比重'                                
            }
    ] });  

    $('#tableList27').bootstrapTable({
            columns: [{
                field: 'region_loc',
                title: '联系人手机号码归属地 (近6月联系次数降序)',                
            },{
                field: 'region_call_cnt',
                title: '通话次数',                                
            },{
                field: 'region_uniq_num_cnt',
                title: '通话号码数'                                
            },{
                field: 'region_call_time',
                title: '通话时长（秒）'                                
            },{
                field: 'region_dial_cnt',
                title: '主叫次数'                                
            },{
                field: 'region_dialed_cnt',
                title: '被叫次数'                                
            },{
                field: 'region_dial_time',
                title: '主叫时长（秒）'                                
            },{
                field: 'region_dialed_time',
                title: '被叫时长（秒）'                                
            },{
                field: 'region_avg_dial_time',
                title: '平均主叫时长（秒）'                                
            },{
                field: 'region_avg_dialed_time',
                title: '平均被叫时长（秒）'                                
            },{
                field: 'region_dial_cnt_pct',
                title: '主叫次数比重'                                
            },{
                field: 'region_dialed_cnt_pct',
                title: '被叫次数比重'                                
            },{
                field: 'region_dial_time_pct',
                title: '主叫时长比重'                                
            },{
                field: 'region_dialed_time_pct',
                title: '被叫时长比重'                                
            }
    ] });    

    $('#tableList28').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '通话时间详细统计',
            },{
                field: 'item_1m',
                title: '近1月 ',
                formatter:function(v,data){
                    return data.item.item_1m
                }                                
            },{
                field: 'item_3m',
                title: '近3月 ',
                formatter:function(v,data){
                    return data.item.item_3m
                }                                
            },{
                field: 'item_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.item.item_6m
                }                                
            },{
                field: 'avg_item_3m',
                title: '近3月月均   ',
                formatter:function(v,data){
                    return data.item.avg_item_3m
                }                                
            },{
                field: 'avg_item_6m',
                title: '近6月月均',
                formatter:function(v,data){
                    return data.item.avg_item_6m
                }                                
            }
    ] });    

    $('#tableList29').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '稳定性检查',
            },{
                field: 'item_1m',
                title: '近1月 ',
                formatter:function(v,data){
                    return data.item.item_1m
                }                                
            },{
                field: 'item_3m',
                title: '近3月 ',
                formatter:function(v,data){
                    return data.item.item_3m
                }                                
            },{
                field: 'item_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.item.item_6m
                }                                
            }
    ] }); 

    $('#tableList30').bootstrapTable({
            columns: [{
                field: 'analysis_desc',
                title: '常用服务类型(与该项通话次数和时长)',
            },{
                field: 'call_cnt_1m',
                title: '近1月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_1m+'/'+data.analysis_point.call_cnt_1m
                }                                
            },{
                field: 'call_cnt_3m',
                title: '近3月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_3m+'/'+data.analysis_point.call_cnt_3m
                }                                
            },{
                field: 'call_cnt_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_6m+'/'+data.analysis_point.call_cnt_6m
                }                                
            }
    ] });   





    $('#tableList31').bootstrapTable({
            columns: [{
                field: 'service_num',
                title: '服务号码 (与服务号通话详情,按月统计)',
                               
            },{
                field: 'interact_mth',
                title: '月份 ',    
                formatter:function(v,data){
                    return data.service_details[0].interact_mth
                }                                            
            },{
                field: 'interact_cnt',
                title: '通话次数',
                formatter:function(v,data){
                    return data.service_details[0].interact_cnt
                }                                                
            },{
                field: 'interact_time',
                title: '通话时长（秒）',
                formatter:function(v,data){
                    return data.service_details[0].interact_time
                }                                              
            },{
                field: 'dial_cnt',
                title: '主叫次数',
                formatter:function(v,data){
                    return data.service_details[0].dial_cnt
                }                                              
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
                formatter:function(v,data){
                    return data.service_details[0].dialed_cnt
                }                                              
            },{
                field: 'dial_time',
                title: '主叫时长（秒）',
                formatter:function(v,data){
                    return data.service_details[0].dial_time
                }                                              
            },{
                field: 'dialed_time',
                title: '被叫时长（秒）',
                formatter:function(v,data){
                    return data.service_details[0].dialed_time
                }                                              
            }
    ] });    

    $('#tableList32').bootstrapTable({
            columns: [{
                field: 'roam_day',
                title: '漫游日期（详细统计） ',
            },{
                field: 'roam_location',
                title: '漫游城市 ',
                                                
            }
    ] });   

    $('#tableList33').bootstrapTable({
            columns: [{
                field: 'name',
                title: '通讯录姓名',
            },{
                field: 'mobile',
                title: '手机号'
            }
        ]});     


    $('.bootstrap-table').css("width","80%");

// var pageTitle,pannel

    function togglePanel(title,panel,left){
        $("."+title).on('click', function() {
        if($(this).siblings('i').hasClass('opean')){
            $(this).siblings('i').removeClass('opean').addClass('close').css("margin-left",left)
            $("."+panel).hide()            
        }else{
            $(this).siblings('i').removeClass('close').addClass('opean').css("margin-left",left)
            $("."+panel).show()                
        }
         
    });        
    }
    
    togglePanel("pageTitle","pannel")
    togglePanel("pageTitle2","pannel1")
    togglePanel("pageTitle3","pannel2")
    togglePanel("pageTitle4","pannel3")
    togglePanel("pageTitle5","pannel4")
    togglePanel("pageTitle6","pannel5")

    $('#backBtn').click(function() {
        goBack();
    });    
                
});