const Application = require("../models/application");

module.exports.applyJob = async (req, res) => {
    await Application.create({
        student: req.user._id,
        job: req.params.id
    });
    req.flash("success", "Applied Successfully");
    res.redirect("/my-applications");
};
