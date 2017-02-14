exports = exports || {};

var userController = function () {
    var user = exports.users[0];
    var friends = exports.friends;

    var html = exports.renderAll(user, friends);

}

exports.userController=userController;