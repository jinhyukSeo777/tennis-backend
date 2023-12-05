const typeDefs = `
  type Query {
    seeProfiles(id: [Int]!): [User]
  }
`;

export default typeDefs;
