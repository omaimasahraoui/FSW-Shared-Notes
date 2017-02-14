exports = exports || {};

var userController = function () {
    var user = exports.users[0];
    console.log(typeof user, user)
    var friends = exports.friends;

    var html = exports.renderAll(user, friends);
    console.log(html)

}

exports.userController=userController;