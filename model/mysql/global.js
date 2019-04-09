'use strict'

const Sequelize=require('model/mysql/sequelize');
const sequelize=require('./sequelize');

let global=sequelize.define('global',{
    version:{
        type:Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true
})

module.exports = global;
