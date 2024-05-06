const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

import fetch from "isomorphic-unfetch";
import Post from "./Post";

const handler = async (req, res) => {
  const { id } = req.query;
  const response = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post = await response.json();

  res.status(200).json({ post });
};

export default handler;