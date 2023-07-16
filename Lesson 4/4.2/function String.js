function Verify() {
    // This line pulls the Data out of the HTML Forms Section and assigns them to individual variables in the javascript
    var FName = document.getElementById("FirstName").value;
    var LName = document.getElementById("LastName").value;
    var ZCode = document.getElementById("Zipcode").value;
    //Creates the var Sound and directs it to the mp3 file
    var Sound = new Audio("audio.mp3");
    //this combines the input fields FName and LName while adding a space between them
    var CombinedName = FName + " " + LName ;
    // this returns the .length value and stores it in a var for calling
    var Length = CombinedName.length; 
    //If statement allows for the conditional logic. If var length is less then 20 char
    if( Length < 20){
        //And if the Zcode is only 5 numeric characters
       if( ZCode.length == 5){
        //This will play the sound after the alert is cleared. A spooky exit
        Sound.play();   
        //It will display the secret code
        alert("This is The Secret Code" );
        
            
        }
        //Verifys that the ZipCode is 5 digits
        else if(ZCode.length != 5){
            alert("This Zipcode is not the correct Length");
 
        }
     //Else anthing over 20 chars it will not show the secret code
    else{
        alert("This Input is Invalid");
        }
    }
    // Used to debug the program by placing each var into readable text to verify each stage of conversion
    console.log(FName)
    console.log(LName)
    console.log(ZCode.length)
    console.log(CombinedName)
    console.log(Length)
}