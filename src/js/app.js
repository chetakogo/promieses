import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (resolve) => resolve,
  (error) => { throw new Error(error); },
);
