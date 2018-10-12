'use strict';
module.exports = app => {
    const { INTERGER, STRING, DATE } = app.Sequelize;
    const User = app.model.define('user', {
        id: {
            type: INTERGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: STRING,
        },
        password: {
            type: STRING,
        },
        created_at: DATE,
        update_at: DATE
    });

    User.associate = function () {  // 子级保存父级的Id
        app.model.User.hasMany(app.model.Blog, {
            as: 'blogs',
        });
        app.model.User.hasMany(app.model.Catalog, {
            as: 'catalogs'
        });
        app.model.User.hasMany(app.model.Comment, {
            as: 'comments',
        });
        app.model.User.belognsTo(app.model.Authority);
    };
    return User;
}



/**
 * Project.hasOne(User,{as:'Initiator'})
 * 现在你可以获得 Project.getInitiator 和 Project.setInitiator
 */