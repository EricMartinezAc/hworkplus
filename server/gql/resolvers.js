import PersonSchema from "../Models/PersonSchema.js";
import ProductSchema from "../Models/ProductSchema.js";
import ProjectSchema from "../Models/ProjectSchema.js";
import TaskSchema from "../Models/TaskSchema.js";
import UserSchema from "../Models/UserSchema.js";
import validateData from "../Settings/validateData.js";

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
        const respValidateData = await validateData("createPerson", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (1.1)`);
        const FindPreSavePerson = await PersonSchema.find({ tIdent, nIdent });
        if (FindPreSavePerson.length !== 0)
          throw new Error(
            `it ${FindPreSavePerson[0].name} has not been found (1.2)`
          );
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
        }).save(); //almacena persona ingresada
        console.log(`person ${name} was stored (1.3)`);
        return res; //devuelve la persona
      } catch (error) {
        console.error("1.0 ", error);
        return error;
      }
    },
    editPerson: async (_, args) => {
      try {
        const respValidateData = await validateData("editPerson", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (2.1)`);
        const res = await PersonSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        }); //busca y actualiza todo
        if (res === null) throw new Error(`Person ${args._id} no found (2.2)`); //no encontrado
        console.log(`Person ${res} was updated (2.3)`);
        return res;
      } catch (error) {
        console.error("2.0 ", error);
        return error;
      }
    },
    deletePerson: async (_, args) => {
      try {
        const respValidateData = await validateData("deletePerson", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (3.1)`);
        const res = await PersonSchema.findByIdAndDelete(args._id);
        if (res === null)
          throw new Error(`it has not been possible to delete ${_id} (3.2)`);
        console.log(`Person ${res} was deleted (3.3)`);
        return res;
      } catch (error) {
        console.error("3.0", error);
        return error;
      }
    },
    createProduct: async (_, args) => {
      try {
        const respValidateData = await validateData("createProduct", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (1.5)`);
        const findPreSaveProduct = await ProductSchema.find(args.cliente);
        if (findPreSaveProduct.length !== 0)
          throw new Error(
            `${cliente} already has a product. Contact us. (1.6)`
          );
        const res = new ProductSchema(args).save();
        console.log(`product is successfully created: ${res} (1.7)`);
        return res;
      } catch (error) {
        console.error("1.4 ", error);
        return error;
      }
    },
    editProduct: async (_, args) => {
      try {
        const respValidateData = await validateData("editProduct", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (2.5)`);
        const res = await ProductSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (Person === null)
          throw new Error(`Product ${args._id} was not found (2.6)`);
        console.log(`Product is update: ${res} (2.7)`);
        return res;
      } catch (error) {
        console.error("2.4 ", error);
        return error;
      }
    },
    deleteProduct: async (_, args) => {
      try {
        const respValidateData = await validateData("deleteProduct", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (3.5)`);
        const res = await ProductSchema.findByIdAndDelete(args._id);
        if (res === null)
          throw new Error(`it has not been to delete ${args._id} (3.6)`);
        console.log(`Product ${res} is deleted (3.7)`);
        return res;
      } catch (error) {
        console.error("3.4 ", error);
        return error;
      }
    },
    createProject: async (_, args) => {
      try {
        const respValidateData = await validateData("createProject", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (1.9)`);
        const findStatusUser = await UserSchema.find({ id_user: args.id_user });
        if (!findStatusUser[0].status)
          throw new Error(
            `state of user ${id_user} is ${findStatusUser[0].status} (1.10)`
          );
        const FindPreSaveProject = await ProjectSchema.find({
          id_user: args.id_user,
          tittle: args.tittle,
        });
        if (FindPreSaveProject.length !== 0)
          throw new Error(
            `project ${args.tittle} was found in ${findStatusUser[0].user} (1.11)`
          );

        const res = await ProjectSchema(args).save();
        console.log(`project ${args.tittle} has been created (1.12)`);
        return res;
      } catch (error) {
        console.error("1.8 ", error);
        return error;
      }
    },
    editProject: async (_, args) => {
      try {
        const respValidateData = await validateData("editProject", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (2.9)`);
        const findStatusUser = await UserSchema.find({ id_user: args.id_user });
        if (!findStatusUser[0].status)
          throw new Error(
            `state of user ${id_user} is ${findStatusUser[0].status} (2.10)`
          );
        const res = await ProjectSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (res === null)
          throw new Error(
            `Project ${args.tittle} has not been to found for ${args.id_user} (2.11)`
          );
        console.log(
          `Project ${args.tittle} is update for ${args.id_user} (2.12)`
        );
        return res;
      } catch (error) {
        console.error("2.8 ", error);
        return error;
      }
    },
    deleteProject: async (_, args) => {
      try {
        const respValidateData = await validateData("deleteProject", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (3.9)`);
        const findStatusUser = await UserSchema.find({ id_user: args.id_user });
        if (!findStatusUser[0].status)
          throw new Error(
            `state of user ${args.id_user} is ${findStatusUser[0].status} (3.10)`
          );
        const res = await ProjectSchema.findByIdAndDelete(args._id);
        if (res === null)
          throw new Error(`it has not was been to delete ${args._id} (3.11)`);
        console.log(`Project ${res} has been deleted (3.12)`);
        await TaskSchema.deleteMany({ id_project: args._id });
        return res;
      } catch (error) {
        console.error("3.8 ", error);
        return error;
      }
    },
    createTask: async (_, args) => {
      try {
        //should to valide data to coming
        const respValidateData = await validateData("createTask", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (1.14)`);
        //find project responsive and valide yourself state
        const respFindProject = await ProductSchema.findById(args.id_project);
        //status 5 is a unique acepted
        if (respFindProject[0].status <= 4)
          throw new Error(`status project is ${respFindProject[0]} (1.15)`);
        //find user using id project found
        const respFindUser = await UserSchema.findById(
          respFindProject[0].id_user
        );
        //status 1 or greater 1 are accepted
        if (!respFindUser[0].status < 1)
          throw new Error(`status project is ${respFindUser[0]} (1.16)`);
        //find task for title on projects
        const findPreSaveTaskTittle = await TaskSchema.find({
          tittle,
          id_project,
        });
        //only 1 task should to exist with tittle on project
        if (findPreSaveTaskTittle[0] !== 0)
          throw new Error(`Task ${tittle} in ${id_} not found (1.17)`);
        //proccedure to save
        const res = new TaskSchema(args).save();
        console.log(
          `Task ${res} was created successfully in ${findPreSaveTaskProject[0].tittle} (1.18)`
        );
        return res;
      } catch (error) {
        console.error("1.13 ", error);
        return error;
      }
    },
    editTask: async (_, args) => {
      try {
        //valide data
        const respValidateData = await validateData("editTask", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (2.14)`);
        //valide project state
        const respFindProject = await ProjectSchema.findById(args.id_project);
        if (respFindProject[0].status <= 4)
          throw new Error(`status project is ${respFindProject[0]} (2.15)`);
        //find user using id project found
        const respFindUser = await UserSchema.findById(
          respFindProject[0].id_user
        );
        //status 1 or greater 1 are accepted
        if (!respFindUser[0].status < 1)
          throw new Error(`status project is ${respFindUser[0]} (2.16)`);
        const res = await TaskSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (res === null)
          throw new Error(`it has been not to edit, resp: ${res} (2.17)`);
        console.log(`Task is update: ${res} (2.18)`);
        return res;
      } catch (error) {
        console.error("2.13", error);
        return error;
      }
    },
    deleteTask: async (_, args) => {
      try {
        //valide data
        const respValidateData = await validateData("deleteTask", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (3.14)`);
        //find project with id, then find user to valide status with id user on project found
        const respFindProject = await ProjectSchema.findById(args.id_project);
        if (respFindProject[0] === 0)
          throw new Error(`project no found ${respFindProject} (3.15)`);
        const respFindUser = await UserSchema.findById(
          respFindProject[0].id_user
        );
        if (respFindUser[0].status < 1)
          throw new Error(`User no permited ${respFindUser} (3.16)`);
        const res = await TaskSchema.findByIdAndDelete(args._id);
        if (res === null)
          throw new Error(
            `it has been not possible to delete from ${args._id} (3.17)`
          );
        console.log(`Task is deleted: ${res} (3.18)`);
        return res;
      } catch (error) {
        console.error("3.13 ", error);
        return error;
      }
    },
    createUser: async (_, args) => {
      try {
        //valide data
        const respValidateData = await validateData("createUser", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (1.20)`);
        const respFindUser = await UserSchema.find({ user: args.user });
        if (respFindUser[0] === 0)
          throw new Error(
            `it has been not should to create ${respFindUser} (1.21)`
          );
        const res = new UserSchema(agrs).save();
        console.log(`user is successfully created: ${res} (1.22)`);
        return res;
      } catch (error) {
        console.error("1.19 ", error);
        return error;
      }
    },
    editUser: async (_, args) => {
      try {
        //valide data
        const respValidateData = await validateData("editUser", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (2.20)`);
        const res = await UserSchema.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (res === null)
          throw new Error(`it has been not to edit ${res} (2.21)`);
        console.log(`User is update: ${res} (2.22)`);
        return res;
      } catch (error) {
        console.error(`2.19 ${error}`);
        return error;
      }
    },
    deleteUser: async (_, args) => {
      try {
        //valide data
        const respValidateData = await ("deleteUser", args);
        if (!respValidateData)
          throw new Error(`incoming data doen't to meet requirements (3.20)`);
        const respFindUser = await UserSchema.findById(args.id_user);
        if (respFindUser[0] === 0)
          throw new Error(`User not found ${respFindUser} (3.21)`);
        const respFindProject = await ProjectSchema.findById(
          respFindUser[0]._id
        );
        const respFindTask = await TaskSchema.find({
          id_project: respFindProject[0]._id,
        });
        const a = await TaskSchema.findByIdAndDelete(respFindTask[0]._id);
        const b = await ProjectSchema.findByIdAndDelete(respFindProject[0]._id);
        const resp = await UserSchema.findById(args._id);
        if (resp === 0)
          throw new Error(`it has been not to delete ${res} (3.22)`);
        return resp + a + b;
      } catch (error) {
        console.error("3.19 ", error);
        return error;
      }
    },
  },
};
