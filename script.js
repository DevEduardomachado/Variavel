function armazenarValor(){
    //armazena o valor que o usuário digitou
    var userInput = document.getElementById("userInput").value;
    //exiibe  o valor armazenado
    console.log("O valor da variável é: " + userInput);
    //atualiza o conteudo
    document.getElementById("valorInserido").innerText = "O valor inserido é " + userInput;
}