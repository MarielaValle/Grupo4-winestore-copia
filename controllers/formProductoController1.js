const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//const formatPrice = (price,discount) => toThousand(Math.round(price*(1-(discount/100))));

let formProductoController={

    raiz: (req, res) => {
		
		res.render("formProducto");
    }
    
    
}

module.exports=formProductoController;

/*formAlta:(req, res) => {
  let data = {
    Formulario: 'nuevoProducto',
  };
  res.render('formProducto', { data: data });*/