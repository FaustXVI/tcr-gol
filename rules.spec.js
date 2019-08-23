describe('Dead Cell', () => {
  it.each([[0], [1], [2], [4], [5], [6], [7], [8]])('stays dead with %i living Neighbors', (numberOfLivingNeighbors) => {
    expect(willBeAlive(numberOfLivingNeighbors, false)).toEqual(false);
  });

    it('becomes alive', () => {
        expect(willBeAlive(3, false)).toEqual(true);
    });
});

describe('Alive Cell', () => {

    it.each([[2], [3]])('stays alive with %i living Neighbors', (numberOfLivingNeighbors) => {
        expect(willBeAlive(numberOfLivingNeighbors, true)).toEqual(true);
    });

    it.each([[0], [1]])('dies because of under-population with %i living Neighbors', (numberOfLivingNeighbors) => {
        expect(willBeAlive(numberOfLivingNeighbors, true)).toEqual(false);
    });

    it.each([[4], [5], [6], [7], [8]])('dies because of over-population with %i living Neighbors', (numberOfLivingNeighbors) => {
        expect(willBeAlive(numberOfLivingNeighbors, true)).toEqual(false);
    });
});

const willBeAlive = (aliveNeighborCount, isAlive) => (isAlive && aliveNeighborCount === 2) || aliveNeighborCount === 3;

