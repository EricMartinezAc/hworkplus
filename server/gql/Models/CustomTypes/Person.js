export const Person_ = {
  model: `{
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
  }`,
  createPersons: `(
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
  ): Person`,
};
