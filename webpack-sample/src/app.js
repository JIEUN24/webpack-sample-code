import { sum } from "./math.js";
import "./app.css";
import "./app.scss";

document.getElementById("btn").onclick = function () {
  window.open(URI);
};

var foo = "";

console.log();

console.log(process.env.NODE_ENV);
console.log(TWO);
console.log(URI);

// 화살표 함수 : ES6 부터 지원
const alert = (msg) => window.alert(msg);

// 프라미스 : ES5 버전으로 대체 불가
new Promise();
