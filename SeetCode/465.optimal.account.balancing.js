/*
A group of friends went on holiday and sometimes lent each other money. 
For example, Alice paid for Bill's lunch for $10. 
Then later Chris gave Alice $5 for a taxi ride. 
We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. 
Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), 
the transactions can be represented as [[0, 1, 10], [2, 0, 5]].

Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.

Note:

    A transaction will be given as a tuple (x, y, z). Note that x ≠ y and z > 0.
    Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also have the persons 0, 2, 6.
    Example 1:

    Input:
    [[0,1,10], [2,0,5]]

    Output:
    2

    Explanation:
    Person #0 gave person #1 $10.
    Person #2 gave person #0 $5.

Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.
Example 2:

    Input:
    [[0,1,10], [1,0,1], [1,2,5], [2,0,5]]

    Output:
    1

    Explanation:
    Person #0 gave person #1 $10.
    Person #1 gave person #0 $1.
    Person #1 gave person #2 $5.
    Person #2 gave person #0 $5.

Therefore, person #1 only need to give person #0 $4, and all debt is settled.
*/

function minTransfers(transactions) {
    const balance = {};

    // Calculate net balance for each person
    for (const [giver, receiver, amount] of transactions) {
        balance[giver] = (balance[giver] || 0) - amount;
        balance[receiver] = (balance[receiver] || 0) + amount;
    }

    // Filter out zero balances
    const debts = Object.values(balance).filter(amount => amount !== 0);

    function settle(debts, start) {
        while (start < debts.length && debts[start] === 0) {
            start++;
        }
        if (start === debts.length) return 0;

        let minTransactions = Infinity;
        for (let i = start + 1; i < debts.length; i++) {
            if (debts[i] * debts[start] < 0) {
                debts[i] += debts[start];
                minTransactions = Math.min(minTransactions, 1 + settle(debts, start + 1));
                debts[i] -= debts[start];
            }
        }
        return minTransactions;
    }

    return settle(debts, 0);
}

// Example usage:
console.log(minTransfers([[0, 1, 10], [2, 0, 5]])); // Output: 2
console.log(minTransfers([[0, 1, 10], [1, 0, 1], [1, 2, 5], [2, 0, 5]])); // Output: 1