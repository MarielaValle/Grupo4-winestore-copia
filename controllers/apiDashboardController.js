var db = require('../database/models/index.js');
const { Sequelize } = require('../database/models/index.js');



let apiDashboardController = {

    raiz: (req, res) => {


        res.render("dashboard");
    },


    colorTinto: (req, res) => {

        db.Producto.findAll({

            where: {
                color: 'tinto'
            }

        })

            .then(productos => {

                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/colorTinto'
                      
                    },
                    data:productos.length
                };
                res.json(respuesta)

               /* console.log(productos.length)
                cantidadTinto = productos.length
                //res.render("dashboard", { cantidadTinto });
                res.send({cantidadTinto})*/
            })

            .catch(error => console.log(error));


    },


    colorBlanco: (req, res) => {

        db.Producto.findAll({

            where: {
                color: 'blanco'
            }

        })

            .then(productos => {
                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/colorBlanco'

                    },
                    data:productos.length
                };
                res.json(respuesta)
               /* console.log(productos.length)
                cantidadBlanco = productos.length
                res.render("dashboard", { cantidadBlanco });
                res.send({cantidadBlanco})
                */
            })

            .catch(error => console.log(error));


    },


    categoriaPremium: (req, res) => {

        db.Producto.findAll({

            where: {
                categoria: 'premium'
            }

        })
                .then(productos => {
                    let respuesta={
                        meta:{
                          status:200,
                          url:'localhost:3000/dashboard/categoriaPremium'
    
                        },
                        data:productos.length
                    };
                    res.json(respuesta)
               /* console.log(productos.length)
                cantidadPremium = productos.length
                res.render("dashboard", { cantidadPremium });
                 res.send({cantidadPremium})
                */
            })

            .catch(error => console.log(error));


    },


    categoriaClasico: (req, res) => {

        db.Producto.findAll({

            where: {
                categoria: 'clasico'
            }

        })

            .then(productos => {
                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/categoriaClasico'

                    },
                    data:productos.length
                };
                res.json(respuesta)
               /* console.log(productos.length)
                cantidadClasico = productos.length
                res.render("dashboard", { cantidadClasico });
                res.send({cantidadClasico})
                */
            })

            .catch(error => console.log(error));


    },


    variedad: (req, res) => {

        /*db.Producto.findAll()
    
            .then(productos => {
     
    
                console.log(productos)
                res.render("dashboard", { productos});
            })
            
            .catch(error => console.log(error));
    
    
    },*/
        db.sequelize.query('SELECT DISTINCT variedad FROM productos')

            .then(function (resultados) {

                variedad = resultados[0];
                
                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/variedad',
                      cantidadVariedades:variedad.length

                    },
                    data:variedad
                };
                res.json(respuesta)
                //res.render('dashboard',{variedad} )
                //res.send({variedad})
            })

            .catch(error => console.log(error));


    },


    sumatoriaPrecios: (req, res) => {

        db.Producto.sum('precio')
            .then(function (resultado) {

                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/sumatoriaPrecios',
                      

                    },
                    data:resultado
                };
                res.json(respuesta)





               // res.send(resultado)
            })
            .catch(error => console.log(error));

    },

    cantidadProductos: (req, res) => {

        db.Producto.count('id')

            .then(function (resultado) {

                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/cantidadProductos',
                      

                    },
                    data:resultado
                };
                res.json(respuesta)




               // console.log(resultado)
              // res.send(resultado)
            })
            .catch(error => console.log(error));

    },




    cantidadUsuarios: (req, res) => {

        db.Usuario.count('id')

            .then(function (resultado) {
                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/cantidadUsuarios',
                      

                    },
                    data:resultado
                };
                res.json(respuesta)

               
            })
            .catch(error => console.log(error));

    },
    precioMax: (req, res) => {

        db.Producto.max('precio')

            .then(function (resultado) {

                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/precioMaximo',
                      

                    },
                    data:resultado
                };
                res.json(respuesta)
               


            })
            .catch(error => console.log(error));

    },

    precioMin: (req, res) => {

        db.Producto.min('precio')

            .then(function (resultado) {

                let respuesta={
                    meta:{
                      status:200,
                      url:'localhost:3000/dashboard/precioMinimo',
                     

                    },
                    data:resultado
                };
                res.json(respuesta)

            })
            .catch(error => console.log(error));

    }



}

module.exports = apiDashboardController;    
