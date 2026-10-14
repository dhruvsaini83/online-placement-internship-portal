const Job = require("./models/job");
const ExpressError = require("./utils/ExpressError.js");
const { jobSchema } = require("./schema.js");


// ===============================
// LOGIN CHECK
// ===============================
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "Please login first!");
    return res.redirect("/login");
  }
  next();
};


// ===============================
// SAVE REDIRECT URL
// ===============================
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};


// ===============================
// COMPANY / OWNER CHECK
// ===============================
module.exports.isCompany = async (req, res, next) => {
  let { id } = req.params;

  const job = await Job.findById(id);

  if (!job.company.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have permission!");
    return res.redirect(`/jobs/${id}`);
  }

  next();
};


// ===============================
// JOB VALIDATION
// ===============================
module.exports.validateJob = (req, res, next) => {
  let { error } = jobSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
