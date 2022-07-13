module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;
  let pars = bracketsConfig.map(e => e.join(""));
  function rec(str, pars) {
    let out = str;
    for (let v of pars) {
      if (str.includes(v)) out = str.replaceAll(v, "");
    }
    if (str.length === out.length) return out;
    else return rec(out, pars);
  }
  return rec(str, pars).length === 0;
}
