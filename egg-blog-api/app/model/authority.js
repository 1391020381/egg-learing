'use strict';
module.exports = app => {
    const { INTERGER, STRING, DATE } = app.Sequelize;
    const Authority = app.model.define('authority', {
        id: {
            type: INTERGER,
            primaryKey: true,
            autoIncrement: true
        }
    })
}
