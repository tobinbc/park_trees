// tslint:disable
// this is an auto generated file. This will be overwritten

export const nearbyTrees = /* GraphQL */ `
  query NearbyTrees($input: NearbyTreesInput!) {
    nearbyTrees(input: $input) {
      items {
        tree {
          id
          species
          height
        }
        distance
      }
    }
  }
`;
export const getTree = /* GraphQL */ `
  query GetTree($id: ID!) {
    getTree(id: $id) {
      id
      species
      location {
        lat
        lon
      }
      height
    }
  }
`;
export const listTrees = /* GraphQL */ `
  query ListTrees(
    $filter: ModelTreeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        species
        location {
          lat
          lon
        }
        height
      }
      nextToken
    }
  }
`;
