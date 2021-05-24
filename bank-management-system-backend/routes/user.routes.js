const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.put("/api/test/edit", [authJwt.verifyToken], controller.editUser);

    app.post("/api/test/loan/education", [authJwt.verifyToken], controller.educationLoan);

    app.post("/api/test/loan/personal", [authJwt.verifyToken], controller.otherLoan);

};