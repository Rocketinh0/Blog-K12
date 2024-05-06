import express from "express";
import next from "next";
import fetch from "isomorphic-unfetch";
import Post from "../Post";
import apiHandler from "../api/posts";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/posts/:id", (req, res) => apiHandler(req, res));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});