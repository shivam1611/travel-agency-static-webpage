
// JS FOR COLOR CHANGING NAVIGATION 
window.onscroll = function(){
        var navbar = document.getElementById('navbar');
        var scrollValue = window.scrollY;
        console.log(scrollValue);
        if(scrollValue>150){
            navbar.classList.add('changebg')
        }
        else{
            navbar.classList.remove('changebg')
        }
    }
        
    // JS FOR MOBILE NAVIGATION 

    var ham = document.getElementById('ham');
    var navlist = document.getElementById('navlist');
    
    ham.onclick = function(){
        if(navlist.style.width == "100%"){
            navlist.style.width = "0";
        }
        else{
            navlist.style.width = "100%"
        }
    }
