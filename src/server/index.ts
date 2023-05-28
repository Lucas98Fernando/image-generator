import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.VITE_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/images", async (req: Request, res: Response) => {
  try {
    const response = await openai.createImage(req.body);
    res.send(response.data.data);
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log("App is running!"));
