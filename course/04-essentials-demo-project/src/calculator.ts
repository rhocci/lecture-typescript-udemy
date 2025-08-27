// 타입 정의
type dataType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

type resultType = {
  year: number;
  total: number;
  totalInvestment: number;
  totalReturn: number;
};

// data: { string: number }
// initial amount(초기 투자액)
// annual contribution(연간 추가 투자액)
// expected return(기대 수익률)
// duration(투자 기간)
function calculateInvestment(data: dataType): resultType[] {
  const results: resultType[] = [];
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    data;

  for (let i = 0; i < duration; i++) {
    const currentInvestment = initialInvestment + annualInvestment * i;
    const currentTotal =
      currentInvestment + (currentInvestment * expectedReturn) / 100;
    const currentReturn = currentTotal - currentInvestment;

    const result: resultType = {
      year: i,
      total: currentTotal,
      totalInvestment: currentInvestment,
      totalReturn: currentReturn,
    };

    results.push(result);
  }

  return results;
} // = > result[]

function printResults(results: resultType[]): void {
  // print (output) the result data
  results.forEach((result) => {
    console.log('Year: ', result.year);
    console.log('Total: ', result.total);
    console.log('Toal Contributions: ', result.totalInvestment);
    console.log('Total Interest Earned: ', result.totalReturn);
    console.log('---------------------------');
  });
}

const results = calculateInvestment({
  initialInvestment: 10000,
  annualInvestment: 2000,
  expectedReturn: 5,
  duration: 10,
});

printResults(results);
