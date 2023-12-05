const typeDefs = `
  type Mutation {
    createComment(feedId: Int!, text: String!): MutationResult
  }
`;

export default typeDefs;
