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
})

const willBeAlive = (aliveNeighborCount, isAlive) => isAlive ? true : aliveNeighborCount === 3;