import express from "express";
import cors from "cors";
import routes from "./routes";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

async function createAdmin() {
  await auth.api.createUser({
    body: {
      name: "Mintu Sikder",
      email: "mintusikder15@gmail.com",
      password: "password1234",
      role: "admin",
    },
  });
}
// createAdmin();
app.use("/api/v1", routes);

export default app;
