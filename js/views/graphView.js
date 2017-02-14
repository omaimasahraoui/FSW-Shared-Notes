exports = exports || {};

var renderOwner = function (owner) {
    var html = '<div class="container">';
    html += '<img src="' + owner.avatar + '" class="img_avatar_owner" />';
    html += '<span class="btn btn-primary">' + owner.name +
        '  <span class="badge inverse">' +
        owner.id + '</span><br></span><br>';
    html += '<span class="glyphicon glyphicon-envelope">' + owner.email + '</span><br/>';
    html += '</div>'
    return html;
}

var renderPost = function (post) {
    var html = '<div class="row">';
   // html += '<img src="' + post.couverture_url + '" />';
    html += '<h3 class="text-success">' + post.title + '  </h3>';
    html += '<p class="text-justify">' + post.posts + '  </p></br>';
    html += '<span class="btn btn-success" style="padding:3px;"></span>' + post.author + '<br/>';
    html += '</div>';
    return html;

}

var renderGraph = function () {
    var myGraph = new exports.graphModel();
    $('#graphOwner').html(renderOwner(myGraph.owner));
    $('#main_graph').html(function () {
        var html = '';
        for (var i = 0; i < myGraph.posts.legth; i++) {
            html += renderPost(myGraph.posts[i]);
        }
        return html;
    });


    console.log(myGraph);
}


exports.renderGraph = renderGraph;