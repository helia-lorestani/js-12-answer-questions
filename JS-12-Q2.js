// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
function outFunc() {
  function inFucn(num1, num2) {
    result = num1 * num2;
    return result;
  }
  return inFucn;
}

console.log(outFunc()(7, 5));
