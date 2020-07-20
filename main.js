function ativar(){

        document.getElementById("btn-test1").style = "animation: mood 3s linear infinite forwards running;"
} 
function desativar(){

        document.getElementById("btn-test1").style = "animation: mood 5s linear infinite forwards paused;"
}


document.getElementById("btn-form").onclick = function mudar(){
        window.location.href = "animation.html"
}

function back(){
        window.location.href = "index.html"
}
