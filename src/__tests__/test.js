import GameSavingLoader from '../js/GameSavingLoader';

jest.setTimeout(10000);

test('method load', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  return GameSavingLoader.load().then((result) => expect(result).toEqual(expected));
});
