router.post("/jobs/:id/apply", isLoggedIn, applications.applyJob);
router.get("/my-applications", isLoggedIn, applications.myApplications);
