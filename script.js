function mostrar() {
    text = email.value;
    alert(text);
}

function aparecerJanelinha() {
    text = email.value;
    txt.innerHTML = text;
    janelinha.style.display = "block";
}

s = 0;
function soma() {
    s = s + 1;
    resultado.innerHTML = s;
    email.value = s;
}

function imprimir() {
    window.print();
}

function fechar() {
    janelinha.style.display = "none";
}