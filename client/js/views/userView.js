exports={};


var userRender = function (user) {
        var html = "";
        html += '<img src="' + user.avatar + '" class="img_avatar_owner" />';
        html += '<span class="btn btn-primary">' + user.name +'  <span class="badge inverse">' + user._id + '</span><br></span><br>';
        html += '<div id="owner">'
        html += '</div>'
        html += '<span class="glyphicon glyphicon-envelope">' + user.email + '</span><br/>';
        html += '</div>'
        return html;
}

var friendRender = function (user) {
        var html = '<div class="row">';
        html += '<div id="friend">'
        html += '<img src="' + user.avatar + '" class="img_avatar_freinds" />';
        html += '</div>'
        html += '<div id="badge">'
        html += '<span class="text-info">' + user.name + '  </span>';
        html += '<span class="text-primary text-puull-right badge">' + user._id + '  </span></br>';
        html += '<span class="glyphicon glyphicon-envelope" style="padding:3px;"></span>' + user.email + '<br/>';
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