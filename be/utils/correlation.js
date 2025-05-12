exports.calculateAverage = prices => {
  const sum = prices.reduce((acc, p) => acc + p.price, 0);
  return sum / prices.length;
};

exports.calculateCorrelation = (x, y) => {
  const n = Math.min(x.length, y.length);
  const xAvg = x.reduce((acc, val) => acc + val.price, 0) / n;
  const yAvg = y.reduce((acc, val) => acc + val.price, 0) / n;

  let cov = 0, xStd = 0, yStd = 0;

  for (let i = 0; i < n; i++) {
    const xDiff = x[i].price - xAvg;
    const yDiff = y[i].price - yAvg;
    cov += xDiff * yDiff;
    xStd += xDiff ** 2;
    yStd += yDiff ** 2;
  }

  return cov / Math.sqrt(xStd * yStd);
};
