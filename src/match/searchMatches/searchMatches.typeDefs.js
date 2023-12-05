const typeDefs = `
  type MatchPlusCreatorInfo {
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
    lat:       Int!
    lng:       Int!
    users:     [UserMatch]
    user: User!
  }
  type Query {
    searchMatches(id: Int, date: String, isSingle: Boolean, isInside: Boolean, storeName: String): [MatchPlusCreatorInfo]
  }
`;

export default typeDefs;
