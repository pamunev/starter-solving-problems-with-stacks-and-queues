const Stack = require("../lib/stack");

const postfix = (expression) => {

    const precedence = {
        "+": 0,
        "-": 0,
        "*": 1,
        "/": 1,
    }

    let stack = new Stack()
    let result = []

    expression = expression.replace(/\s/g, "")

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "(") {
            stack.push(expression[i])
        } else {
          if (expression[i] === ")") {
            let top = stack.pop()
            while (top !== "(") {
                result.push(top)
                top = stack.pop()
            }
        } else {
            if ("+-*/".includes(expression[i])) {
                if (
                    !stack.top ||
                    stack.top.value === "(" ||
                    precedence[expression[i]] > precedence[stack.top.value]
                ) {
                    stack.push(expression[i])
                } else {
                    while (stack.top && precedence[stack.top.value] >= precedence[expression[i]]) {
                        result.push(stack.pop())
                    }

                    stack.push(expression[i])
                }
            } else {
                result.push(expression[i])
            }
        }
      }
    }

    while (stack.top) {
        result.push(stack.pop())
    }

    return result.join(" ")
};

module.exports = postfix;
