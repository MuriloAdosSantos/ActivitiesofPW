let nome = prompt('Informe Seu Nome');
{ document.getElementById('nom').innerHTML = nome };
let n1 = parseFloat(prompt('informe a Primeira Nota:'));
let n2 = parseFloat(prompt('informe a Segunda Nota:'));
let media = (n1 + n2) / 2;
if (media >= 6) {
    document.getElementById('med').innerHTML = media;
    document.getElementById('sit').innerHTML = 'Aprovado';
    document.getElementById('sit').style.color = 'blue';
} else {
    document.getElementById('med').innerHTML = media;
    document.getElementById('sit').innerHTML = 'Reprovado';
    document.getElementById('sit').style.color = 'red';
}