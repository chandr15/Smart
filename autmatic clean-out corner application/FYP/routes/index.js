const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.render("home"));
router.get("/register", forwardAuthenticated, (req, res) =>
  res.render("register")
);

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.get("/dashboard", ensureAuthenticated, (req, res) =>
  
      res.render("dashboard", {

        title: "Dashboard",

        user: req.user,
      })
);

router.get("/dboard", ensureAuthenticated, (req, res) =>
  
      res.render("dboard", {

        title: "Pending Requests",

        user: req.user,
      })
);

router.get("/addbin", ensureAuthenticated, (req, res) =>
  res.render("registerbin", {
    user: req.user,
    title: "Add New Bin",
  })
);
router.get("/registerUser", ensureAuthenticated, (req, res) =>
  res.render("register", {
    user: req.user,
    title: "Register User",
  })
);

// router.get("/ReceivedAssign", ensureAuthenticated, (req, res) =>
//   res.render("ReceivedAssign", {
//     user: req.user,
//     title: "Receivec Assignments",
//   })
// );
router.get("/present", ensureAuthenticated, (req, res) =>
  res.render("presentBins", {
    user: req.user,
    title: "Present Bins",
  })
);
// router.get("/syllaybus", ensureAuthenticated, (req, res) =>
//   res.render("syllaybus", {
//     user: req.user,
//     title: "Syllaybus",
//   })
// );
router.get("/timetable", ensureAuthenticated, (req, res) =>
  res.render("timetable", {
    user: req.user,
    title: "Timetable",
  })
);
router.get("/feedbacks", ensureAuthenticated, (req, res) =>
  res.render("feedbacks", {
    user: req.user,
    title: "Learning Contentss",
  })
);
router.get("/details", ensureAuthenticated, (req, res) =>
  res.render("details", {
    user: req.user,
    title: "Personal Details",
  })
);

module.exports = router;
