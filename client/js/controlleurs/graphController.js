exports = exports || {};

var graphController = function () {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://localhost:3000/api/graphs",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "7fc65136-fa15-f64a-8ed4-d12b380c9f47"
        }
    }

    $.ajax(settings).done(function (response) {
        graph = JSON.parse(response);
        console.log('graph:',graph);
        exports.renderGraph(graph.graphModel);
        
    });
}


exports.graphController = graphController;