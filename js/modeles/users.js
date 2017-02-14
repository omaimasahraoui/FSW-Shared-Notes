exports = {};

    var userModel = function (id, name, email, mdp, avatar) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mdp = mdp;
        this.avatar = avatar;
    }

    var users = [];
    var friends = [];

    var salah = new userModel(2, 'salah', 'salah@gmail.com', "", './assets/img2.jpg');
    var ali = new userModel(1, 'Zin El Abidin Ben ali', 'ali@gmail.com', "", './assets/img1.jpg');
    var hela = new userModel(3, 'Hela', 'hela@gmail.com', "", './assets/img3.jpg');

    users.push(ali);
    users.push(salah);
    users.push(hela);
    friends.push(ali);
    friends.push(salah);
    friends.push(hela);

exports.userModel=userModel;
exports.users=users;
exports.friends=friends;




