import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    persons: [Person]
    person(_id: ID!): Person
    products: [Product]
    product(_id: ID!): Product
    projects: [Project]
    project(_id: ID!): Project
    tasks: [Task]
    task(_id: ID!): Task
    users: [User]
    user(_id: ID!): User
  }
  type Mutation {
    createPerson(
      name: String!
      lastname: String
      birthDate: String
      tIdent: String!
      nIdent: Int!
      country: String!
      city: String
      location: String
      nTel: Int
      nCell: Int
      email: String!
    ): Person
    editPerson(
      _id: ID!
      name: String
      lastname: String
      birthDate: String
      tIdent: String!
      nIdent: Int!
      country: String
      city: String
      location: String
      nTel: Int
      nCell: Int
      email: String
    ): Person
    deletePerson(_id: ID!): Person

    createProduct(
      cliente: String!
      email: String!
      psw: String!
      status: Int
    ): Product
    editProduct(
      _id: ID!
      cliente: String!
      email: String!
      psw: String!
      status: Int!
    ): Product
    deleteProduct(_id: ID!): Product

    createProject(
      id_user: ID!
      tittle: String!
      body: String!
      status: Int!
      Priority: Int!
    ): Project
    editProject(
      _id: ID!
      id_user: ID!
      tittle: String!
      body: String
      status: Int
      Priority: Int
    ): Project
    deleteProject(_id: ID!): Project

    createTask(
      tittle: String!
      id_user: ID!
      id_project: ID!
      body: String!
      status: Int!
      priority: Int!
    ): Task
    editTask(
      _id: ID!
      tittle: String
      id_user: ID!
      id_project: ID!
      body: String
      priority: Int
      status: Int
    ): Task
    deleteTask(_id: ID!): Task

    createUser(
      id_person: ID!
      id_product: ID!
      user: String!
      psw: String!
      status: Int!
    ): User
    editUser(
      _id: ID!
      id_person: ID!
      id_product: ID!
      user: String
      psw: String
      status: Int
    ): User
    deleteUser(_id: ID!): User
  }
  type Person {
    _id: ID
    name: String
    lastname: String
    birthDate: String
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
    status: Int
    createdAt: String
    updatedAt: String
  }
  type Project {
    _id: ID
    id_user: ID
    tittle: String
    body: String
    status: Int
    Priority: Int
    createdAt: String
    updatedAt: String
  }
  type Task {
    _id: ID
    tittle: String
    id_user: ID
    id_project: ID
    body: String
    status: Int
    priority: Int
    createdAt: String
    updatedAt: String
  }
  type User {
    _id: ID
    id_person: ID
    id_product: ID
    user: String
    psw: String
    status: Int
    createdAt: String
    updatedAt: String
  }
`;
