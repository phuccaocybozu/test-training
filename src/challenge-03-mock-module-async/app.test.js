import { getBestPlayer } from "./app";
import { getAllPlayers } from "./service";

jest.mock('./service');

describe("getBestPlayer (async)", () => {
  it("should return the best player", () => {
    // TODO: implement test

    const expected = [
      { name: "John", score: 10 },
      { name: "Jane", score: 20 },
      { name: "Joe", score: 30 },
    ]

    getAllPlayers.mockResolvedValue(expected);

    //Way 1

    // getBestPlayer().then(player=>{
    //   expect(player).toEqual({ name: "Joe", score: 30 })
    // })
    
    //Way 2
    expect(getBestPlayer()).resolves.toEqual({ name: "Joe", score: 30 });
  });
});
