module.exports = function reverse (n) {
    let result = n.toString().split('');
  return result.reverse().join('').slice(0, 3);
}
