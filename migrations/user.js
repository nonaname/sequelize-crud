module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'user',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				type: Sequelize.STRING,
				username: Sequelize.STRING,
				password: Sequelize.STRING,
				referenceID: Sequelize.INTEGER,
				isOnline: Sequelize.BOOLEAN,
				createdAt: Sequelize.DATE,
				updatedAt: Sequelize.DATE
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('user');
	}
}
