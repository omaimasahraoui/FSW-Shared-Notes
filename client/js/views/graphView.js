exports = exports || {};

var renderOwner = function (owner) {
    var html = '<div class="row">';
    html += '<img src="' + owner.avatar + '" class="img img-thumbnail" />';
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
    html += '<div class="panel panel-primary">';
    html +='<div class="panel-heading">';
    html += '<h3>' + post.title + '  </h3>';
    html += '</div>'; // Div Title of Panel
    html +='<div class="panel-body">';
    html += '<p class="text-justify">' + post.corps + '  </p></br>';
    html += '</div>'  // Div Body of Panel
    html +='<div class="panel-footer">';
    html += '<span class="btn btn-success" style="padding:3px;"></span>' + post.author + '<br/>';
    html += '</div>'; // div Footer of Panel
    html += '</div>'; // div Panel
    html += '</div>'; // div Row
    return html;
}


var renderAllPosts=function(posts){
    var html = '';
        for (var i = 0; i < posts.length; i++) {
            html += renderPost(posts[i]);
        }
    return html;
}

var renderGraph = function (myGraph) {
    $('#graphOwner').html(renderOwner(myGraph.owner));
    $('#main_graph').html(renderAllPosts(myGraph.posts));
}


exports.renderGraph = renderGraph;