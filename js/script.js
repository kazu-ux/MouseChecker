//指定数以上が表示されたら、上から順に消していく
function Delete() {
    let size = $("tbody").children().length
      if (size > 10){
          $("tr:first").remove();
      }
}

//クリックされた時刻を取得
function time() {
let date = new Date().toLocaleString();
//年月日を取り除き、時刻のみにする
date = date.match(/[0-9]+:[0-9]{2}:[0-9]{2}/)
return (date)
}

//リスト
let mouse = ["左ボタン", "中ボタン", "右ボタン", "ボタン4 ", "ボタン5 ", "ホイール"]
let up_down = ["アップ", "ダウン"]
let tag = ["<tr><td class='log'>", "</td></tr>"]

//左右クリックとホイールクリックの検知
//return falseでマウス操作を無効
$("html").mouseup((event)=>{
$("tbody").append(tag[0] + time() + " " + mouse[event.which - 1] + up_down[0] + tag[1]);
Delete();
return false
})

$("html").mousedown((event) => {
$("tbody").append(tag[0] + time() + " " + mouse[event.which - 1] + up_down[1] + tag[1]);
Delete();
return false
})

//右クリックメニューの無効
$("html").on('contextmenu', function() {
    return false
})

//ホイール検知

var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).on(mousewheelevent,function(e){
    e.preventDefault();
    var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
    if (delta < 0){
        // マウスホイールを下にスクロールしたときの処理を記載
        $("tbody").append(tag[0] + time() + " " + mouse[5] + up_down[1] + tag[1])
        Delete();
    } else {
        // マウスホイールを上にスクロールしたときの処理を記載
        $("tbody").append(tag[0] + time() + " " + mouse[5] + up_down[0] + tag[1])
        Delete();
    }
});
