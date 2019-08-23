describe('Dead Cell', () => {
  it('stays dead if there are no alive neighbours', () => {
    expect(willBeAlive(0, false)).toEqual(false);
  });

  it('becomes alive', () => {
    expect(willBeAlive(3, false)).toEqual(true);
  });
});

const willBeAlive = (aliveNeighborCount) => aliveNeighborCount === 3;