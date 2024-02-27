// 1
function circleSolve(x: number, y: number): boolean {
  if (x ** 2 + y ** 2 <= 9.61 && x ** 2 + y ** 2 >= 2.25) {
    return true;
  } else {
    return false;
  }
}
circleSolve(3, 3);

// 2
function SolveLn(x: number) {
  let full = Math.log(1 + x);
  let notfull = 0;

  for (let n = 1; n <= 20; n++) {
    notfull += (Math.pow(-1, n - 1) * Math.pow(x, n)) / n;
  }

  console.log(`Точное значение: ${full}`);
  console.log(`Вычисленное значение: ${Math.round(notfull * 1000) / 1000}`);
}

// SolveLn(0.4)

//3
function arrayMultiplication(a: number[][], b: number[][]): number[][] {
  const c11 = a[0][0] * b[0][0] + a[0][1] * b[1][0];
  const c12 = a[0][0] * b[0][1] + a[0][1] * b[1][1];
  const c21 = a[1][0] * b[0][0] + a[1][1] * b[1][0];
  const c22 = a[1][0] * b[0][1] + a[1][1] * b[1][1];

  const arr = [
    [c11, c12],
    [c21, c22],
  ];

  return arr;
}

// console.log(arrayMultiplication(
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ));

//4

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// console.log(fibonacci(8));
