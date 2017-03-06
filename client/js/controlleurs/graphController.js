exports = exports || {};

exports.graph = exports.graph || {};

var graphController = function () {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://localhost:3000/api/graphs/58ba8d1a966d6f3574b5801b",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "7fc65136-fa15-f64a-8ed4-d12b380c9f47"
        }
    }

    $.ajax(settings).done(function (response) {
        ownerId = response.owner;

        (function () {
            var settings = {
                "async": false,
                "crossDomain": true,
                "url": "http://localhost:3000/api/users/58b08bf42feb8502c861376c",
                "method": "GET",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache",
                    "postman-token": "119ed5d1-1510-8fb0-32a9-da145cccf02a"
                }
            }

            $.ajax(settings).done(function (response) {
                exports.graph.owner = response;
                (function () {
                    var settings = {
                        "async": false,
                        "crossDomain": true,
                        "url": "http://localhost:3000/api/posts",
                        "method": "GET",
                        "headers": {
                            "cache-control": "no-cache",
                            "postman-token": "aa908edc-760d-1400-1b08-38f89ac45903"
                        }
                    }

                    $.ajax(settings).done(function (response) {
                        exports.graph.posts = response;
                    });
                })(jQuery);
            });

        })(jQuery);
        //console.log(exports.graph);
        exports.renderGraph(exports.graph);
        return this;

    });
}

exports.graphController = graphController;