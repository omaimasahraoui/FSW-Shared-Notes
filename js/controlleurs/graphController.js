exports = exports || {};

var graphController = function () {
    var graph = new exports.graphModel();
    var html = exports.renderGraph(graph);

}

exports.graphController=graphController;