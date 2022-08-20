import { gql } from "@apollo/client";

export const FETCH_ANIME_LIST = gql`
  query FetchAnimeList($page: Int!, $perPage: Int!) {
    page(page: $page, perPage: $perPage) {
      media {
        id
        description
        title {
          english
        }
        converImage {
          extraLarge
        }
      }
    }
  }
`;
