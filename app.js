
/* If you were to look up array two, it would be Mary and not Tom.
This is because array is at 0 and 0 is Bob, making Tom 1 and Mary 2 Woo!*/
var myArray = ["Bob", "Tom", "Mary", "Jim"]

//This is going to determine in the console log the length of each name, by number of letters
for( var y = 0; y < myArray.length; y++ ){
console.log(myArray[y] + " is " + myArray[y].length + " letters long")
}