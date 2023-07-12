var req = new XMLHttpRequest();
req.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
req.onload = function(){
    var like = JSON.parse(req.responseText);
    console.log(like[1]);
};
req.send();


        // JavaScript to handle the popup functionality
        var output7 = document.getElementById("myOutput7");
        var img7 = document.querySelector(" .masky .icons .button7 img");
        var span7 = document.getElementsByClassName("close7")[0];


        img7.onclick = function () {
            output7.style.display = "block";}

        span7.onclick = function () {
            output7.style.display = "none";}



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
            profile2.style.display = "block";
            typeWriter();
        }

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






                var pay8 = document.getElementById("myPay");
        var img8 = document.querySelector(" .masky .icons .button8 img");
        var span8 = document.getElementsByClassName("close8")[0];
    
    
            img8.onclick = function () {
                pay8.style.display = "block";}
    
            span8.onclick = function () {
                pay8.style.display = "none";}










        const text = "I'm a passionate freelance developer and innovator who is committed to pushing the boundaries of technology.\n\nI can provide a broad range of solutions to fulfill your technological needs, with proficiency in automation development, robotic innovation, mechatronics services, thesis consultation, AI systems, IoT systems, and Android app development. \n\nI have developed my talents over the years by specializing in Python, JavaScript, C/C++, as well as interacting freely with embedded systems such as Arduino, Raspberry Pi, and ESP modules. With over 200 clients served since 2019, I offer an extensive amount of knowledge and a dedication to excellence for every project.";
        const typingText = document.getElementById("typing-text");
        
        let i = 0;
        function typeWriter() {
          if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 42);
          }
        }
        
  




        
        window.onclick = function (event) {
            if (event.target == output7) {
                output7.style.display = "none";
            }

            else if (event.target == profile2) {
                profile2.style.display = "none";
                
            }

            else if (event.target == contact5) {
                contact5.style.display = "none";
            }

            else if (event.target == pay8) {
                pay8.style.display = "none";
            }
        }