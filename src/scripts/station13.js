function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if(e.target.checked){ 
    console.log("チェックされました。色をつけます");
    text.style.backgroundColor = "#ED3833";
    console.log("色をつけました");
  } else {
    text.style.backgroundColor = "#ffffff";
    console.log("チェックが外れました");
  }
}

// "要素id.checked"の形で、チェックボックスがチェックされた状態を表す。
// 参考URL: https://webings.net/js/font/
// backgroundColor; Cが大文字なのに気づくのに時間がかかった。