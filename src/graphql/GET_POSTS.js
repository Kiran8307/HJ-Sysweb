import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($first: Int = 12, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            altText
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
