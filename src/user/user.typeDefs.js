const typeDefs = `
  type User {
    id: Int!
    email: String!
    username: String!
    password: String!
    socialLogin: Boolean!
    summary: String
    avatar: String
    totalWin: Int!
    totalLose: Int!
    score: Int!
    createdAt: String!
    Match: [UserMatch]
  }
  type MutationResult {
    ok: Boolean!
    error: String
  }
  type Query {
    hello: String!
  }
`;

export default typeDefs;
