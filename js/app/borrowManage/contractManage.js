$(function () {
    var code = getQueryString('code');
    var data1 = {};
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'applyUser',
        title: '申请人',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.realName;
            $('#applyUser').renderDropdown2(data1);
             return data.user.realName
        } ,      
        search: true
    }, {
        field: 'applyUser',
        title: '账号',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.mobile;
            $('#applyUser').renderDropdown2(data1);
            return data.user.mobile
        } ,
        search: true
    },{
        field: 'code',
        title: '借款编号',
        search: true
    }];

    buildList({
        columns: columns,
        pageCode: '623094'
    });
 
    $('#renewalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "../afetrLoan/renewalRecords.html?Code=" + selRecords[0].code+"&v=1";
    });
    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }



        window.location.href = "./contractManage_addedit.html?userId=" + selRecords[0].user.userId+"&code="+selRecords[0].code+"&v=1";
    });

    $('#reportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../oansBefore/audit_report.html?userId=" + selRecords[0].user.userId;

    });

    $('#downloadBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        // var data = {
        //     code: selRecords[0].code
        // };
        // reqApi({
        //     code: '623093',
        //     json: data
        // }).done(function(data) {
        //     // var dom = data.content.appendTo('body')
        //     // console.log(dom);
        //     var div = document.createElement("div");
        //     if(typeof data.content == "string")
        //         div.innerHTML = data.content;
        //     div.setAttribute('id','content');
        //     console.log(div);
        //     var dom = $('#content').appendTo('body');
        //     console.log(dom[0]);
            // html2canvas(dom[0], {
            //     onrendered:function(canvas) {
            //         var contentWidth = canvas.width;
            //         var contentHeight = canvas.height;
            //         //一页pdf显示html页面生成的canvas高度;
            //         var pageHeight = contentWidth / 592.28 * 841.89;
            //         //未生成pdf的html页面高度
            //         var leftHeight = contentHeight;
            //         //pdf页面偏移
            //         var position = 0;
            //         //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            //         var imgWidth = 595.28;
            //         var imgHeight = 592.28/contentWidth * contentHeight;
            //         var pageData = canvas.toDataURL('image/jpeg', 1.0);
            //         var pdf = new jsPDF('', 'pt', 'a4');
            //         //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            //         //当内容未超过pdf一页显示的范围，无需分页
            //         if (leftHeight < pageHeight) {
            //             pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
            //         } else {
            //             while(leftHeight > 0) {
            //                 pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            //                 leftHeight -= pageHeight;
            //                 position -= 841.89;
            //                 //避免添加空白页
            //                 if(leftHeight > 0) {
            //                     pdf.addPage();
            //                 }
            //             }
            //         }
            //         pdf.save('content.pdf');
            //     }
            // })
        // });
        window.location.href = "./contractManage_addedit.html?userId=" + selRecords[0].user.userId+"&code="+selRecords[0].code+"&v=1&download=1";
        // var dw = dialog({
        //     content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
        //     '<ul class="form-info" id="formContainer"></ul>' +
        //     '</form>'
        // });
        // dw.showModal();
        // buildDetail({
        //     code: selRecords[0].code,
        //     detailCode: '623093',
        //     view: true,
        //     fields: [{
        //         field: 'content',
        //         title: '1111111111'
        //     }],
        //     container: $('#formContainer'),
        //     buttons: [{
        //         title: '下载',
        //         handler: function() {
        //             $('label').css('display','none');
        //             html2canvas($('#detail')[0], {
        //                 onrendered:function(canvas) {
        //                     var contentWidth = canvas.width;
        //                     var contentHeight = canvas.height;
        //                     //一页pdf显示html页面生成的canvas高度;
        //                     var pageHeight = contentWidth / 592.28 * 841.89;
        //                     //未生成pdf的html页面高度
        //                     var leftHeight = contentHeight;
        //                     //pdf页面偏移
        //                     var position = 0;
        //                     //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        //                     var imgWidth = 595.28;
        //                     var imgHeight = 592.28/contentWidth * contentHeight;
        //                     var pageData = canvas.toDataURL('image/jpeg', 1.0);
        //                     var pdf = new jsPDF('', 'pt', 'a4');
        //                     //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //                     //当内容未超过pdf一页显示的范围，无需分页
        //                     if (leftHeight < pageHeight) {
        //                         pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
        //                     } else {
        //                         while(leftHeight > 0) {
        //                             pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
        //                             leftHeight -= pageHeight;
        //                             position -= 841.89;
        //                             //避免添加空白页
        //                             if(leftHeight > 0) {
        //                                 pdf.addPage();
        //                             }
        //                         }
        //                     }
        //                     pdf.save('content.pdf');
        //                 }
        //             })
        //         }
        //     }, {
        //         title: '关闭',
        //         handler: function() {
        //             dw.close().remove();
        //         }
        //     }]
        // });
        // dw.__center();
    });

});