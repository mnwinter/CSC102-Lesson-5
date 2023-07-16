//Create the var intervaild and assigs the value 0
var interval = 0;
//Create the var change and assigns the value 100
var change = 100;
//Creates the Funtion start
function start()
{
    //when the start button is clicked it disables the start button
    document.getElementById("startButton").disabled = true;
    //When the start button is clicked it enables the stop button
    document.getElementById("stopButton").disabled = false;
    //Creates the var Image in reference to the html id imgMeme
    var image = document.getElementById("imgMeme");
    // takes the intervalid var and uses the setInterval to call another function 
    interval = setInterval(function() {
        //Takes the current image location and changes it by the var "change" value px right
            image.style.left = change + "px";
            //Takes the current image location and changes it by the var "change" value in px down
            image.style.top = change  + "px";

            //takes the current value of change and adds 10
            change +=10;
            //displays the current value of X px and Y px on the screen
            document.getElementById("msg").innerHTML = "X px = " + image.style.left + " y px = " + image.style.top;
        }
    ,100); 
    
}
//Creates the stop function
function stop() 
{
    //When the stop button is clicked it disables the stop button
    document.getElementById("stopButton").disabled = true;
    //When the stop button is clicked it enables the start button
    document.getElementById("startButton").disabled = false;
    // clears the changes to the intervalid var back to 0
    clearInterval(interval);
}