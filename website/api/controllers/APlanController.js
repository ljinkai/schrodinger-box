/**
 * HomeController
 *
 */
var ejs = require('ejs');
var AV = require('avoscloud-sdk').AV;
var sails = require('sails');
var log = sails.log;



AV.initialize("e4wnmd3z7unk5wxu3jm3579abpvopi9bb2e7fgsmqfl3zsqk", "4fktyp6v43v3n1vgke5771tovv62xuxsatnux7weq4b9kqwz");
module.exports = {
    unsubscribe : function(req, res) {
        var id = req.param("id");
        res.render("unsubscribeLayout",{"id":id});
    },
    _unsubscribe : function(req, res) {
        var id = req.param("id");
        var webSite = AV.Object.extend("GithubUser");
        var query = new AV.Query(webSite);
        query.get(id, {
            success: function(gameScore) {
                // The object was retrieved successfully.
                gameScore.set("state", "1");
                gameScore.save();
                res.json({"_STATE_":"200","MSG":"取消订阅成功!"});
            },
            error: function(object, error) {
                var result = {"_STATE_":"400","MSG":"ERROR"};
                res.json(result);
            }
        });
    },
    redirect : function(req,res) {
        res.render("channel",{});
    }
};

