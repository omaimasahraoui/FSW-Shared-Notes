
exports = exports || {};


var userController = function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/users/",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "55fa1d70-146b-ba57-c1dd-ad27366cc503"
        }
    }

    $.ajax(settings).done(function (response) {
       // console.log(response);
        users = response;
        friends = response;
        exports.renderAll(users[0],friends);
    });

    return this;
}

exports.userController = userController;

