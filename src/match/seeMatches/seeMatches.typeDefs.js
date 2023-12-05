const typeDefs = `
  type Query {
    seeMatches(id: [Int]!): [Match]
  }
`;

export default typeDefs;
