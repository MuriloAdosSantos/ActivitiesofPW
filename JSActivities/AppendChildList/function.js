document.getElementById("botao").addEventListener("click", myFunction);

function changeColor(node) {

    let color = document.querySelector('input[name="cor"]:checked').value;

    if (color == 'green') {
        node.style.color = 'green'
    } else if (color == 'red') {
        node.style.color = 'red'
    } else if (color == 'blue') {
        node.style.color = 'blue'
    }
}
function myFunction() {

    const node = document.createElement("li");
    let text = document.getElementById("text").value;
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    changeColor(node)
    document.getElementById("lista").appendChild(node);
}