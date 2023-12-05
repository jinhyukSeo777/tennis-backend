import { ApolloServer } from "apollo-server-express";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./schema";
import express from "express";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { createServer } from "http";
import { getUser } from "./user/users.utils";

const start = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async (ctx) => {
      return {
        loggedInUser: await getUser(ctx.req.headers.token),
      };
    },
  });

  await server.start();

  const app = express();

  app.use("/static", express.static("uploads"));

  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  const httpServer = createServer(app);

  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 Server is running ✅`);
  });
};

start();
