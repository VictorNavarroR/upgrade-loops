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

for(let place of placesToTravel) {
    console.log(place);
}

//Iteration#4
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let attr in alien) {
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

  //Iteration#6
  const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
    
    for(let toy of toys ) {
        let index = toys.indexOf(toy);
        if(toy.name.includes('gato')) {
          toys.splice(index, 2);
        }
    }
    
    console.log(toys);

    //Iteration#7
const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]


for(let toy of toys) {
  if(toy.sellCount > 15) {
    popularToys.push(toy);
  }
}

console.log(popularToys)