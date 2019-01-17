const appConfig = require('../../Config/appConfig');
const userController = require('./../controllers/userController');
const authMiddleware = require('./../middlewares/authMiddleware');



let baseUrl = `${appConfig.apiVersion}/users`;
module.exports.setRouter = (app) => {
    //routes for registration
    app.post(`${baseUrl}/signUp`, userController.signUp);
    app.post(`${baseUrl}/login`, userController.login);
    app.post(`${baseUrl}/forgotPassword`,userController.forgotPassword);
    //resetPassword
    app.get(`${baseUrl}/resetPassword/:email/:token`,userController.resetPassword);  
    //enternew pass
    app.post(`${baseUrl}/newPass`,userController.newPassword);

    app.post(`${baseUrl}/logout`,authMiddleware.isAuthorized, userController.logout);

    //routes for goelocation
    app.post(`${baseUrl}/present`,authMiddleware.isAuthorized, userController.present);
}

