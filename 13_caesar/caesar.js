const caesar = function (text, shift) {
  const normalizedShift = ((shift % 26) + 26) % 26;
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    // Uppercase A-Z: 65-90
    if (code >= 65 && code <= 90) {
      const base = 65;
      const shifted = ((code - base + normalizedShift) % 26) + base;
      result += String.fromCharCode(shifted);
      // Lowercase a-z: 97-122
    } else if (code >= 97 && code <= 122) {
      const base = 97;
      const shifted = ((code - base + normalizedShift) % 26) + base;
      result += String.fromCharCode(shifted);
    } else {
      // Non-letters remain unchanged
      result += text[i];
    }
  }
  return result;
};

// Do not edit below this line
module.exports = caesar;
