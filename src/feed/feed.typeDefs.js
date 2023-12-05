const typeDefs = `
  type Feed {
    id:         Int! 
    title:      String!
    text:       String!
    avatar:     String
    comments: [Comment]
    commentNum: Int!   
    see:        Int!
    user:       User! 
    createdAt:  String!
  }
`;

export default typeDefs;
