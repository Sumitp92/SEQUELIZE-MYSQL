const Sequelize = require('sequelize') ; 

const sequelize = require('../util/database'); 

const Product = sequelize.define('products' , {
  id: {
    type : Sequelize.INTEGER,
    autoIncreatment : true , 
    allowNull : false ,
    primaryKey : true 
  },
  title:{
     type : Sequelize.STRING,
 } ,
  price: {
    type : Sequelize.DOUBLE , 
    allowNull : false 
  },
  imageurl :{
    type: Sequelize.STRING,
    allowNull : false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product ; 