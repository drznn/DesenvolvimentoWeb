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
    let usuario = document.getElementById("inputEmail1").value.substring(0, document.getElementById("inputEmail1").value.indexOf("@"));
    let dominio = document.getElementById("inputEmail1").value.substring(document.getElementById("inputEmail1").value.indexOf("@") + 1, document.getElementById("inputEmail1").value.length);

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
    let senha = document.getElementById("inputPassword1").value;
    if (senha.length < 1) {
        document.getElementById("btnEntrar").disabled = true;
        document.getElementById("inputPassword1").className = "form-control is-invalid";
        document.getElementById("msgsenha").innerHTML = "<font color='red'>A senha é Obrigatória e deve ter pelo menos 6 Caracteres </font>";
    }
    if (senha.length >= 1 && senha.length < 6) {
        document.getElementById("inputPassword1").className = "form-control is-invalid";
        document.getElementById("msgsenha").innerHTML = "<font color='red'>A senha é Obrigatória e deve ter pelo menos 6 Caracteres </font>";
        document.getElementById("btnEntrar").disabled = false;
        return false;
    } if (senha.length >= 6) {
        document.getElementById("msgsenha").innerHTML = "";
        document.getElementById("inputPassword1").className = "form-control is-valid";
        if (validaEmail()) {
            console.log("teste")
            document.getElementById("btnEntrar").disabled = false;
        } else {
            document.getElementById("btnEntrar").disabled = true;
        }
        return true;
    }
}

function confirmaSenha() {
    let senha1 = document.getElementById("inputPassword1");
    let senha2 = document.getElementById("inputPassword2");

    if (senha1.value === senha2.value) {
        document.getElementById("msgsenha2").innerHTML = "";
        senha2.className = "form-control is-valid";
    } else {
        senha2.className = "form-control is-invalid";
        document.getElementById("msgsenha2").innerHTML = "<font color='red'>Informe a mesma senha que você digitou </font>";
    }
}

function validaNome() {
    let nome = document.getElementById("formGroupExampleInput").value;
    if (nome.length < 1) {
        document.getElementById("formGroupExampleInput").className = "form-control is-invalid";
        document.getElementById("msgnome").innerHTML = "<font color='red'>Por favor, Informe um nome de usuário </font>";
        return false;
    } else {
        document.getElementById("msgnome").innerHTML = "";
        document.getElementById("formGroupExampleInput").className = "form-control is-valid";
        return true;
    }

}

function addTabelaDia(value) {
    const meses = value;

    var select = document.getElementById("dia");

    let flag = false;
    while (select.length > 1) {
        if (select.children[0].innerHTML === 'Dia' && !flag ){
            flag = true;
            continue;
        }    
        select.removeChild(select.lastChild);
    }

    if (meses === '4' || meses === '6' || meses === '9' || meses === '11') {
        for (let index = 1; index < 31; index++) {
            $("#dia option").eq(0).after($("<option>Uma novo dia</option>").text(index));
        }
    } else if (meses === '2') {

        for (let index = 1; index <= 29; index++) {
            $("#dia option").eq(0).after($("<option>Uma novo dia</option>").text(index));
        }
    } else {
        for (let index = 1; index <= 31; index++) {
            $("#dia option").eq(0).after($("<option>Uma novo dia</option>").text(index));
        }
    }

}


function addTabelaAno(value) {
    let mes = document.getElementById("mes").value;
    let dia = value;

    var select = document.getElementById("ano");

    let flag = false;
    while (select.length > 1) {
        if (select.children[0].innerHTML === 'Ano' && !flag ){
            flag = true;
            continue;
        }    
        select.removeChild(select.lastChild);
    }

    if (mes === '2' && dia === "29") {
        for (let index = 1985; index <= 2022; index++) {
            if (index % 4 == 0) {
                $("#ano option").eq(0).after($("<option>Uma novo ano</option>").text(index));
            }
        }
    } else {
        for (let index = 1985; index <= 2022; index++) {
            $("#ano option").eq(0).after($("<option>Uma novo ano</option>").text(index));
        }
    }
}
