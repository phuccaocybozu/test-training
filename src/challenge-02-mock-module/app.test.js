import { getBestPlayer } from "./app";
import { getAllPlayers } from "./service";

jest.mock('./service');
describe('getBestPlayer', () => {
  it('should return the best player', () => {
    // TODO: implement test
    getAllPlayers.mockReturnValue([
      { name: 'John', score: 10 },
      { name: 'Jane', score: 21 },
      { name: 'Bob', score: 5 },
    ]);
    const expectedBestPlayer = { name: 'Jane', score: 21 };
    const actualBestPlayer = getBestPlayer();
    expect(actualBestPlayer).toEqual(expectedBestPlayer);
  });
});
