import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Campus Event Organizer API is running");
});

/* EVENT ROUTES */
app.get("/events", (req: Request, res: Response) => {
    res.send("List of events");
});

app.post("/events", (req: Request, res: Response) => {
    res.send("Event created");
});

app.put("/events/:id", (req: Request, res: Response) => {
    res.send(`Event ${req.params.id} updated`);
});

app.delete("/events/:id", (req: Request, res: Response) => {
    res.send(`Event ${req.params.id} deleted`);
});

/* USER ROUTES */
app.get("/users", (req: Request, res: Response) => {
    res.send("Users list");
});

app.post("/users", (req: Request, res: Response) => {
    res.send("User created");
});

/* REGISTRATION ROUTES */
app.get("/registrations", (req: Request, res: Response) => {
    res.send("Registrations list");
});

app.post("/registrations", (req: Request, res: Response) => {
    res.send("User registered for event");
});

/* JUICE REPORT */
app.get("/juicereport/:id_juice", (req: Request, res: Response) => {
    res.send(`Report generated for ID ${req.params.id_juice}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// As the Backend Planner, my responsibilities include:
// Designing REST API routes for the system
// Planning backend architecture using Express and TypeScript
// Ensuring proper separation of concerns (routes, controllers, models)
// Documenting API endpoints clearly
// Defining how backend connects with MongoDB database