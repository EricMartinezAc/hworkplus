const validateData = (process, data) => {
  try {
    if (process === "createPerson")
      return typeof data !== "object" ||
        data.length <= 1 ||
        data.name.length <= 1 ||
        data.tIdent.length <= 1 ||
        data.nIdent.length <= 1 ||
        data.country.length <= 1 ||
        data.email.length <= 1
        ? false
        : true;
    if (process === "editPerson")
      return data.length <= 1 || data._id.length <= 1 || data.tIdent.length <= 1
        ? false
        : true;
    if (process === "deletePerson")
      return data.length <= 1 || data._id.length <= 1 ? false : true;

    if (process === "createProduct")
      return data.length <= 1 || data.cliente.length <= 1 ? false : true;
    if (process === "editProduct")
      return typeof data !== "object" ||
        data.length <= 1 ||
        data._id.length <= 1 ||
        data.cliente.length <= 1 ||
        data.psw.length <= 1
        ? false
        : true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default validateData;
