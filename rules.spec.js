describe('Dead Cell', () => {
  it('stays dead if there are no alive neighbours', () => {
    expect(willBeAlive(0, false)).toEqual(false);
  });

  it('becomes alive', () => {
    expect(willBeAlive(3, false)).toEqual(true);
  });
});

describe('Alive Cell', () => {
  it('stays alive with 2 living neighbours', () => {
    expect(willBeAlive(2, true)).toEqual(true);
  });

  it('stays alive with 3 living neighbours', () => {
    expect(willBeAlive(3, true)).toEqual(true);
  });

  it.each([[0], [1]]) ('dies because of under-population with %i living Neighbors', (numberOfLivingNeighbors) => {
    expect(willBeAlive(numberOfLivingNeighbors, true)).toEqual(false);
  });

  it.each([[4], [5], [6], [7], [8]]) ('dies because of over-population with %i living Neighbors', (numberOfLivingNeighbors) => {
    expect(willBeAlive(numberOfLivingNeighbors, true)).toEqual(false);
  });
})

const willBeAlive = (aliveNeighborCount, isAlive) => (isAlive && aliveNeighborCount === 2) || aliveNeighborCount === 3;

