var str = '\u00bd + \u00bc = \u00be';
console.info(str); //½ + ¼ = ¾
console.info(str.length); // 9
console.info(Buffer.byteLength(str)); // 12
