const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {},
});

module.exports = new GraphQLSchema({ query: RootQuery });
