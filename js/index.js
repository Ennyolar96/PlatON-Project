//    footer year
   var data = new Date();
    var thisYear = data.getFullYear();
    document.getElementById('getYear').innerHTML = thisYear;

    // typing animation
    var i = 0;
    var txt = 'Welcome to PlatON Developer Community.';
    var speed = 50;
    function typeWord(){
        if (i < txt.length){
            document.getElementById("welcome").innerHTML += txt.charAt(i);
            i++
            setTimeout(typeWord, speed);
        }
    }
    typeWord();
    