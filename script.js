// 1. *
//   * *
//  * * *
// * * * *
// * * * * *

// ​Console this star pattern
let star = '*';
for (let i = 1; i <= 5; i++) {
    let row = '     '.slice(0, 5 - i) + star;
    console.log(row);
    star += ' *';
}

// 2.['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and console each item by using switch statement.
const array = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];

array.map(item => {
    switch (item) {
        case 'car':
            console.log("car");
            break;
        case 1:
            console.log(1);
            break;
        case 5:
            console.log(5);
            break;
        case 'js':
            console.log("js");
            break;
        case 'node js':
            console.log("node js");
            break;
        case 'mysql':
            console.log('mysql');
            break;
        case 'sql':
            console.log('sql');
            break;
        default:
            console.log("Unknown item");
    }
});

// 3.[1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
const arr = [1, 2, 3, 4, 5, 6];

function deleteIndex() {
    arr.splice(5, 1);
    arr.splice(2, 1);
    console.log(arr);
}

deleteIndex();

// 4.Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
const array1 = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];

array1.forEach(item => {
    console.log(item.constructor.name);
});

//5.Create a self-invoking function to console you name.
(function () {
    console.log('Akshay S');
})();