// Truncate a string
function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num) + '...';
  } else {
    return str;
  }
}

console.log(truncateString('A-tisket a-tisket A green and yellow basket', 8));