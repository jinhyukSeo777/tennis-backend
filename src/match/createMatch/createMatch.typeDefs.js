const typeDefs = `
  type Mutation {
    createMatch(
        title:     String!,
        date:      String!,
        startTime: String!,
        endTime:   String!,
        isSingle:  Boolean!,
        isInside:  Boolean!,
        summary:   String,
        storeName: String!,
        address:   String!,
        lat:       Float!,
        lng:       Float!
        userId:    Int!): MutationResult
  }
`;

export default typeDefs;
