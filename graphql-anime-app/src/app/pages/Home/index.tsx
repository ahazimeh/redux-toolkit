import { useEffect } from "react";
import { Dispatch } from "redux";
import { useAppDispatch } from "../../hooks";
import animeService from "../../services/animeService";
import { setAnimeList } from "./homeSlice";

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimeList: (page: any /*FetchAnimeList["Page"]*/) =>
    dispatch(setAnimeList(page)),
});

const Home = () => {
  const { setAnimeList } = actionDispatch(useAppDispatch());
  useEffect(() => {
    fetchAnime();
  }, []);

  const fetchAnime = async () => {
    const animeList = await animeService.fetchAnimeList(0).catch((err) => {
      console.log(err);
    });
    // console.log("anime List", animeList);
    if (animeList) {
      setAnimeList(animeList);
    }
  };
  return (
    <>
      <h3>Anime App</h3>
    </>
  );
};

export default Home;
