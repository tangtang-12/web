$(function(){
  var $mesBox = $("#words");
  var $text = $("#talkwords");
  var $sendBtn = $("#talksub");

  $sendBtn.click(function(){
    var sText = $text.val();
    if (sText == ''){
      alert('请输入内容');
      return;
    }

    var sMesContent = '';
    sMesContent ='<div class="btalk"><span>'+sText+'</span></div>';
  
    $mesBox.html($mesBox.html() + sMesContent);
    $text.val('');
  })
})