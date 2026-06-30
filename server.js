import express from "express";
import cors from "cors";
import 'dotenv/config'
import githubRoutes from "./routes/githubRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>res.send("API is Working"));
app.use("/api", githubRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});