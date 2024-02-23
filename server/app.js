import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import { conn } from "./Settings/conn.js";
import "dotenv/config";

export async function StartApp(typeDefs, resolvers) {
  const app = express();
  const PORT = 5170;
  const HttpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));
  app.use("/", (req, res) => {
    //validate id product
    if (req.query.conn) {
      conn(req.query.conn);
      res.send("hl");
    } else {
      res.sendStatus(404);
    }
  });

  // 65d729d737824c5a482808ff
  await new Promise((resolve) => {
    HttpServer.listen({
      port: PORT,
    });
    console.log(`server on port ${PORT}`);
  });
}
