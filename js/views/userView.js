exports=exports || {};


var userRender = function (user) {
        var html = "";
        html += '<img src="' + user.avatar + '" class="img_avatar_owner" />';
        html += '<p>' + user.name + '</p>';
        html += '<p>' + user.id + '</p>';
        html += '<div id="owner">'
        html += '</div>'
        html += '<span class="glyphicon glyphicon-envelope" aria-hidden="true">' + user.email + '</span><br/>';
        html += '</div>'
        return html;
}

var friendRender = function (user) {
        var html = '<div class="row">';
        html += '<div id="friend">'
        html += '<img src="' + user.avatar + '" class="img_avatar_freinds" />';
        html += '</div>'
        html += '<div id="badge">'
        html += '<span>' + user.name + '</span>';
        html += '<span>' + user.id + '</span>';
        html += '<p>' + user.email + '</p><br/>';
        html += '</div>'
        html += '</div>'
        return html;    
}



var renderAll=function(owner,friends){
   
   $("#theuser").html(userRender(owner));
   $("#friendPanel").html(function () {
        var html = '';
        for (var i = 0; i < friends.length; i++) {
            html += friendRender(friends[i]);
        }
        return html;
    });  
}

exports.renderAll=renderAll;