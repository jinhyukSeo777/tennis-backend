const typeDefs = `
  type Mutation {
    kakaoLogin(username:String!, email:String, avatar: String!): LoginResult!
  }
`;

export default typeDefs;
