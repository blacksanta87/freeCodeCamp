// restrict possible username.
// 1 - the only numbers in the username have to be at the end. there can be zero or more of them at the end.
// 2 - username letters can be lowercase or uppercase
// 3 - username have to be at least two characters long. a two letter username can only use alphabet letters 
//     character.
let username = 'JackOfAllTrades';
let userCheck = /[a-z]{2,}\d*$/i;
let result = userCheck.test(username);

console.log(result);