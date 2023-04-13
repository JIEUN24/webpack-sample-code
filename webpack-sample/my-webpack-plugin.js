class myWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("my-plugin", (compilation, callback) => {
      const source = compilation.assets["main.js"].source();
      console.log(source);
      compilation.assets["main.js"] = {
        source: () => {
          const banner = ["/**", " * Build Date: 2023-10-10", " */"].join("\n");
          return banner + "\n\n" + source;
        },
        size: () => {
          return Buffer.byteLength(source, "utf8");
        },
      };

      callback();
    });
  }
}

module.exports = myWebpackPlugin;
