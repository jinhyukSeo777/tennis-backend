const typeDefs = `
  scalar Upload
  type Mutation {
    createAccount(username:String!, password:String!, email:String!, summary:String): LoginResult!
  }
`;

export default typeDefs;
