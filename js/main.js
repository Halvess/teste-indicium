
function showContent(id){
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === ""){
        element.style.animationName = "fade";
        element.style.animationDirection = "normal";
        element.style.display = "block";
    } 
    else{
        element.style.animationName = "reverse-fade";
        element.style.animationDirection = "normal";
        element.style.display = "none";
    } 
}

function highLight(id){
    var elements = document.getElementsByClassName('button-slide-problem');
    var toHighlight = document.getElementById(id);
    toHighlight.style.background = "var(--light-blue)"
    toHighlight.style.color = "white";
    for (var i = 0; i < elements.length ; i++){
        if (elements[i].id !== toHighlight.id){
            elements[i].style.background = "none";
            elements[i].style.color = "var(--light-blue)"
        }
        else{
        }
    }

}

function highLight(id){
    var elements = document.getElementsByClassName('button-slide-problem');
    var toHighlight = document.getElementById(id);
    toHighlight.style.background = "var(--light-blue)"
    toHighlight.style.color = "white";
    for (var i = 0; i < elements.length ; i++){
        if (elements[i].id !== toHighlight.id){
            elements[i].style.background = "none";
            elements[i].style.color = "var(--light-blue)"
        }
        else{
        }
    }
}

function highLight_ishikawa(id){
        var elements = document.getElementsByClassName('button-slide-ishikawa');
        var toHighlight = document.getElementById(id);
        toHighlight.style.background = "var(--light-blue)"
        toHighlight.style.color = "white";
        for (var i = 0; i < elements.length ; i++){
            if (elements[i].id !== toHighlight.id){
                elements[i].style.background = "none";
                elements[i].style.color = "var(--light-blue)"
            }
            else{
            }
        }
}

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
var i=0;
function slideShow(id){
    var button = document.getElementById(id);
    var scroller = document.getElementById('scroller-problema');
    var element = document.getElementsByClassName('js-slide-problema');
    var ishikawa_elements = document.getElementsByClassName('slide-ishikawa')
    if (button.id === "slide-next"){
        i++
        element[i].scrollIntoView(false, {behavior:'smooth'})
        if(i!==0){
            document.getElementById('slide-back').style.display = "inline-flex"
        }
        if(i===element.length-1){
            button.style.display = "none";
            scroller.scrollIntoView(element[i])
            
        }

    }
    else if (button.id === "slide-back"){
        i--
        if (i<=0){
            i=0;
            button.style.display = "none"
            scroller.scroll(-vw,0);
        }
        else{
            scroller.scroll(-vw,0);
            document.getElementById('slide-next').style.display = "inline-flex"
        }
    }
}