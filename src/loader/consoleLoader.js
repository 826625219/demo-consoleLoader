const core = require("@babel/core"); //babel核心模块
let types = require("@babel/types"); //用来生成或者判断节点的AST语法树的节点
const fs = require("fs");

const logPlugin = {
  visitor: {
    CallExpression(path, state) {
      const { node } = path;
      if (types.isMemberExpression(node.callee)) {
        if (node.callee.object.name === "console") {
          //找到console
          if (
            ["log", "info", "warn", "error"].includes(node.callee.property.name)
          ) {
            //找到方法名

            //找到文件名
            const filename = state.file.opts.filename.split('"')[1];

            fs.appendFileSync(
              "/Users/zhengmingsheng/Code/gongchenghua1/src/loader/code.txt",
              "================================================\n" + filename
            );
            node.arguments.push(
              types.stringLiteral(`调用点位于${filename}文件`)
            ); //向右边添加我们的行和列信息

            const { line } = node.loc.start; //找到所处位置的行和列
            // 其实这个行数还是有问题的，编译后有一些额外的代码“var _jsxDevRuntime = require("react/jsx-dev-runtime");
            node.arguments.push(types.stringLiteral(`第${line}行`)); //向右边添加我们的行和列信息
          }
        }
      }
    },
  },
};

module.exports = function (sourceCode) {
  sourceCode = String(sourceCode);
  let fileName = null;
  if (sourceCode.indexOf("_jsxFileName") !== -1) {
    fileName = sourceCode.match(/\"\S+\"/)[0];
  } else {
    fileName = "default";
  }
  const targetSource = core.transform(sourceCode, {
    plugins: [logPlugin], //使用插件
    filename: fileName,
  });
  // 1.为什么写相对路径不生效呢？
  fs.appendFileSync(
    "/Users/zhengmingsheng/Code/gongchenghua1/src/loader/code.txt",
    "================================================\n" + targetSource.code
  );

  if (typeof targetSource.code === "string") {
    return targetSource.code;
  } else {
    return sourceCode;
  }
};
