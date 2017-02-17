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
var omar = new userModel(4, 'Omar SAHBANI', 'omar@gmail.com', '', './assets/res_partner_address_4-image.png');
var hammam = new userModel(7,'Hammam Ben TALEB','hammam@gmail.com','','./assets/res_partner_address_25-image.png');

users.push(ali);
users.push(salah);
users.push(hela);
users.push(omar);
users.push(hammam);

friends.push(ali);
friends.push(salah);
friends.push(hela);
friends.push(omar);
users.push(hammam);


module.exports = users;
module.exports = friends;


