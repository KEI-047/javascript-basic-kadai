const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // 月は0から始まるので+1する
const date = now.getDate();

console.log(year + '年' + month + '月' + date + '日');
