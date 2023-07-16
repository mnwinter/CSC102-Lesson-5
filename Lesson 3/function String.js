function palindrome() {
    // This line pulls the Data out of InitString and places it into the var String1
    var String1 = document.getElementById("InitString").value;
    //this converts the user input to all lowercase and places the result in LowerCase1
    var LowerCase1 = String1.toLowerCase();
    //Takes the value in LowerCase1 convers it to an array and then and reverses the array and rejoins 
    //the array into one string
    var ReverseStr1 = LowerCase1.split('').reverse().join('');
    // If the LowerCase1 var is equal to the ReverseStr1 its a Palidrome
    if( LowerCase1 == ReverseStr1){
        alert("This is a Palindrome");
    } //Else its not a plaidrome
    else{
        alert("This is Not a Palindrome");
    }
    // Used to debug the program by placing each var into readable text to verify each stage of conversion
    console.log(String1)
    console.log(LowerCase1)
    console.log(ReverseStr1)
    }