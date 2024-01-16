function exibirMensagem(event) {
    var newli = document.createElement("li")
    newli.textContent = 'Pão'

    var lianterior = document.getElementById('oie')
    lianterior.appendChild(newli)
   alert(newli )
}