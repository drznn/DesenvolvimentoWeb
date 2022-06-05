function caracteres(e) {
    let count = document.getElementById('contChar')
    if(e.target.value.length === 0){
        count.style.opacity = 0;
        document.getElementById("botaoEnviar").disabled = true;
    }else{
        document.getElementById("botaoEnviar").disabled = false;
        count.style.opacity = 1;
        if(e.target.value.length > 100){
            count.style.color ="rgb(255, 200, 0)";
        }
        if(e.target.value.length > 140) {
            count.style.color ="rgb(255, 0, 0)";
            document.getElementById("botaoEnviar").disabled = true;
        }
        if(e.target.value.length <= 140) {
            document.getElementById("botaoEnviar").disabled = false;
        }
        if(e.target.value.length <= 100) {
            count.style.color ="rgb(0, 0, 0)";
        }
        count.textContent =  140 - e.target.value.length;
        }
}

