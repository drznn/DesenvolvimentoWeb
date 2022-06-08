function caracteres(e, id) {
    var context, button = '';

    if(id === 'storyHome') {
        context = 'contChar';
        button = 'botaoEnviarHome';
    } else if (id === 'storyModal') {
        context = 'contCharModal';
        button = 'botaoEnviarModal';
    }

    console.log(button)
    let count = document.getElementById(context);
    let buttonElement = document.getElementById(button);
    if(e.target.value.length === 0){
        count.style.opacity = 0;
        buttonElement.disabled = true;
    }else{
        buttonElement.disabled = false;
        count.style.opacity = 1;
        if(e.target.value.length > 100){
            count.style.color ="rgb(255, 200, 0)";
        }
        if(e.target.value.length > 140) {
            count.style.color ="rgb(255, 0, 0)";
            buttonElement.disabled = true;
        }
        if(e.target.value.length <= 140) {
            buttonElement.disabled = false;
        }
        if(e.target.value.length <= 100) {
            count.style.color ="rgb(0, 0, 0)";
        }
        count.textContent =  140 - e.target.value.length;
        }
}
