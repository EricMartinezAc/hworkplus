import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    persons: [Person]
    products: [Product]
    projects: [Project]
    tasks: [Task]
    users: [User]
  }
  type Mutation {
    createPerson(
      name: String
      lastname: String
      birthString: String
      tIdent: String
      nIdent: Int
      country: String
      city: String
      location: String
      nTel: Int
      nCell: Int
      email: String
    ): Person
    createProduct(cliente: String, email: String, psw: String): Product
    createProject(
      tittle: String
      body: String
      status: String
      Priority: Int
    ): Project
    createTask(tittle: String, projecID: String, userID: String): Task
    createUser(product: String, user: String, psw: String): User
  }
  type Person {
    _id: ID
    name: String
    lastname: String
    birthString: String
    tIdent: String
    nIdent: Int
    country: String
    city: String
    location: String
    nTel: Int
    nCell: Int
    email: String
    createdAt: String
    updatedAt: String
  }
  type Product {
    _id: ID
    cliente: String
    email: String
    psw: String
    createdAt: String
    updatedAt: String
  }
  type Project {
    _id: ID
    tittle: String
    body: String
    status: String
    Priority: Int
    createdAt: String
    updatedAt: String
  }
  type Task {
    _id: ID
    tittle: String
    projecID: String
    userID: String
    createdAt: String
    updatedAt: String
  }
  type User {
    _id: ID
    user: String
    psw: String
    createdAt: String
    updatedAt: String
  }
`;
