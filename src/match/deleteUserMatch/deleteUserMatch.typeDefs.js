const typeDefs = `
  type Mutation {
    deleteUserMatch(matchId: Int!, userId: Int!): MutationResult!
  }
`;

export default typeDefs;
