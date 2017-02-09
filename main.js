(function () {
    users = [];
    var user = function (id, name, email, mdp, avatar) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mdp = mdp;
        this.avatar = avatar;
        //this function render the owner of the graph 
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

        // this function render the friend
        this.friendRender = function () {
            var html = '<div class="row">';
            html += '<div id="friend">'
            html += '<img src="' + this.avatar + '" class="img_avatar_freinds" />';
            html += '</div>'
            html += '<div id="badge">'
            html += '<span>' + this.name + '</span>';
            html += '<span>' + this.id + '</span>';
            html += '<p>' + this.email + '</p><br/>';
            html += '</div>'
            html += '</div>'
            return html;
        }


    }


    var salah = new user(2, 'salah', 'salah@gmail.com', "", './assets/img2.jpg');
    var ali = new user(1, 'Zin El Abidin Ben ali', 'ali@gmail.com', "", './assets/img1.jpg');
    var hela = new user(3, 'Hela', 'hela@gmail.com', "", 'https://lh3.googleusercontent.com/SRfUCB-afJp1wIhwWsBr5S7mIbkR2_619JJcU3pVVXpuSd7vPuq-jcKWHD1g3XJC5jhtASG8HAMX=w1708-h961-rw-no');

    users.push(ali);
    users.push(salah);
    users.push(hela);


    var vnotes = [];
    var vnote = function (id, titre, description, author) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.author = author;
        this.vnoterender = function () {
            var html = "";
            html += '<h1>' + this.id + '</h1>';
            html += '<p>' + this.titre + '</p>';
            html += '<p>' + this.description + '</p>';
            html += '<img src="' + this.author + '"/>';

        }

    }
    var vnote1 = new vnote(1, 'javascript', 'un language de scripty léger ', '');
    vnotes.push(vnote1);


    var graphs = [];
    var graph = function (id, owner) {
        this.id = id;
        this.owner = owner;

        this.graphrender = function () {
            var html = "";
            html += '<h1>' + this.id + '</h1>';
            html += '<p>' + this.owner + '</p>';


        }
    }

    var graph1 = new graph(1, 'mohamed');
    graphs.push(graph1);

    var commentaires = [];
    var commentaire = function (idligne, user) {
        this.idligne = idligne;
        this.user = user;

        this.commentairerender = function () {
            var html = "";
            html += '<h1>' + this.idligne + '</h1>';
            html += '<p>' + this.user + '</p>';


        }

    }
    var commentaire1 = new commentaire(1, 'mohamed');
    commentaires.push(commentaire1);

    friends = [];
    friends.push(ali);
    friends.push(salah);
    friends.push(hela);

    $("#theuser").html(ali.userrender());

    $("#friendPanel").html(function () {
        var html = '';
        for (var i = 0; i < friends.length; i++) {
            html += friends[i].friendRender();
        }
        return html;
    });



})(jQuery);