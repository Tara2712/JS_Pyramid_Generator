const character= "#";
const array = [];
const count = 10;
let inverted = false;

function row(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2* rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if(inverted){
        array.unshift(row(i, count));
    } else {
        array.push(row(i, count));
    }
}

let result = " "
for(const row of array){
    result = result +  row + "\n";
}
console.log(result);