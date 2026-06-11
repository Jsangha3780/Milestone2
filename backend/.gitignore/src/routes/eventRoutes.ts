import { Router } from "express";

const router = Router();

/* GET all events */
router.get("/", (req, res) => {
    res.json({ message: "Get all events", data: [] });
});

/* GET one event */
router.get("/:id", (req, res) => {
    res.json({ message: `Get event ${req.params.id}` });
});

/* CREATE event */
router.post("/", (req, res) => {
    res.json({ message: "Event created" });
});

/* UPDATE event */
router.put("/:id", (req, res) => {
    res.json({ message: `Event ${req.params.id} updated` });
});

/* DELETE event */
router.delete("/:id", (req, res) => {
    res.json({ message: `Event ${req.params.id} deleted` });
});

/* UPDATE interest */
router.put("/:id/interested", (req, res) => {
    res.json({ message: `Interest updated for event ${req.params.id}` });
});

export default router;