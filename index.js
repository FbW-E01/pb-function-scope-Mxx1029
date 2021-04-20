// 1. Print Exponential Values

const getExpontialValues = (number1, number2) => {
    if (typeof number1 === "number" && typeof number2 === "number") {
        let currentValue = 1;
        for (let i = 0; i < number2; i++) {
            currentValue *= number1;
            console.log(currentValue);
        };
    } else {
        console.log("Check your parameters. Are they numbers?")
    }
};

getExpontialValues(2, 8);

// 2. Fruits

let favoriteFruit = "Mango";
const printFavoriteFruit = () => {
    favoriteFruit = "Pineapple";
    console.log(favoriteFruit);
};

printFavoriteFruit();

// 3. Multiply a Number by Itself

// code reused from #1

let result = 1;

const exponent = (number1, number2) => {
    for (let i = 0; i < number2; i++) {
        result *= number1;
    };
};

exponent(3, 5);
console.log(result);

// I can access the value of result only if I declare it outside the function scope, then invoke the function, which executes the code block in it and reassignes the new value and THEN print result to the console.
// Without invoking the function I get only the value assigned to result before the function.
// If I declare result in the function, I can only access it within the function, even after I invoke it, I can't print it to the console, after the function call.