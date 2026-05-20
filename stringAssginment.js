//Find the length of the string
let s="Hello World"
let s1=s.split(" ")
console.log(s1)
console.log(s1[1].length)

//Find the last word length of the string
function lastWordLength(s3) {

    s3 = s3.trim();

    let words = s3.split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
}
let input = " fly me to the moon ";

console.log("Output:", lastWordLength(input));

