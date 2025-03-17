export function fizzbuzz(tall) {
    if (tall % 15 === 0)
        return "FizzBuzz";
    if (tall % 3 === 0)
        return "Fizz";
    if (tall % 5 === 0)
        return "Buzz";
    return tall.toString();
}