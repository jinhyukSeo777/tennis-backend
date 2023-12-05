const typeDefs = `
  type Mutation {
    addUserMatch(matchId: Int!, userId: Int!): MutationResult!
  }
`;

export default typeDefs;
