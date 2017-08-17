$(function() {
    var userId = getQueryString('userId');
    var html,html1,html2,html3,html4,html5,html6,html7,html8,html9,html10,html12,
        infoBasic,infoContact,infoOccupation,infoBankcard,infoCarrier,
        infoAntifraud,infoIdentifyPic,infoZMCredit,verifyInfo;
    var userInfo={};
    var phoneInfo={};
    var report = {};
    var basicCheck = {};  
    var activeDegree1 = [];      

    
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
        
        
        
        if(data.infoBasicFlag == "1" && data.infoIdentifyFlag == "1" ){
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
                                        '<div class="th-inner ">居住地址：'+ infoBasic.address +'</div>'+
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
        }
        
        if(data.infoOccupationFlag == "1" ){
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
        }
        
        if (data.infoContactFlag == "1" ) {
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
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">家庭关系：'+  Dict.getNameForList1('family_relation','623907',infoContact.familyRelation) +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">联系方式：'+ infoContact.familyMobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">社会关系：'+ Dict.getNameForList1('society_relation','623907',infoContact.societyRelation) +'</div>'+
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
        }

        if (data.infoBankcardFlag == "1" ) {
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
           }   
           
        if(data.infoIdentifyFaceFlag == "1" ){
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
                                        '<div class="th-inner ">姓名：'+ infoIdentify.realName  +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ infoIdentify.idNo  +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">身份证照片</div>'+
                                         '<div class="fht-cell"></div>'+                                        
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">'+'<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPic+'" style="max-width:100px;height:100px;" class="personal">'+'</div>'+
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
        }
            
        if(data.infoZMCreditFlag == "1" ){
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
                                        '<div class="th-inner ">是否被关注：'+ (infoZMCredit.isMatched?'是':'否') +'</div>'+
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
        }
            
        if(data.infoCarrierFlag == "1" ){

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
               
            });    

        var locationList = infoCarrier.friend_circle.location_top_list;
        var peerNumList = infoCarrier.friend_circle.peer_num_top_list;
        var summary = infoCarrier.friend_circle.summary;

        verifyInfo = infoAntifraud.verifyInfoList[0]+infoAntifraud.verifyInfoList[1]+infoAntifraud.verifyInfoList[2]+infoAntifraud.verifyInfoList[3]+infoAntifraud.verifyInfoList[4]+infoAntifraud.verifyInfoList[5];            

            html6 ='<div class="bootstrap-table" style="width: 80%;">'+
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
            // html6 = '<div class="bootstrap-table" style="width: 80%;">'+
            //     '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
            //         '<div class="fixed-table-header" style="display: none;">'+
            //             '<table></table>'+
            //         '</div>'+
            //         '<div class="fixed-table-body">'+
            //             '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
            //             '<table id="tableList6" data-show-export="true" class="table table-hover table-striped"  >'+
            //                 '<thead>'+
            //                     '<tr>'+
            //                         '<th style="" colspan="4" tabindex="0">'+
            //                             '<div class="th-inner ">认证信息</div>'+
            //                             '<div class="fht-cell"></div>'+
            //                        '</th>'+
            //                     '</tr>'+
            //                 '</thead>'+
            //                 '<tbody>'+
            //                     '<tr data-index="0">'+
            //                         '<td style="" colspan="4" tabindex="0">'+
            //                             '<div class="th-inner ">手机号：'+ phoneInfo.mobile +'</div>'+
            //                              '<div class="fht-cell"></div>'+
            //                         '</td>'+                                   
            //                     '</tr>'+
            //                     '<tr data-index="1">'+
            //                         '<td style="" colspan="2" tabindex="0">'+
            //                             '<div class="th-inner ">归属运营商：'+ report.source_name_zh +'</div>'+
            //                             '<div class="fht-cell"></div>'+
            //                         '</td>'+                                    
            //                         '<td style="" colspan="2" tabindex="0">'+
            //                             '<div class="th-inner ">套餐：'+ phoneInfo.package_name +'</div>'+
            //                             '<div class="fht-cell"></div>'+
            //                         '</td>'+
            //                     '</tr>'+  
            //                     '<tr data-index="2">'+
            //                         '<td style="" colspan="2" tabindex="0">'+
            //                             '<div class="th-inner ">注册时间：'+ phoneInfo.reg_time +'</div>'+
            //                             '<div class="fht-cell"></div>'+
            //                         '</td>'+                                    
            //                         '<td style="" colspan="2" tabindex="0">'+
            //                             '<div class="th-inner ">开户时长：'+ phoneInfo.in_time +'</div>'+
            //                             '<div class="fht-cell"></div>'+
            //                         '</td>'+
            //                     '</tr>'+                                
            //                     '<tr data-index="3">'+
            //                         '<td style="" colspan="4" tabindex="0">'+
            //                             '<div class="th-inner ">账户余额：'+ (phoneInfo.available_balance*0.01).toFixed(2) +'</div>'+
            //                             '<div class="fht-cell"></div>'+
            //                         '</td>'+                                    
            //                     '</tr>'+                                                                                        
            //                 '</tbody>'+
            //         '</div>'+
            //         '<div class="fixed-table-footer" style="display: none;">'+
            //             '<table>'+
            //                 '<tbody>'+
            //                     '<tr></tr>'+
            //                 '</tbody>'+
            //             '</table>'+
            //         '</div>'+
            //     '</div>'+
            // '</div>';

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
                                        '<div class="th-inner ">风险识别</div>'+
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
                        '<table id="tableList8" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">风险识别</div>'+
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

            html10='<div class="bootstrap-table" style="width: 80%;">'+
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
                                        '<div class="th-inner ">欺诈识别</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0"><td style="">欺诈评分</td><td style="">'+ infoAntifraud.score +'</td></tr>'+
                                '<tr data-index="1"><td style="">欺诈信息验证</td><td style="">'+ verifyInfo +'</td></tr>'+
                                '<tr data-index="2"><td style="">欺诈关注清单</td><td style="">'+ (infoAntifraud.hit? '是':'否') +'</td></tr>'+
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
                            '<table id="tableList6" data-show-export="true" class="table table-hover table-striped"  >'+
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

        }
                        


            $('#tableList').append(html);   
            $('#tableList1').append(html1);   
            $('#tableList2').append(html2);
            $('#tableList3').append(html3); 
            $('#tableList4').append(html4);     
            $('#tableList5').append(html5);   
            $('#tableList6').append(html6);
            $('#tableList7').append(html7);   
            $('#tableList8').append(html8);  
            $('#tableList9').bootstrapTable('append', activeDegree1);  
            $('#tableList10').append(html9);
            $('#tableList11').append(html10);  
            $('#tableList12').append(html12);

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
            
                        

            $('.personal').on('click',function(){

                var dw = dialog({
                    content: '<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPic+'" style="max-width:100%;" class="closepic">'
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

    $('.bootstrap-table').css("width","80%");

    

    
});