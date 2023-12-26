const typeDefs = `
  type SearchPWResult {
    ok: Boolean!
    error: String
    password: String
  }
  type Mutation {
    createRandomPW(username: String!, email: String!): SearchPWResult
  }
`;

export default typeDefs;
