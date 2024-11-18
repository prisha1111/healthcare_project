const express = require("express");
const router = express.Router();
const { jwtAuthMiddleware } = require("../middleware/jwtMiddleware");

const {
    getDetails,
    postDetails,
    putDetails,
    deleteDetails,
} = require("../controllers/newsletterController");

router.get("/", getDetails);

router.post("/", postDetails);

router.put("/:id", putDetails);

router.delete("/:id", deleteDetails);

module.exports = router;