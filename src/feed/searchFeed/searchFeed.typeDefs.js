const typeDefs = `
  type Mutation {
    searchFeed(keyword: String): [Feed]
  }
`;

export default typeDefs;
