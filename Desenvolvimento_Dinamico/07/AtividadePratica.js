var busca = "Chá";
var valor = 0;

switch(busca){ 
    case "Café":
        valor = 3.50;
        valorFinal = valor.toFixed(2);
        console.log("O valor do café é R$: " + valorFinal);
        break;
    case "Leite":
        valor = 2;
        valorFinal = valor.toFixed(2);
        console.log("O valor do leite é R$: " + valorFinal);
        break;
    case "Chá":
        valor = 4;
        valorFinal = valor.toFixed(2);
        console.log("O valor do chá é R$: " + valorFinal);
        break;
    default:
        console.log("Bebida não disponível, escolha uma opção entre Café, Leite ou Chá. ");
}