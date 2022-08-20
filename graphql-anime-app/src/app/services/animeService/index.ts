import { apolloClient } from "../../graphql";
import { FETCH_ANIME_LIST } from "./queries";

class AnimeService {
  async fetchAnimeList(page: Number, perPage = 12): Promise<any> {
    //Promise<FetchAnimeList["page"]>
    try {
      const response = await apolloClient.query({
        query: FETCH_ANIME_LIST,
        variables: { page, perPage },
      });
      if (!response || !response.data) {
        throw new Error("Something went wrong");
      }
      return response.data.Page;
    } catch (err) {
      throw err;
    }
  }
}

export default new AnimeService();
