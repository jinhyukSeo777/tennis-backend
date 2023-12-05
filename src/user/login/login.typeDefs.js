const typeDefs = `
  type LoginResult {
    ok: Boolean!
    error: String
    token: String
  }
  type Mutation {
    login(username:String!, password:String!): LoginResult!
  }
`;

export default typeDefs;
