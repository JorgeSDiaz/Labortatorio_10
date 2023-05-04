var bigInt = require("big-integer");

function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 2) {
        return bigInt.one;
    }
    memo[n] = fibonacci(n - 1, memo).add(fibonacci(n - 2, memo));
    return memo[n];
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // let nth = req.body.nth
    // let nth_1 = bigInt.one;
    // let nth_2 = bigInt.zero;
    // let answer = bigInt.zero;

    // if (nth < 0)
    //     throw 'must be greater than 0'
    // else if (nth === 0)
    //     answer = nth_2
    // else if (nth === 1)
    //     answer = nth_1
    // else {
    //     for (var i = 0; i < nth - 1; i++) {
    //         answer = nth_2.add(nth_1)
    //         nth_2 = nth_1
    //         nth_1 = answer
    //     }
    // }

    let nth = req.body.nth;
    let answer = fibonacci(nth);

    context.res = {
        body: answer.toString()
    };
}