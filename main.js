var req = new XMLHttpRequest();
req.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
req.onload = function(){
    var like = JSON.parse(req.responseText);
    console.log(like[1]);
};
req.send();




document.querySelector('.button1').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'none';
  });


document.querySelector('.button2').addEventListener('click', function() {
    document.querySelector('#profile').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#profile').style.display = 'none';
  });

document.querySelector('.button3').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'none';
  });


document.querySelector('.button4').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'none';
  });

document.querySelector('.button5').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'none';
  });


document.querySelector('.button6').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'none';
  });


  document.querySelector('.button7').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'none';
  });


document.querySelector('.button8').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#contact').style.display = 'none';
  });