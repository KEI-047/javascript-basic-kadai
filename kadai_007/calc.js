// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16);

// 3と5の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}
// 3の倍数の場合
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
// 5の倍数の場合
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
// その他の場合
else {
    console.log(num);
}

