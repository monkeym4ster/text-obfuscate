export const glyphs = [
  {key: 'a', value: ['à', 'á', 'â', 'ã', 'ä', 'å', 'ɑ', 'а', 'ạ']},
  {key: 'b', value: ['d', 'lb', 'ib', 'ʙ', 'Ь', 'ｂ']},
  {key: 'c', value: ['ϲ', 'с', 'ⅽ', 'ƈ', 'ċ', 'ć']},
  {key: 'd', value: ['b', 'cl', 'dl', 'di', 'ԁ', 'ժ', 'ⅾ', 'ｄ', 'ɗ']},
  {key: 'e', value: ['é', 'ê', 'ë', 'ē', 'ĕ', 'ė', 'ｅ', 'е', 'ẹ', 'ę']},
  {key: 'f', value: ['Ϝ', 'Ｆ', 'ｆ']},
  {key: 'g', value: ['q', 'ɢ', 'ɡ', 'Ԍ', 'Ԍ', 'ｇ', 'ġ']},
  {key: 'h', value: ['lh', 'ih', 'һ', 'ｈ']},
  {key: 'i', value: ['1', 'l', 'Ꭵ', 'ⅰ', 'ｉ', 'í', 'ï']},
  {key: 'j', value: ['ј', 'ｊ', 'ʝ']},
  {key: 'k', value: ['lk', 'ik', 'lc', 'κ', 'ｋ']},
  {key: 'l', value: ['1', 'i', 'ⅼ', 'ｌ']},
  {key: 'm', value: ['n', 'nn', 'rn', 'rr', 'ṃ', 'ⅿ', 'ｍ']},
  {key: 'n', value: ['m', 'r', 'ｎ', 'ń']},
  {key: 'o', value: ['0', 'Ο', 'ο', 'О', 'о', 'Օ', 'Ｏ', 'ｏ', 'ȯ', 'ọ', 'ỏ', 'ơ', 'ó']},
  {key: 'p', value: ['ρ', 'р', 'ｐ']},
  {key: 'q', value: ['g', 'ｑ', 'զ']},
  {key: 'r', value: ['ʀ', 'ｒ']},
  {key: 's', value: ['Ⴝ', 'Ꮪ', 'Ｓ', 'ｓ', 'ʂ', 'ś']},
  {key: 't', value: ['τ', 'ｔ']},
  {key: 'u', value: ['μ', 'υ', 'Ս', 'Ｕ', 'ｕ', 'ս']},
  {key: 'v', value: ['ｖ', 'ѵ', 'ⅴ', 'ν']},
  {key: 'w', value: ['vv', 'ѡ', 'ｗ']},
  {key: 'x', value: ['ⅹ', 'ｘ', 'х', 'ҳ']},
  {key: 'y', value: ['ʏ', 'γ', 'у', 'Ү', 'ｙ', 'ý']},
  {key: 'z', value: ['ｚ', 'ʐ', 'ż', 'ź', 'ʐ']},
];

export const obfuscate = (content, deep, glyphs) => {
  const opts = {
    content,
    contentLength: content.length,
    deep,
    replaceCount: null, // 总共需要产生的混淆字符串
    interval: null, // 间隔指定个数字符串
  };
  let counter = 0;
  opts.replaceCount = opts.contentLength * opts.deep;
  opts.interval = opts.contentLength != opts.replaceCount ? Math.round(opts.contentLength / opts.replaceCount) :
    0;
  // 混淆间隔如果有效，最少为 1
  if (opts.replaceCount < 1 && opts.interval != 0) {
    opts.replaceCount = 1;
  }
  for (let i = 0; i < opts.contentLength; i++) {
    // 达到替换条件
    if (counter >= opts.interval) {
      // 归零计数器
      counter = 0;
      let letter = opts.content[i];
      for (const _ of glyphs) {
        const { key, value } = _;
        if (key === letter) {
          const items = value;
          const item = items ? items[Math.floor(Math.random() * items.length)] : letter;
          opts.content = `${opts.content.substr(0, i)}${item}${opts.content.substr(i + 1)}`;
        }
      }
      continue;
    }
    counter += 1;
  }
  return opts.content;
}