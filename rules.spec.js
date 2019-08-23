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
  it('dies with less than 2 living neighbours', () => {
    expect(willBeAlive(1, true)).toEqual(false);
  });
})

const willBeAlive = (aliveNeighborCount, isAlive) => (isAlive && aliveNeighborCount === 2) || aliveNeighborCount === 3;