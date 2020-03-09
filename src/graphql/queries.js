/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrograme = `query GetPrograme($id: ID!) {
  getPrograme(id: $id) {
    id
    proCode
    title
  }
}
`;
export const listProgrames = `query ListProgrames(
  $filter: ModelProgrameFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgrames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      proCode
      title
    }
    nextToken
  }
}
`;
export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    completed
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      completed
    }
    nextToken
  }
}
`;
