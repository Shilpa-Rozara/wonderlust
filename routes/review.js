const express = require("express");
const router = express.Router({mergeParams: true});

const wrapAsync = require('../public/utils/wrapAsync');
const {isLoggedIn, validateReview, isreviewAuthor} = require("../middleware");

const reviewController = require("../controllers/reviews");

//Post Reviews Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Reviews Route
router.delete("/:reviewId", isLoggedIn, isreviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;