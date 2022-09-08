

// what color is that square

/* Write a program that reads a position from the user. Use an if statement to determine if the column begins with a black square or a white square. Then use modular arithmetic to report the color of the square in that row. For example, if the user enters a1 then your program should report that the square is black. If the user enters d5 then your program should report that the square is white. Your program may assume that a valid position will always be entered. It does not need to perform any error checking. */

//Self personnal notes for a soft primary logic:

//from the picture given:

//numbers = row
// letters = columns
// 1 = is an odds number(black square) = 1A
// 2 = is an even number(white square) = 2B
// use % modular operator to determine if a number (row) is even or odds with an if statemnets if so alert() if it's a black square or white square

let squareColor = prompt('please enter a number and a row e.g(1A): ').toLowerCase();
 

let number = squareColor.slice(0,1);//separating the number from the string

let letter = squareColor.slice(1,2);//separating the letter from the string

 
    
let WhiteColum;

let BlackColum;

if (letter == "a" || letter == "c" || letter == "e" || letter == "g" ) {

    WhiteColum = true;

} else {

    BlackColum = true;
}
    
if (WhiteColum && (number % 2 == 0)) {

alert("The square is White");

} else if (BlackColum && (number % 2 > 0)) {

alert("The square is White");

} else {

alert("The square is Black");

}



   


