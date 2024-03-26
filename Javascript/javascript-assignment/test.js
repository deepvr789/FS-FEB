function fibonacciSeries(limit) {
    let n1 = 0, n2 = 1, nextTerm;
    let series = '';

    // Print the first two terms of the series
    series += n1 + ' ' + n2 + ' ';

    // Generate the Fibonacci series up to the given limit
    nextTerm = n1 + n2;
    while (nextTerm <= limit) {
        series += nextTerm + ' ';
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }

    console.log("Fibonacci Series up to " + limit + ":");
    console.log(series);
}

// Example: Print Fibonacci series up to 100
fibonacciSeries(17);

