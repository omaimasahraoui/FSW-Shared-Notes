(function () {
this.userrender = function () {
            var html = "";
            html += '<img src="' + this.avatar + '" class="img_avatar_owner" />';
            html += '<p>' + this.name + '</p>';
            html += '<p>' + this.id + '</p>';
            html += '<div id="owner">'
            html += '</div>'
            html += '<span class="glyphicon glyphicon-envelope" aria-hidden="true">' + this.email + '</span><br/>';
            html += '</div>'
            return html;
            }
    })(jQuery);