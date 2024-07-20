const express = require("express");
const router = express.Router();

router.get("/uid", (req, res) => {
  const nfcCardReader = req.app.get("nfcCardReader");

  nfcCardReader.once("card-detected", (encryptedUID) => {
    res.json({ uid: encryptedUID });
  });
});

module.exports = router;
