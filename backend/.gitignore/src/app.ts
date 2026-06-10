import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Campus Event Organizer API");
});

/* EVENTS */

app.get("/events", (req: Request, res: Response) => {
    res.send("Get all events");
});

app.post("/events", (req: Request, res: Response) => {
    res.send("Create new event");
});

app.put("/events/:id", (req: Request, res: Response) => {
    res.send(`Update event ${req.params.id}`);
});

app.delete("/events/:id", (req: Request, res: Response) => {
    res.send(`Delete event ${req.params.id}`);
});

/* USERS */

app.get("/users", (req: Request, res: Response) => {
    res.send("Get all users");
});

app.post("/users", (req: Request, res: Response) => {
    res.send("Create user");
});

/* REGISTRATIONS */

app.get("/registrations", (req: Request, res: Response) => {
    res.send("Get registrations");
});

app.post("/registrations", (req: Request, res: Response) => {
    res.send("Register student");
});

/* JUICE REPORT */

app.get("/juicereport/:id_juice", (req: Request, res: Response) => {
    res.send(`Generate report ${req.params.id_juice}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});