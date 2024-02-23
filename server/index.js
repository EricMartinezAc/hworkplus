import { StartApp } from "./app.js";
import { typeDefs } from "./gql/typeDefs.js";
import { resolvers } from "./gql/resolvers.js";

StartApp(typeDefs, resolvers);
