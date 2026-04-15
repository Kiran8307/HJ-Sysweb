import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query GetSinglePost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      excerpt
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }

         author {
        node {
          name
          slug
          description     
          avatar {
            url           
          }
        }
      }
    }
  }
`;
