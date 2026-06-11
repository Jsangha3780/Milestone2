import { Router } from "express";

const router = Router();

/* GET all users */
router.get("/", (req, res) => {
    res.json({ message: "Get all users", data: [] });
});

/* GET one user */
router.get("/:id", (req, res) => {
    res.json({ message: `Get user ${req.params.id}` });
});

/* CREATE user */
router.post("/", (req, res) => {
    res.json({ message: "User created" });
});

/* UPDATE user */
router.put("/:id", (req, res) => {
    res.json({ message: `User ${req.params.id} updated` });
});

/* DELETE user */
router.delete("/:id", (req, res) => {
    res.json({ message: `User ${req.params.id} deleted` });
});

export default router;