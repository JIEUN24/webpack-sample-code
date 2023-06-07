// ✅ 바벨의 주된 역할
// 바벨은 ES5 이상의 코드를 적당한 하위버전으로 바꿔주는 것이 주된 역할이다. 바뀐 코드는 IE 환경 등의 구버전 브라우저처럼 최신 자바스크립트 코드를 이해하지 못하는 환경에서도 잘 동작한다.
// 바벨이 변환하지 못하는 코드는 폴리필이라 부르는 코드조각을 불러와 결과물에 로딩해서 해결한다.

// ✅ 자주 사용하는 플러그인 목록 -> 프리셋 설정
// 1️⃣ @babel/plugin-transform-block-scoping (let, const => var)
// 2️⃣ @babel/plugin-transform-arrow-functions (화살표함수 => 함수표현식)
// 3️⃣ @babel/plugin-transform-strict-mode (엄격모드 실행)

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
        // 폴리필
        useBuiltIns: "usage", // entry, false
        corejs: {
          version: 2,
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-block-scoping", "@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-strict-mode"],
};
