//Plain Recurive solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
//Complextiy: O(2^n)

// ----------

//Optimise Solution (Memoized Solution)
function fibMemoized(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo); //5 + 4, //4 + 3, //3 + 2, //2 + 1
  memo[n] = res; // 3: 2
  console.log("memo: ", structuredClone(memo));
  return res;
}

console.log(fibMemoized(6)) //8
//1,1,2,3,5,8,13,21,34,55,89
//Complexity: O(n)