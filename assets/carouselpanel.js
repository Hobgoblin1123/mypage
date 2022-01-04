$(function(){
  // 初期設定
  $("#carousel-area li:last").prependTo("#carousel-area ul");
  $("#carousel-area ul").css({ marginLeft: "-305px" });
  // クリック時のイベント
  $(".btn").click(function(){
    var btnId = $(this).attr("id");
    // 戻るボタン
    if(btnId == "prevBtn"){
      $("#carousel-area ul").animate({
        marginLeft: "-465px" //右側に隙間（空白）を作る
        },function(){
        $("#carousel-area li:first").appendTo("#carousel-area ul"); //できた隙間（一番右の画像が元々あった位置）に次に出てくる 画像（1番がもともとあったら、8番）をそこに移動させる
        $("#carousel-area ul").css({ marginLeft: "-305px" }); //変な表示にならないために作った余分なmarginを、元のmargin(5px)も考えて元に戻す
      })
    // 次へボタン
    }else if(btnId == "nextBtn"){
      $("#carousel-area ul").animate({
        marginLeft: "5px"
        },function(){
        $("#carousel-area li:last").prependTo("#carousel-area ul");
        $("#carousel-area ul").css({ marginLeft: "-305px" });
      })
    }
  })
})
