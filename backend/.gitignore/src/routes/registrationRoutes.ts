import { Router } from "express";

const router = Router();

/* GET all registrations */
router.get("/", (req, res) => {
    res.json({ message: "Get all registrations", data: [] });
});

/* GET one registration */
router.get("/:id", (req, res) => {
    res.json({ message: `Get registration ${req.params.id}` });
});

/* CREATE registration */
router.post("/", (req, res) => {
    res.json({ message: "User registered for event" });
});

/* DELETE registration */
router.delete("/:id", (req, res) => {
    res.json({ message: `Registration ${req.params.id} deleted` });
});

export default router;