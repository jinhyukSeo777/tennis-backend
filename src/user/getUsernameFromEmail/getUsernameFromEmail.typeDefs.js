const typeDefs = `
  type SearchIDResult {
    ok: Boolean!
    error: String
    username: String
  }
  type Mutation {
    getUsernameFromEmail(email: String!): SearchIDResult
  }
`;

export default typeDefs;
