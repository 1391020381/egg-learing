'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTERGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        type: INTERGER,
        primarykey: true,
        autoIncrement: true
      },
      username: {
        type: STRING,
      },
      password: {
        type: STRING
      },
      created_at: DATE,
      updated_at: DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('users');
  }
};
