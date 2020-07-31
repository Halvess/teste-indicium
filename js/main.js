var i=0;
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

function slideShow(id){
    var button = document.getElementById(id);
    var element = document.getElementsByClassName('problemas-slide-show');
    var ishikawa_elements = document.getElementsByClassName('slide-ishikawa')
    if (button.id === "problem-next"){
        if (element[i].style.display !== "none"){
            element[i].style.display = "none";
            i++
            if (i===element.length-1){
                element[i].style.display="block"
                button.style.display="none";
            }
            else{
                element[i].style.display="block"
                if (i !== 0){
                    document.getElementById("problem-back").style.display = "inline"
                }
                else if (i===0){
                    document.getElementById("problem-back").style.display = "none"                
                }
            }
        }
    }
    else if (button.id === "problem-back"){
        if (element[i].style.display !== "none"){
            element[i].style.display = "none";
            i--
            if (i===0){
                i=0;
                element[i].style.display="block"
                button.style.display="none"
                document.getElementById("problem-next").style.display = "inline"  
            }
        else{
            element[i].style.display="block";
            document.getElementById("problem-next").style.display = "inline"
        }
    }
    }
    else{}

        if (button.id === "ishikawa-next"){
            if (ishikawa_elements[i].style.display !== "none"){
                ishikawa_elements[i].style.display = "none";
                i++
                if (i===ishikawa_elements.length-1){
                    ishikawa_elements[i].style.display="block"
                    button.style.display="none";
                }
                else{
                    ishikawa_elements[i].style.display="block"
                    if (i !== 0){
                        document.getElementById("ishikawa-back").style.display = "inline"
                    }
                    else if (i===0){
                        document.getElementById("ishikawa-back").style.display = "none"                
                    }
                }
            }
        }
        else if (button.id === "ishikawa-back"){
            if (ishikawa_elements[i].style.display !== "none"){
                ishikawa_elements[i].style.display = "none";
                i--
                if (i===0){
                    i=0;
                    ishikawa_elements[i].style.display="block"
                    button.style.display="none"
                    document.getElementById("ishikawa-next").style.display = "inline"  
                }
            else{
                ishikawa_elements[i].style.display="block"
                document.getElementById("ishikawa-next").style.display = "inline"
            }
        }
        }
}