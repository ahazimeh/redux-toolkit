import { useEffect } from "react";
import animeService from "../../services/animeService";

const Home = () => {
  useEffect(() => {
    fetchAnime();
  }, []);
  const fetchAnime = async () => {
    const animeList = await animeService.fetchAnimeList(0).catch((err) => {
      console.log(err);
    });
    console.log("anime List", animeList);
  };
  return (
    <>
      <h3>Anime App</h3>
    </>
  );
};

export default Home;
