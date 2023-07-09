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





        var profile2 = document.getElementById("myProfile");
        var img2 = document.querySelector(" .masky .icons .button2 img");
        var span2 = document.getElementsByClassName("close2")[0];




        img1.onclick = function () {
            output1.style.display = "block";}

        span1.onclick = function () {
            output1.style.display = "none";}




        img2.onclick = function () {
            profile2.style.display = "block";}

        span2.onclick = function () {
            profile2.style.display = "none";}





        window.onclick = function (event) {
            if (event.target == output1) {
                output1.style.display = "none";
            }

            else if (event.target == profile2) {
                profile2.style.display = "none";
            }
        }