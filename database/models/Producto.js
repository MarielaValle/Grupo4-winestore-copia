module.exports = (sequelize, dataTypes) =>{
    let alias ='Producto';
  
    let cols={
  
   
          id:{
  
              primaryKey:true,
              autoIncrement:true,
              allowNull:false,
              type:dataTypes.INTEGER
  
              },
           nombre:{
              type:dataTypes.STRING(100)
  
            },
  
            color:{
              type:dataTypes.STRING(45)
  
             },
  
             categoria:{
              
              type:dataTypes.STRING(45)
              },
  
            variedad:{
              type:dataTypes.STRING(45)
  
              },
             precio:{
              type: dataTypes.DOUBLE
  
             },
          descuento: {
  
              type:dataTypes.INTEGER
  
          },
           cantidad: {
              type:dataTypes.INTEGER
            },

            descripcionCorta: {
              type:dataTypes.STRING(300)
          },
  
           crianza: {
              type:dataTypes.STRING(200)
  
            },
             descripcionLarga: {
  
              type:dataTypes.STRING(500)
            },
           
            caracteristica: {
              type:dataTypes.STRING(45)
  
             },
           imagen: {
              type:dataTypes.STRING(100)
  
            },
      
    }
      let config= {
          tableName: "productos",
          timestamps: false
      }
      const Producto = sequelize.define(alias,cols,config);
      Producto.associate = (models) => {
        Producto.hasMany(models.Carrito, { as: 'Producto' });
           
        }    
     
  
      return Producto;
  
  }