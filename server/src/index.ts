import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fetchCompanyData from "../lib/fetchCompanyData";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/:nip", (req: Request, res: Response) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:5173");
  fetchCompanyData(Number(req.params.nip)).then((data) => res.send(data));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
