module.exports = function myWebpackLoader(content) {
  console.log("실행");
  return content.replace("console.log(", "alert(");
};
