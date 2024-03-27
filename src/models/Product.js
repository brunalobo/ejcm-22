const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Product = sequelize.define('Product',{

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        
    },
    typeof: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photograph: {
        type: DataTypes.TEXT,
        allowNull: false

    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false
    }
    
});

Product.associate = function(models){
    Product.belongsTo(models.Store);
}

module.exports = Product;