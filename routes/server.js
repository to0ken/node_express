import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import apiRoutes from "./routes/api.js"
import pageRoutes from "./routes/pages.js"

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)

const app = express()
const port = 3000;


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api",apiRoutes)
app.use("/",pageRoutes)


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})
