const package = require('./package.json');
const path = require('path');
const load = path.resolve('ipad-loader.js');
const colors = require('colors/safe');

const VUE_CONFIG = {};

const HTML_REG = ['(<\\!--(\\s+)#ifdef(\\s+)', '', '(\\s+)-->)[\\s\\S]*(<\\!--(\\s+)#endif(\\s+)-->)'];
const JS_REG = ['(\\/\\/(\\s+)#ifdef(\\s+)', '', ')[\\s\\S]*(\\/\\/(\\s+)#endif)'];
const CSS_REG = ['(\\/\\*(\\s+)#ifdef(\\s+)', '', '(\\s+)\\*\\/)[\\s\\S]*(\\/\\*(\\s+)#endif(\\s+)\\*\\/)'];

function regResolverCreator(platform) {
  return function(reg) {
    reg[1] = platform;
    return new RegExp(reg.join(''), 'gi');
  };
}

function resolveRegex(page) {
  let config = page['uni-app'];
  if (!config) throw new Error('You need config uniapp in pageage.json!');
  let expect = config['scripts']['mp-ipad']['expect'];
  let regList = [];
  if (expect) {
    const regResolver = regResolverCreator(expect.platform);
    expect.html && regList.push(regResolver(HTML_REG));
    expect.js && regList.push(regResolver(JS_REG));
    expect.css && regList.push(regResolver(CSS_REG));
  }
  return regList;
}

if (process.env['IPAD_EXPECT']) {
  // 启用ipad端移除H5代码
  const regexps = resolveRegex(package);
  console.log(colors.green('--启用IPad-Loader--'));
  console.log(colors.grey(regexps));
  console.log(colors.green('------------------'));
  VUE_CONFIG.chainWebpack = (config) => {
    config.module
      .rule('ipad')
      .test(/\.vue$/)
      .use()
      .loader(load)
      .options({ regexps })
      .end();
  };
}

module.exports = VUE_CONFIG;
