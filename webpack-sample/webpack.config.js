const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtreactPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// ✅ 자주 사용하는 플러그인 목록
// 1️⃣ Banner Plugin: date, commit -v, author
// 2️⃣ Define Plugin: 환경변수 관리, 빌드되면서 index.html에서 사용할 수 있는 변수
// 3️⃣ Html Plugin: 빌드 과정에 Html 포함
// 4️⃣ Clean Plugin: dist 폴더 초기화
// 5️⃣ Css Plugin: css 파일 분리

module.exports = {
  mode: "development",
  entry: {
    main: "./app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [process.env.NODE_ENV === "production" ? MiniCssExtreactPlugin.loader : "style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // ✅ Banner Plugin: date, commit -v, author
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
    // ✅ Define Plugin: 환경변수 관리, 빌드되면서 index.html에서 사용할 수 있는 변수
    new webpack.DefinePlugin({
      TWO: "1+1", // 함수?
      URI: JSON.stringify("https://www.naver.com"),
    }),
    // ✅ Html Plugin: 빌드 과정에 Html 포함
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 빌드할 index.html
      scriptLoading: "defer", // script 태그를 body 하단에 추가하고 defer 속성을 추가
      inject: "body", // script 태그를 body 요소 안에 추가
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "", // 파라미터
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 공백 제거
              removeComments: true, // 주석 제거
            }
          : false,
    }),
    // ✅ Clean Plugin: dist 폴더 초기화
    new CleanWebpackPlugin(),
    // ✅ Css Plugin: css 파일 분리
    ...(process.env.NODE_ENV === "production" ? [new MiniCssExtreactPlugin({ filename: "[name].css" })] : []),
  ],
};
