const typeDefs = `
  type UserMatch {
    id:    Int!
    userId:  Int!
    matchId: Int!
  }
  type Match {
    id:        Int!
    title:     String!
    date:      String!
    startTime: String!
    endTime:   String!
    isSingle:  Boolean!
    isInside:  Boolean!
    summary:   String
    storeName: String!
    address:   String!
    lat:       Float!
    lng:       Float!
    users:     [UserMatch]
  }
`;

export default typeDefs;
