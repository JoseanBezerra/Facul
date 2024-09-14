const numeros = [1,2,3,4,5,"6"];

try{
    const dobleNumbers = numeros.map((num) => {
        if(typeof num !== "number"){
            throw new Error("O array só pode ter números");
        }
        return num * 2;
    })

    console.log(dobleNumbers);
}catch(error){
    console.log("Ocorreu uma exeção: " + error.message);
}