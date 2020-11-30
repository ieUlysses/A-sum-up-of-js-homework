//version 1//
for (let i = 0; i <= 100; i++) {  //i=counter//
    if (i % 15 == 0){
        console.log (i , "Fizzbuzz");   //if the counter is dividable by 15 display fizzbuzz
    } else if (i % 3 == 0) {
        console.log (i , "Fizz");       //if the counter is dividable by 3 display Fizz
    } else if (i % 5 == 0) {
        console.log (i , "Buzz");       //if the counter is dividable by 5 display buzz
    }   else{
        console.log(i);
    }
}
//version 4 //
for (let i = 0; i <= 100; i++) {         //i++ is just shorthand for saying i+=1
    let fbOutput = i;                   //fbOutput is now equal to the value for i

    if (i % 3 == 0) {
        fbOutput += "fizz"              //now if i is dividable by 3 it it equal to the value itself plus the word fizz
        
    }
    if (i % 5 == 0) {
        fbOutput += "Buzz"
    }
    
    console.log(fbOutput)
}
console.log("Beeeep")
for (let i = 0; i <= 100; i+=1) {         //i++ is just shorthand for saying i+=1
    let fbOutput = i;                   //fbOutput is now equal to the value for i

    if (i % 3 == 0) {
        fbOutput += "fizz"              //now if i is dividable by 3 it it equal to the value itself plus the word fizz
        
    }
    if (i % 5 == 0) {
        fbOutput += "Buzz"
    }
    
    console.log(fbOutput)
}