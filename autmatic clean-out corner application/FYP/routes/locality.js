const express = require("express");
const router = express.Router();
const Locality = require("../models/Locality");
const { forwardAuthenticated } = require("../config/auth");

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.get("/registerlocality", forwardAuthenticated, (req, res) =>
  res.render("registerlocality")
);

router.post("/registerlocality", (req, res) => {
  const { state, areaPin, latt, longg, assignedCode } = req.body;
  let errors = [];

  if (!state || !areaPin || !latt || !longg || !assignedCode) {
    errors.push({ msg: "Please enter all fields" });
}


  if (errors.length > 0) {
    res.render("register", {
      state,
      areaPin,
      latt,
      longg,
      assignedCode,
    });
  } else {
    const newLocality = new Locality({
      state,
      areaPin,
      latt,
      longg,
      assignedCode,
        });
            newLocality
              .save()
              .then((locale) => {
                req.flash(
                  "success_msg",
                  "You are now registered and can log in"
                );
                res.redirect("/dashboard");
              })
              .catch((err) => console.log(err));
      }
    }
);