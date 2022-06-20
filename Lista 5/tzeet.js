function caracteres(e, id) {
    var context, button = '';

    if (id === 'storyHome') {
        context = 'contChar';
        button = 'botaoEnviarHome';
    } else if (id === 'storyModal') {
        context = 'contCharModal';
        button = 'botaoEnviarModal';
    }

    console.log(button)
    let count = document.getElementById(context);
    let buttonElement = document.getElementById(button);
    if (e.target.value.length === 0) {
        count.style.opacity = 0;
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
        count.style.opacity = 1;
        if (e.target.value.length > 100) {
            count.style.color = "rgb(255, 200, 0)";
        }
        if (e.target.value.length > 140) {
            count.style.color = "rgb(255, 0, 0)";
            buttonElement.disabled = true;
        }
        if (e.target.value.length <= 140) {
            buttonElement.disabled = false;
        }
        if (e.target.value.length <= 100) {
            count.style.color = "rgb(0, 0, 0)";
        }
        count.textContent = 140 - e.target.value.length;
    }
}

function validaEmail() {
    usuario = document.getElementById("inputEmail1").value.substring(0, document.getElementById("inputEmail1").value.indexOf("@"));
    dominio = document.getElementById("inputEmail1").value.substring(document.getElementById("inputEmail1").value.indexOf("@") + 1, document.getElementById("inputEmail1").value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML = "";

        document.getElementById("inputEmail1").className = "form-control is-valid";
        if (document.getElementById("inputPassword1").value.length > 1) {
            document.getElementById("btnEntrar").disabled = false;
        } else {
            document.getElementById("btnEntrar").disabled = true;
        }

        return true;
    }
    else {
        document.getElementById("inputEmail1").className = "form-control is-invalid";
        document.getElementById("msgemail").innerHTML = "<font color='red'>Informe um E-mail válido </font>";
        document.getElementById("btnEntrar").disabled = true;
        return false;
    }
}

function validaSenha() {
    senha = document.getElementById("inputPassword1").value;
    if(senha.length < 1){
        document.getElementById("btnEntrar").disabled = true;
        document.getElementById("inputPassword1").className = "form-control is-invalid";
        document.getElementById("msgsenha").innerHTML = "<font color='red'>A senha é Obrigatória e deve ter pelo menos 6 Caracteres </font>";
    }
    if(senha.length >=1 && senha.length < 6) {
        document.getElementById("inputPassword1").className = "form-control is-invalid";
        document.getElementById("msgsenha").innerHTML = "<font color='red'>A senha é Obrigatória e deve ter pelo menos 6 Caracteres </font>";
        document.getElementById("btnEntrar").disabled = false;
        return false;
    }if(senha.length >=6){
        document.getElementById("msgsenha").innerHTML = "";
        document.getElementById("inputPassword1").className = "form-control is-valid";
        if (validaEmail()) {
            document.getElementById("btnEntrar").disabled = false;
        } else {
            document.getElementById("btnEntrar").disabled = true;
        }
        return true;
    }
}

function confirmaSenha() {
    senha1 = document.getElementById("inputPassword1");
    senha2 = document.getElementById("inputPassword2");

    if (senha1.value === senha2.value) {
        document.getElementById("msgsenha2").innerHTML = "";
        senha2.className = "form-control is-valid";
    } else {
        senha2.className = "form-control is-invalid";
        document.getElementById("msgsenha2").innerHTML = "<font color='red'>Informe a mesma senha que você digitou </font>";
    }
}

function validaNome(){
    nome = document.getElementById("formGroupExampleInput").value;
    if(nome.length < 1){
        document.getElementById("formGroupExampleInput").className = "form-control is-invalid";
        document.getElementById("msgnome").innerHTML = "<font color='red'>Por favor, Informe um nome de usuário </font>";
        return false;
    }else{
        document.getElementById("msgnome").innerHTML = "";
        document.getElementById("formGroupExampleInput").className = "form-control is-valid";
        return true;
    }

}