const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


// router.route("/")
//     .get( wrapAsync(listingController.index))
//     .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));


// //new rout
// router.get("/new",isLoggedIn, listingController.renderNewForm );


// router.route("/:id")
//     .get( wrapAsync(listingController.showListing))
//     .put(isLoggedIn,isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
//     .delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));


// //Edit rout
// router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing));

// module.exports = router;

router.get("/", jobs.index);
router.get("/new", isLoggedIn, jobs.renderNewForm);
router.post("/", isLoggedIn, jobs.createJob);

router.get("/:id", jobs.showJob);
router.put("/:id", isLoggedIn, jobs.updateJob);
router.delete("/:id", isLoggedIn, jobs.deleteJob);
module.exports = router;