import express from "express";

const app = express();

import cors from "cors";

if (process.env.CLIENT_URL != null) {
  app.use(cors({ origin: [process.env.CLIENT_URL] }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* **************************** CONFIG UPLOAD FILE **************************** */
import multer from "multer";

// 📌 Définir le dossier de stockage des images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../public/images");

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nom unique pour éviter les doublons
  },
});

const upload = multer({ storage });

app.use(upload.single("picture"));

app.use(
  "/public/images",
  express.static(path.join(__dirname, "../public/images")),
);

/* ************************************************************************* */

// Import the API router
import router from "./router";

// Mount the API router under the "/api" endpoint
app.use(router);

/* ************************************************************************* */

// Production-ready setup: What is it for?

// The code includes sections to set up a production environment where the client and server are executed from the same processus.

// What it's for:
// - Serving client static files from the server, which is useful when building a single-page application with React.
// - Redirecting unhandled requests (e.g., all requests not matching a defined API route) to the client's index.html. This allows the client to handle client-side routing.

import fs from "node:fs";
import path from "node:path";

// Serve server resources

const publicFolderPath = path.join(__dirname, "../../server/public");

if (fs.existsSync(publicFolderPath)) {
  app.use(express.static(publicFolderPath));
}

// Serve client resources

const clientBuildPath = path.join(__dirname, "../../client/dist");

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  // Redirect unhandled requests to the client index file

  app.get("*", (_, res) => {
    res.sendFile("index.html", { root: clientBuildPath });
  });
}

/* ************************************************************************* */

// Middleware for Error Logging
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

import type { ErrorRequestHandler } from "express";

// Define a middleware function to log errors
const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  // Log the error to the console for debugging purposes
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);

/* ************************************************************************* */

export default app;
