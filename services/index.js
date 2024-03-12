import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Heroes {
      heroesConnection {
        edges {
          node {
            header
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.heroesConnection.edges;
};
