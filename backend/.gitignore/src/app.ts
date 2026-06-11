import express from "express";

import eventRoutes from "./routes/eventRoutes";
import userRoutes from "./routes/userRoutes";
import registrationRoutes from "./routes/registrationRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

/* BASE ROUTE */
app.get("/", (req, res) => {
    res.json({ message: "Campus Event Organizer API is running" });
});

/* ROUTES */
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);
app.use("/api/registrations", registrationRoutes);

/* 404 HANDLER */
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
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