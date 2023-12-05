const typeDefs = `
  type Comment {
    id:         Int!
    text:       String!
    user:       User!
    feed:       Feed!
    createdAt:  String!
  }
`;

export default typeDefs;
