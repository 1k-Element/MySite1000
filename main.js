var req = new XMLHttpRequest();
req.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
req.onload = function(){
    var like = JSON.parse(req.responseText);
    console.log(like[1]);
};
req.send();


        // JavaScript to handle the popup functionality
        var output1 = document.getElementById("myOutput");
        var img1 = document.querySelector(" .masky .icons .button1 img");
        var span1 = document.getElementsByClassName("close1")[0];


        img1.onclick = function () {
            output1.style.display = "block";}

        span1.onclick = function () {
            output1.style.display = "none";}





        var profile2 = document.getElementById("myProfile");
        var img2 = document.querySelector(" .masky .icons .button2 img");
        var span2 = document.getElementsByClassName("close2")[0];


        img2.onclick = function () {
            profile2.style.display = "block";}

        span2.onclick = function () {
            profile2.style.display = "none";}





        var education4 = document.getElementById("myEducation");
        var img4 = document.querySelector(" .masky .icons .button4 img");
        var span4 = document.getElementsByClassName("close4")[0];
    
    
            img4.onclick = function () {
                education4.style.display = "block";}
    
            span4.onclick = function () {
                education4.style.display = "none";}




        var contact5 = document.getElementById("myContact");
        var img5 = document.querySelector(" .masky .icons .button5 img");
        var span5 = document.getElementsByClassName("close5")[0];
    
    
            img5.onclick = function () {
                contact5.style.display = "block";}
    
            span5.onclick = function () {
                contact5.style.display = "none";}






        window.onclick = function (event) {
            if (event.target == output1) {
                output1.style.display = "none";
            }

            else if (event.target == profile2) {
                profile2.style.display = "none";
            }

            else if (event.target == contact5) {
                contact5.style.display = "none";
            }
        }