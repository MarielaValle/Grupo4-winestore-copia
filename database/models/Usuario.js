module.exports = (sequelize, dataTypes) =>{
    let alias ='Usuario';
  
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
  
             apellido:{
              
              type:dataTypes.STRING(100)
              },
  
            
             email:{
             
                type:dataTypes.STRING(100)
             },
          
           

            contrasenia: {
              type:dataTypes.STRING(300)
          },
  
           categoria: {
              type:dataTypes.STRING(200)
  
            },
             
           
           imagen: {
              type:dataTypes.STRING(100)
  
            },
      
    }
      let config= {
          tableName: "usuarios",
          timestamps: false
      }
      const Usuario = sequelize.define(alias,cols,config);
          
     
  
      return Usuario;
  
  }