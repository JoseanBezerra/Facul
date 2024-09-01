var carro = [
    {modelo: 'Audi A3', marca:'Audi', ano:'2018'},
    {modelo: 'Compass', marca:'Jeep', ano:'2020'},
    {modelo: 'C3', marca:'Citroen', ano:'2023'}
            ];

for (let caracteristica in carro){
    console.log(carro[caracteristica].marca);
};

for (let c of carro){
    console.log(c.ano);
};


var c = 1;
while(c<= 10){
    console.log(c);
    c++;
}

var t =5;

do{
    console.log(t);
    t++;
}while( t < 3);