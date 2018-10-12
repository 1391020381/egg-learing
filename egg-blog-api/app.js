'use strict';
module.exports = app => {
    if (app.config.env === 'localhost') {
        app.beforeStart(async () => {
            await app.model.sync({
                force: false
            })
        })
    }
}