import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.send("Campus Event Organizer API");
});

// Get all events
app.get("/events", (req: Request, res: Response) => {
    res.send("Get all events");
});

// Create event
app.post("/events", (req: Request, res: Response) => {
    res.send("Create new event");
});

// Update event
app.put("/events/:id", (req: Request, res: Response) => {
    res.send(`Update event ${req.params.id}`);
});

// Delete event
app.delete("/events/:id", (req: Request, res: Response) => {
    res.send(`Delete event ${req.params.id}`);
});

// Juice Report Route
app.get("/juicereport/:id_juice", (req: Request, res: Response) => {
    res.send(`Generate juice report ${req.params.id_juice}`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});