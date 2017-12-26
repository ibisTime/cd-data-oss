$(function() {
    
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var view = getQueryString('v');
    var download = getQueryString('download');

    var borrowCount,overdueCode,renewalCount;
    
    var fields = [ {
        field: 'mobile',
        title: '合同内容',
        formatter:function(v,data){
            borrowCount = data.user.borrowCount;
            overdueCode = data.user.overdueCode;
            renewalCount = data.user.renewalCount;
            content = data.content;
            return ''
        },
        afterSet:function(data){
            var html='<div class="tools" id="content" style="margin-left: 20px;">'+
                '<div>'+
                content+
                '</div>'+
                '<ul class="toolbar"  style="float: left;">'+
                '<li style="display:block;" id="reportBtn"><span><img src="/static/images/t01.png"></span>查看资信报告</li>'+
                '</ul>'+
                '</div>';
            $('#mobile').append(html);
            $('#reportBtn').click(function() {
                window.location.href = "../oansBefore/audit_report.html?userId=" + userId;
            });
        },
    }];
    
    buildDetail({
        fields: fields,
        code: code,
        view:view,
        detailCode: '623093',
        addCode: '623000',
        editCode: '623001',
        beforeSubmit:function(data){
            data.updater = getUserId();
            return data;
        }
    })
$('label').css('display','none');
    // if(download) {
    //     // var dom = $('<div style="background-color: #fff;">dfaf</div>').appendTo('body')
    //
    //
    //     html2canvas(document.body, {
    //         onrendered:function(canvas) {
    //             var contentWidth = canvas.width;
    //             var contentHeight = canvas.height;
    //             //一页pdf显示html页面生成的canvas高度;
    //             var pageHeight = contentWidth / 592.28 * 841.89;
    //             //未生成pdf的html页面高度
    //             var leftHeight = contentHeight;
    //             //pdf页面偏移
    //             var position = 0;
    //             //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    //             var imgWidth = 595.28;
    //             var imgHeight = 592.28/contentWidth * contentHeight;
    //             var pageData = canvas.toDataURL('image/jpeg', 1.0);
    //             var pdf = new jsPDF('', 'pt', 'a4');
    //             //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //             //当内容未超过pdf一页显示的范围，无需分页
    //             if (leftHeight < pageHeight) {
    //                 pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
    //             } else {
    //                 while(leftHeight > 0) {
    //                     pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
    //                     leftHeight -= pageHeight;
    //                     position -= 841.89;
    //                     //避免添加空白页
    //                     if(leftHeight > 0) {
    //                         pdf.addPage();
    //                     }
    //                 }
    //             }
    //             pdf.save('content.pdf');
    //         }
    //     })
    // }


});