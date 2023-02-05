import express from "express";
import postsRoutes from "./routes/post.routes.js";
import fileUpload from "express-fileupload";

//importaciones para crear ruta y despliegue proyectos juntos

import { dirname, join } from "path";
import { fileURLToPath } from "url";
const app = express();

//para exportar modulos ruta absoluta y poder desplegar proyecto
const __dirname = dirname(fileURLToPath(import.meta.url));
//middelawares

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
//routes
app.use(postsRoutes);
/* 
console.log(__dirname); */

app.use(express.static(join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../client/build/index.html"));
});

export default app;
