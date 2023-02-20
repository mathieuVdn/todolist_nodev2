const {DataTypes, Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'todolist',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',

    logging: false
}
)
sequelize.authenticate()
    .then(_ => console.log('La connexion à la base de données a réussi'))
    .catch(error => console.error('Erreur de connexion à la base de données:', error));

sequelize.sync()
    .then(_ => console.log('La synchronisation a réussi'))
    .catch(error => console.error('Erreur de synchronisation:', error));

module.exports = sequelize;
