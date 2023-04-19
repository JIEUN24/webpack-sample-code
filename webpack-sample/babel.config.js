// ✅ 바벨의 주된 역할
// 바벨은 ES5 이상의 코드를 적당한 하위버전으로 바꿔주는 것이 주된 역할이다. 바뀐 코드는 IE 환경 등의 구버전 브라우저처럼 최신 자바스크립트 코드를 이해하지 못하는 환경에서도 잘 동작한다.

module.exports = {
  presets: [
    [
      // preset-env는 target에 옵션만 지정하면 이에 맞는 플러그인들을 찾아 최적의 코드 출력
      "@babel/preset-env",
      {
        targets: {
          // 버전 정보는 해당 사이트 활용 : https://caniuse.com/
          chrome: "79",
          ie: "11",
        },
        useBuiltIns: "usage", // entry, false
        corejs: {
          version: 2,
        },
      },
    ],
  ],
  plugins: [],
};
