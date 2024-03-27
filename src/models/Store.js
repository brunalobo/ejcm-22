const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Store = sequelize.define( 'Store',{

    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    inventory:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

Store.associate = function(models){
    Store.hasMany(models.Product);
}
module.exports = Store;