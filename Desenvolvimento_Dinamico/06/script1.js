var pais = "Brasil";

if(pais != "Brasil"){  //condição "SE"
    console.log("Você é estrangeiro");
}else{                  // condição "SE NÂO"
    console.log("Você é brasileiro");
};

var idade = 20;

if(idade < 16){                 //condição "SE"
    console.log("Não vota");
}else if (idade < 18 && idade > 16){//condição "SE NÂO SE"
    console.log("Voto opcinal");
}else{                              //condição "SENÂO"
    console.log("Voto obrigatório");
}