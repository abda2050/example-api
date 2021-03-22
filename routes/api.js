const db = require("../db/index");
const Router = require("express-promise-router");
const router = new Router();

module.exports = router;

router.get("/", async (req, res) => {
  const { rows } = await db.query("SELECT name FROM users");
  res.json(rows);
});
