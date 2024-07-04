// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

// ボタンにクリックイベント
btn.addEventListener('click', () => {
  // 2秒後にテキストを変更の非同期処理を設定
    setTimeout(() => {
        // textというidを持つHTML要素を取得し、定数に代入する
        const text = document.getElementById('text');
        // テキストに「ボタンをクリックしました」を設定する
        text.textContent = 'ボタンをクリックしました';
    }, 2000); //2秒
});
