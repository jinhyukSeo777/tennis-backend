const typeDefs = `
  type Mutation {
    createFeed(title: String!, text: String!, avatar: Upload): MutationResult
  }
`;

export default typeDefs;
