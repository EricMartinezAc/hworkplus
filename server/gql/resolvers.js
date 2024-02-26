import PersonSchema from "../Models/PersonSchema.js";
import ProductSchema from "../Models/ProductSchema.js";
import ProjectSchema from "../Models/ProjectSchema.js";
import TaskSchema from "../Models/TaskSchema.js";
import UserSchema from "../Models/UserSchema.js";

export const resolvers = {
  Query: {
    persons: async () => await PersonSchema.find(),
    person: async (_id) => await PersonSchema.findById(_id),
    projects: async () => await ProjectSchema.find(),
    project: async (_id) => await ProjectSchema.findById(_id),
    products: async () => await ProductSchema.find(),
    product: async (_id) => await ProductSchema.findById(_id),
    tasks: async () => await TaskSchema.find(),
    task: async (_id) => await TaskSchema.findById(_id),
    users: async () => await UserSchema.find(),
    user: async (_id) => await UserSchema.findById(_id),
  },
  Mutation: {
    createPerson: async (
      _,
      {
        name,
        lastname,
        birthDate,
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
      try {
        const FindPreSavePerson = await PersonSchema.find({ tIdent, nIdent });
        if (FindPreSavePerson.length !== 0)
          throw new Error(`it ${FindPreSavePerson[0].name} has not been found (1.1)`);
        const res = new PersonSchema({
          name,
          lastname,
          birthDate,
          tIdent,
          nIdent,
          country,
          city,
          location,
          nTel,
          nCell,
          email,
        }).save();
        console.log(`person ${name} was stored (1.0)`);
        return res;
      } catch (error) {
        console.error("1.2 ", error);
        return error;
      }
    },
    editPerson: async (_, args) => {
      try {
        const res = await PersonSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (res === null) throw new Error(`Person ${args._id} no found (2.1)`);
        console.log(`Person ${res} was updated (2.0)`);
        return res;
      } catch (error) {
        console.error("2.2 ", error);
        return error;
      }
    },
    deletePerson: async (_, { _id }) => {
      try {
        const res = await PersonSchema.findByIdAndDelete(_id);
        if (res === null)
          throw new Error(`it has not been possible to delete ${_id} (3.1)`);
        console.log(`Person ${res} was deleted (3.0)`);
        return res;
      } catch (error) {
        console.error("3.2", error);
        return error;
      }
    },
    createProduct: async (_, { cliente, email, psw }) => {
      try {
        const findPreSaveProduct = await ProductSchema.find({ cliente, psw });
        if (findPreSaveProduct.length !== 0)
          throw new Error(
            `${cliente} already has a product. Contact us. (1.4)`
          );
        const res = new ProductSchema({ cliente, email, psw }).save();
        console.log(`product is successfully created: ${res} (1.5)`);
        return res;
      } catch (error) {
        console.error("1.6 ", error);
        return error;
      }
    },
    editProduct: async (_, args) => {
      try {
        const res = await ProductSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (Person === null)
          throw new Error(`Product ${args._id} was not found (2.4)`);
        console.log(`Product is update: ${res} (2.5)`);
        return res;
      } catch (error) {
        console.error("2.6 ", error);
        return error;
      }
    },
    deleteProduct: async (_, { _id }) => {
      try {
        const res = await ProductSchema.findByIdAndDelete(_id);
        if (res === null)
          throw new Error(`it has not been to delete ${_id} (3.4)`);
        console.log(`Product ${res} is deleted (3.5)`);
        return res;
      } catch (error) {
        console.error("3.6 ", error);
        return error;
      }
    },
    createProject: async (_, { id_user, tittle, body, status, Priority }) => {
      try {
        const findStatusUser = await UserSchema.find({ id_user });
        if (!findStatusUser[0].status)
          throw new Error(`state of user ${id_user} ${findStatusUser} (1.7)`);
        const FindPreSaveProject = await ProjectSchema.find({
          id_user,
          tittle,
        });
        if (FindPreSaveProject.length !== 0)
          throw new Error(`project ${tittle} was found (1.8)`);
        const res = await ProjectSchema({
          id_user,
          tittle,
          body,
          status,
          Priority,
        }).save();
        console.log(`project ${tittle} has been created (1.9)`);
        return res;
      } catch (error) {
        console.error("1.10 ", error);
        return error;
      }
    },
    editProject: async (_, args) => {
      try {
        const res = await ProjectSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (res === null)
          throw new Error(
            `Project ${args.tittle} has not been to found for ${args.id_user} (2.7)`
          );
        console.log(
          `Project ${args.tittle} is update for ${args.id_user} (2.8)`
        );
        return res;
      } catch (error) {
        console.error("2.9 ", error);
        return error;
      }
    },
    deleteProject: async (_, { _id }) => {
      try {
        const res = await ProjectSchema.findByIdAndDelete(_id);
        if (res === null)
          throw new Error(`it has not was been to delete ${_id} (3.7)`);
        console.log(`Project ${res} has been deleted (3.8)`);
        await TaskSchema.deleteMany({ id_project: _id });
        return res;
      } catch (error) {
        console.error("3.9 ", error);
        return error;
      }
    },
    createTask: async (_, { tittle, id_project, body, status, priority }) => {
      try {
        const findPreSaveTaskProject = await ProductSchema.findById(id_project);
        const findPreSaveTaskTittle = await TaskSchema.find({
          tittle,
          id_project,
        });
        if (findPreSaveTaskTittle !== 0 || findPreSaveTaskProject !== 0)
          throw new Error(`Task ${tittle} in ${id_} not found (1.10)`);
        const res = new TaskSchema({
          tittle,
          id_project,
          body,
          status,
          priority,
        }).save();
        console.log(
          `Task ${res} was created successfully in ${findPreSaveTaskProject[0].tittle} (1.11)`
        );
        return res;
      } catch (error) {
        console.error("1.12 ", error);
        return error;
      }
    },
    editTask: async (_, args) => {
      const res = await TaskSchema.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (res === null) throw new Error(`Project no found`);
      console.log(`Task is update: ${res}`);
      return res;
    },
    deleteTask: async (_, { _id }) => {
      const res = await TaskSchema.findByIdAndDelete(_id);
      if (res === null) throw new Error(`it'snt possible delete from ${_id}`);
      console.log(`Task is deleted: ${res}`);
      return res;
    },
    createUser: async (_, { id_person, id_product, user, psw }) => {
      const res = new UserSchema({ id_person, id_product, user, psw }).save();
      console.log(`user is successfully created: ${res}`);
      return res;
    },
    editUser: async (_, args) => {
      const res = await UserSchema.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (res === null) throw new Error(`USer no found`);
      console.log(`USer is update: ${res}`);
      return res;
    },
    deleteUser: async (_, { _id }) => {
      const res = await UserSchema.findByIdAndDelete(_id);
      if (res === null) throw new Error(`it'snt possible delete from ${_id}`);
      console.log(`User is deleted: ${res}`);
      return res;
    },
  },
};
