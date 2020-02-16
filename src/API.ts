/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTreeInput = {
  id?: string | null,
  species: string,
  location: LocationInput,
  height?: number | null,
};

export type LocationInput = {
  lat: number,
  lon: number,
};

export type ModelTreeConditionInput = {
  species?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  and?: Array< ModelTreeConditionInput | null > | null,
  or?: Array< ModelTreeConditionInput | null > | null,
  not?: ModelTreeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTreeInput = {
  id: string,
  species?: string | null,
  location?: LocationInput | null,
  height?: number | null,
};

export type DeleteTreeInput = {
  id?: string | null,
};

export type NearbyTreesInput = {
  location: LocationInput,
  km?: number | null,
  limit?: number | null,
};

export type ModelTreeFilterInput = {
  id?: ModelIDInput | null,
  species?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  and?: Array< ModelTreeFilterInput | null > | null,
  or?: Array< ModelTreeFilterInput | null > | null,
  not?: ModelTreeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateTreeMutationVariables = {
  input: CreateTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type CreateTreeMutation = {
  createTree:  {
    __typename: "Tree",
    id: string,
    species: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    height: number | null,
  } | null,
};

export type UpdateTreeMutationVariables = {
  input: UpdateTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type UpdateTreeMutation = {
  updateTree:  {
    __typename: "Tree",
    id: string,
    species: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    height: number | null,
  } | null,
};

export type DeleteTreeMutationVariables = {
  input: DeleteTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type DeleteTreeMutation = {
  deleteTree:  {
    __typename: "Tree",
    id: string,
    species: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    height: number | null,
  } | null,
};

export type NearbyTreesQueryVariables = {
  input: NearbyTreesInput,
};

export type NearbyTreesQuery = {
  nearbyTrees:  {
    __typename: "NearbyTreesConnection",
    items:  Array< {
      __typename: "NearbyTreeConnectionItem",
      tree:  {
        __typename: "Tree",
        id: string,
        species: string,
        height: number | null,
      },
      distance: number,
    } >,
  },
};

export type GetTreeQueryVariables = {
  id: string,
};

export type GetTreeQuery = {
  getTree:  {
    __typename: "Tree",
    id: string,
    species: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    height: number | null,
  } | null,
};

export type ListTreesQueryVariables = {
  filter?: ModelTreeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTreesQuery = {
  listTrees:  {
    __typename: "ModelTreeConnection",
    items:  Array< {
      __typename: "Tree",
      id: string,
      species: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      height: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTreeSubscription = {
  onCreateTree:  {
    __typename: "Tree",
    id: string,
    species: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    height: number | null,
  } | null,
};

export type OnUpdateTreeSubscription = {
  onUpdateTree:  {
    __typename: "Tree",
    id: string,
    species: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    height: number | null,
  } | null,
};

export type OnDeleteTreeSubscription = {
  onDeleteTree:  {
    __typename: "Tree",
    id: string,
    species: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    height: number | null,
  } | null,
};
