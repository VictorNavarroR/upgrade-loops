//Iteration#1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

products.forEach( item => {
    if(item.includes('Camiseta')) {
        console.log(item)
    }
});


//Iteration#2
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.map( alumn => {
  
  if(alumn.T1 ? (alumn.T2 ? alumn.T2 : alumn.T3) : (alumn.T2 ? alumn.T3 : alumn.T2)) {
    alumn.isApproved = true;
  } else {
    alumn.isApproved = false;
  }

});

console.log(alumns);
//Iteration#3
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for(place of placesToTravel) {
    console.log(place);
}