//Iteration#1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

products.forEach( item => {
    if(item.includes('Camiseta')) {
        console.log(item)
    }
});