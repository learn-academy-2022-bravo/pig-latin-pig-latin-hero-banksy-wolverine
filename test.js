

let vowelsArray = ["a","e","i","o","u"]
let testString = "Yummy"


// let firstMatch = str.match(/[aeiou]/g) || 0;
// let vowel = str.indexOf(firstMatch[0]);
// newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";






// function pigIt(str){
//     let strArr = str.split(' ');
//     let pigLatin = [];
  
//     for(let word of strArr){
//       if((/([a-zA-Z])/).test(word)){
//         pigLatin.push(word.substring(1) + word[0] + "ay");
//       }else{
//         pigLatin.push(word);
//       }
//     }
//     return pigLatin.join(" ");
//   }

var translate = function(word) {
    var array = word.split('');

    let firstMatch = word.match(/[aeiou]/g) || 0;
    let vowel = word.indexOf(firstMatch[0]);
    newStr = word.substring(vowel) + word.substring(0, vowel) + "ay";
    
    var newWord = '';
    for(var i = 0; i < vowels.length-1; i++) {
        for(var y = 0; y < word.length-1; y++) {
            if(word[y] === vowels[i]) {
                for(var x = y; x < word.length; x++){
                    newWord = newWord + word[x];
                }
                for(var n = 0; n < y; n++){ 
                    newWord = newWord + word[n];
                }
                return newWord + "ay";
            }       
        }
    }
}

translate("apple");
  console.log (translate("yummy"))

