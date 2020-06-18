module.exports = function(src) {
  let regexps = this.query.regexps;
  if (src && regexps && regexps.length) {
    let content = src;
    regexps.forEach((reg) => (content = content.replace(reg, '')));
    return content;
  }
  return src;
};
