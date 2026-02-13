// Mapbox हटाया (placement portal में जरूरत नहीं)

// OLD
// const Listing = require("../models/listing");

// NEW
const Job = require("../models/job");



// ===============================
// JOB INDEX (All Jobs + Search)
// ===============================
module.exports.index = async (req, res) => {
    try {
        let search = '';

        if (req.query.search) {
            search = req.query.search;
        }

        // OLD: Listing.find(...)
        const allJobs = await Job.find({
            $or: [
                { title: { $regex: '.*' + search + '.*', $options: 'i' } },
                { location: { $regex: '.*' + search + '.*', $options: 'i' } },
                { skills: { $regex: '.*' + search + '.*', $options: 'i' } }
            ]
        });

        // OLD: listings/index.ejs
        res.render("jobs/index.ejs", { allJobs });

    } catch (err) {
        console.error(err);
    }
};
