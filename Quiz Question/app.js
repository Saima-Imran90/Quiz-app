let quest=document.getElementById("a")
let incorrect=document.getElementById("incorrect")
let correct=document.getElementById("correct")

function wrong(){
    if (quest===incorrect){
       alert("Your answer is wrong.")

    }
    else{
        alert("Good! your answer is correct")
    }

}

function right(){
    if (quest===correct){
        alert("Good! your answer is correct")
       
    }
    else{
        alert("You select wrong opyion.")

        
    }

}