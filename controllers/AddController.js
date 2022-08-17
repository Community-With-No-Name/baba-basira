const res = require("express/lib/response")

class AddController {
    static getUsers(req, res){
        var users = ["Musa", "Alberto", "Aaron", "Matthew", "Eniola", "Dorcas", "Toheeb"]
        res.render('index', {title: "CWNN", users})
    }
    static getAbout(req, res) {
        res.render('about', {title: "About CWNN"})
    }
}

module.exports = AddController
