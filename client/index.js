(function () {
    exports.userController();
    exports.graphController();
})(jQuery);

function addUser() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://localhost:3000/api/users/",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "79bae92f-d1a5-ddba-948b-a6dbab5e1dd9"
        },
        "data": {
            "name": username,
            "email": email,
            "mdp": password,
            "avatar": "./assets/res_partner_address_5-image.png"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}