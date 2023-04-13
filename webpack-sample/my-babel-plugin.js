// custom babel plugin
module.exports = function myBabelPlugin() {
  return {
    visitor: {
      VariableDeclaration(path) {
        console.log("kind: ", path.node.kind);

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};
