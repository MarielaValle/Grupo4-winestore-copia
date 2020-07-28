module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito';
 
    let cols = {
 
 
       id: {
 
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: dataTypes.INTEGER
 
       },
       
 
       id_usuario: {
          type: dataTypes.INTEGER,
 
 
       },
       id_producto: {
          type: dataTypes.INTEGER
 
       },
       fecha: {
          type: dataTypes.DATE
       },
       cantidad: {
          type: dataTypes.INTEGER
 
       },
       precio_venta: {
 
          type: dataTypes.INTEGER
       },
       numero_ticket: {
          type: dataTypes.INTEGER
       }
 
 
    }
    let config = {
       tableName: "carritos",
       timestamps: false
    }
    const Carrito = sequelize.define(alias, cols, config);
 
    Carrito.associate = (models) => {
       Carrito.belongsTo(models.Producto, { foreingKey: 'id_producto', as: 'Producto' });
       Carrito.belongsTo(models.Usuario, { foreingKey: 'id_usuario', as: 'Usuario' });
    }
 
    return Carrito;
 
 }