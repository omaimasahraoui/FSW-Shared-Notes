
exports = exports || {};


var userController = function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/users/allUsers",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "55fa1d70-146b-ba57-c1dd-ad27366cc503"
        }
    }

    $.ajax(settings).done(function (response) {
        users = JSON.parse(response);
        friends = JSON.parse(response);
        exports.renderAll(users[0],friends);
    });
}

exports.userController = userController;

