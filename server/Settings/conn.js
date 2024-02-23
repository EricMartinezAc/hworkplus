import mongoose from "mongoose";

export const conn = async (db) => {
  try {
    const connmongodb = await mongoose.connect(
      `${process.env.MONGO_URI}/${db}?${process.env.MONGO_URI_PARAM}`
    );
    console.log(`Conectado a base de datos ${connmongodb.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
