import PersonSchema from "../Models/PersonSchema.js";
import ProductSchema from "../Models/ProductSchema.js";
import ProjectSchema from "../Models/ProjectSchema.js";
import TaskSchema from "../Models/TaskSchema.js";
import UserSchema from "../Models/UserSchema.js";

export const resolvers = {
  Query: {
    persons: async () => await PersonSchema.find(),
    products: async () => await ProductSchema.find(),
    projects: async () => await ProjectSchema.find(),
    tasks: async () => await TaskSchema.find(),
    users: async () => await UserSchema.find(),
  },
  Mutation: {
    createPerson: async (
      _,
      {
        name,
        lastname,
        birthString,
        tIdent,
        nIdent,
        country,
        city,
        location,
        nTel,
        nCell,
        email,
      }
    ) => {
      const res = new PersonSchema({
        name,
        lastname,
        birthString,
        tIdent,
        nIdent,
        country,
        city,
        location,
        nTel,
        nCell,
        email,
      }).save();
      console.log(`almacenado persona ${res}`);
      return res;
    },
    createProduct: async (_, { cliente, email, psw }) => {
      const res = new ProductSchema({ cliente, email, psw }).save();
      console.log(`almacenado persona ${res}`);
      return res;
    },
    createProject: async (_, { tittle, body, status, Priority }) => {
      const res = new ProjectSchema({ tittle, body, status, Priority }).save();
      console.log(`almacenado persona ${res}`);
      return res;
    },
    createTask: async (_, { tittle, projecID, userID }) => {
      const res = new TaskSchema({ tittle, projecID, userID }).save();
      console.log(`almacenado persona ${res}`);
      return res;
    },
    createUser: async (_, { user, psw }) => {
      const res = new UserSchema({ user, psw }).save();
      console.log(`almacenado persona ${res}`);
      return res;
    },
  },
};
