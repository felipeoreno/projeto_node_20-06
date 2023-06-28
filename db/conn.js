const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('tarefas', 'root', 'sucesso', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conectamos ao banco de dados');
} catch (error) {
    console.log('Não foi possível conectar ao banco de dados ', error);
}

module.exports = sequelize; // exporta os dados do banco quando há conexão autenticada