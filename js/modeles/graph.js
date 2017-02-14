exports=exports || {}

var graphModel=function(){
        this.owner=new exports.userModel('7','Hammam Ben TALEB','hammam@gmail.com','','./assets/res_partner_address_25-image.png');
        this.posts=[
            {
                title:"Node js in Application",
                couverture_url:"",
                corps:"Reprehenderit qui in mollit cupidatat enim in commodo eu anim amet esse nisi. Lorem ea eiusmod laborum nostrud dolor reprehenderit cillum. Exercitation do consectetur anim ipsum nulla duis sunt voluptate pariatur reprehenderit. Anim sunt cillum proident eu elit ea aliquip amet deserunt.",
                author:"Souhail Taman"
            },
            {
                title:"Angular2 from novice to ninja",
                couverture_url:"",
                corps:"Ex est elit Lorem ad sit id excepteur velit aliquip tempor ullamco nulla. Incididunt anim ullamco sit veniam. Eiusmod incididunt veniam sint id anim voluptate duis ea do ipsum adipisicing pariatur cupidatat quis. Ex deserunt cupidatat et irure incididunt mollit ipsum deserunt aute ea. Ea excepteur pariatur aliquip ullamco elit Lorem anim aliquip.",
                author:"Leila OUASLATI"
            },
            {
                title:"Express Bst Practice",
                couverture_url:"",
                corps:"Ullamco quis nisi cupidatat adipisicing minim aliqua laborum irure velit ad veniam reprehenderit. Qui velit ea laborum ad dolore voluptate ex ullamco fugiat ad consectetur. Sit enim cillum fugiat laboris et sint Lorem sunt. Consectetur reprehenderit cupidatat laborum incididunt aliqua qui minim proident culpa proident irure minim laborum Lorem.",
                author:"Alaa HELALI"
            }
        ]
        
}

exports.graphModel=graphModel;