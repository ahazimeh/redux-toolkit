import { createSelector } from "reselect";

const selectHome = (state: any) => state.home;

export const makeSelectAnimeList = createSelector(
  selectHome,
  (home) => home.animeList
);
