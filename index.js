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

//Iteration#4
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(attr in alien) {
  console.log(`${attr}: ${alien[attr]}`)
}

//Iteration#5
const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
  ]
  
  for(let i = 0; i < placesToTravel.length; i++) {
    let item = placesToTravel[i];
     if(item.id === 40 || item.id === 11) {
          placesToTravel.splice(i, 1);
     }
  }
  
  console.log(placesToTravel)