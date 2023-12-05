const typeDefs = `
  scalar Upload
  type Mutation {
    editProfile(username:String, password:String, email:String, summary:String, avatar:Upload): MutationResult!
  }
`;

export default typeDefs;
