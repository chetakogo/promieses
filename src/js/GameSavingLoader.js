import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(json)
      .then(JSON.parse);
  }
}
