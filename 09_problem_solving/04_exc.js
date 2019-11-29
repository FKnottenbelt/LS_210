function compareVersions(version1, version2) {
  if (!version1 || !version2) return 'emtpy input';

  const invalidChars = /[^0-9.]/g;
  if (version1.match(invalidChars) || version1.match(invalidChars)) return null;

  const invalidDots = /(^\.)|(\.\.)|(\.$)/g;
  if (version1.match(invalidDots) || version2.match(invalidDots)) return null;

  if (version1.length < version2.length) version1 = version1.padEnd(version2.length, '.0');
  if (version2.length < version1.length) version2 = version2.padEnd(version1.length, '.0');

  if (version1 > version2) return 1;
  if (version1 < version2) return -1;
  if (version1 === version2) return 0;
}


console.log(compareVersions('1.2.0.5', '1.2.3')); // < -1
console.log(compareVersions('1.2.0.5', '1.2.0')); // > 1
console.log(compareVersions('1.2.0', '1.2.0'));  // 0
console.log(compareVersions('1.A.0', '1.2.0'));  // null
console.log(compareVersions('1.18.2', '13.37')); // < -1
console.log(compareVersions('', '13.37'));
console.log(compareVersions('13.37'));
console.log('------------------');

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1