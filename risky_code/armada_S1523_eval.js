// Renders a saved dashboard.
//
// Added on a branch so the pull request has a finding of its own.

const express = require("express");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  const expression = req.query.filter;

  // The filter comes from the query string and is evaluated as code.
  const filter = eval("(" + expression + ")");

  let rows = [];
  try {
    rows = loadRows().filter(filter);
  } catch (e) {}

  res.json(rows);
});

function loadRows() {
  return [];
}

module.exports = router;
