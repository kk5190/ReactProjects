let questions = [
  {
      "question": "1. What's the output?",
      "code": "function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();",
      "options": {
          "A": " `Lydia` and `undefined`\n",
          "B": " `Lydia` and `ReferenceError`\n",
          "C": " `ReferenceError` and `21`\n",
          "D": " `undefined` and `ReferenceError`\n"
      },
      "answer": "D",
      "explanation": "\nWithin the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.\n"
  },
  {
      "question": "2. What's the output?",
      "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
      "options": {
          "A": " `0 1 2` and `0 1 2`\n",
          "B": " `0 1 2` and `3 3 3`\n",
          "C": " `3 3 3` and `0 1 2`\n"
      },
      "answer": "C",
      "explanation": "\nBecause of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.\n"
  },
  {
      "question": "3. What's the output?",
      "code": "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
      "options": {
          "A": " `20` and `62.83185307179586`\n",
          "B": " `20` and `NaN`\n",
          "C": " `20` and `63`\n",
          "D": " `NaN` and `63`\n"
      },
      "answer": "B",
      "explanation": "\nNote that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.\n\nWith arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n\nThere is no value `radius` on that object, which returns `NaN`.\n"
  },
  {
      "question": "4. What's the output?",
      "code": "+true;\n!'Lydia';",
      "options": {
          "A": " `1` and `false`\n",
          "B": " `false` and `NaN`\n",
          "C": " `false` and `false`\n"
      },
      "answer": "A",
      "explanation": "\nThe unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.\n\nThe string `'Lydia'` is a truthy value. What we're actually asking, is \"is this truthy value falsy?\". This returns `false`.\n"
  },
  {
      "question": "5. Which one is true?",
      "code": "const bird = {\n  size: 'small',\n};\n\nconst mouse = {\n  name: 'Mickey',\n  small: true,\n};",
      "options": {
          "A": " `mouse.bird.size` is not valid\n",
          "B": " `mouse[bird.size]` is not valid\n",
          "C": " `mouse[bird[\"size\"]]` is not valid\n",
          "D": " All of them are valid\n"
      },
      "answer": "A",
      "explanation": "\nIn JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.\n\n`mouse[bird.size]`: First it evaluates `bird.size`, which is `\"small\"`. `mouse[\"small\"]` returns `true`\n\nHowever, with dot notation, this doesn't happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we're actually asking `undefined.size`. This isn't valid, and will throw an error similar to `Cannot read property \"size\" of undefined`.\n"
  },
  {
      "question": "6. What's the output?",
      "code": "let c = { greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);",
      "options": {
          "A": " `Hello`\n",
          "B": " `Hey!`\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n",
          "E": " `TypeError`\n"
      },
      "answer": "A",
      "explanation": "\nIn JavaScript, all objects interact by _reference_ when setting them equal to each other.\n\nFirst, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.\n\n<img src=\"https://i.imgur.com/ko5k0fs.png\" width=\"200\">\n\nWhen you change one object, you change all of them.\n"
  },
  {
      "question": "7. What's the output?",
      "code": "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
      "options": {
          "A": " `true` `false` `true`\n",
          "B": " `false` `false` `true`\n",
          "C": " `true` `false` `false`\n",
          "D": " `false` `true` `true`\n"
      },
      "answer": "C",
      "explanation": "\n`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n\nWhen we use the `==` operator (Equality operator), it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.\n\nHowever, when we use the `===` operator (Strict equality operator), both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`\n"
  },
  {
      "question": "8. What's the output?",
      "code": "class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = 'green' } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: 'purple' });\nconsole.log(freddie.colorChange('orange'));",
      "options": {
          "A": " `orange`\n",
          "B": " `purple`\n",
          "C": " `green`\n",
          "D": " `TypeError`\n"
      },
      "answer": "D",
      "explanation": "\nThe `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since `freddie` is an instance of class Chameleon, the function cannot be called upon it. A `TypeError` is thrown.\n"
  },
  {
      "question": "9. What's the output?",
      "code": "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);",
      "options": {
          "A": " `{}`\n",
          "B": " `ReferenceError: greetign is not defined`\n",
          "C": " `undefined`\n"
      },
      "answer": "A",
      "explanation": "\nIt logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as:\n\n1. `global.greetign = {}` in Node.js\n2. `window.greetign = {}`, `frames.geetign = {}` and `self.greetign` in browsers.\n3. `self.greetign` in web workers.\n4. `globalThis.greetign` in all environments.\n\nIn order to avoid this, we can use `\"use strict\"`. This makes sure that you have declared a variable before setting it equal to anything.\n"
  },
  {
      "question": "10. What happens when we do this?",
      "code": "function bark() {\n  console.log('Woof!');\n}\n\nbark.animal = 'dog';",
      "options": {
          "A": " Nothing, this is totally fine!\n",
          "B": " `SyntaxError`. You cannot add properties to a function this way.\n",
          "C": " `\"Woof\"` gets logged.\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "A",
      "explanation": "\nThis is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\n\nA function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.\n"
  },
  {
      "question": "11. What's the output?",
      "code": "function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person('Lydia', 'Hallie');\nPerson.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n\nconsole.log(member.getFullName());",
      "options": {
          "A": " `TypeError`\n",
          "B": " `SyntaxError`\n",
          "C": " `Lydia Hallie`\n",
          "D": " `undefined` `undefined`\n"
      },
      "answer": "A",
      "explanation": "\nIn JavaScript, functions are objects, and therefore, the method `getFullName` gets added to the constructor function object itself. For that reason, we can call `Person.getFullName()`, but `member.getFullName` throws a `TypeError`. \n\nIf you want a method to be available to all object instances, you have to add it to the prototype property:\n\n```js\nPerson.prototype.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n```\n"
  },
  {
      "question": "12. What's the output?",
      "code": "function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person('Lydia', 'Hallie');\nconst sarah = Person('Sarah', 'Smith');\n\nconsole.log(lydia);\nconsole.log(sarah);",
      "options": {
          "A": " `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `undefined`\n",
          "B": " `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `Person {firstName: \"Sarah\", lastName: \"Smith\"}`\n",
          "C": " `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `{}`\n",
          "D": " `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `ReferenceError`\n"
      },
      "answer": "A",
      "explanation": "\nFor `sarah`, we didn't use the `new` keyword. When using `new`, `this` refers to the new empty object we create. However, if you don't add `new`, `this` refers to the **global object**!\n\nWe said that `this.firstName` equals `\"Sarah\"` and `this.lastName` equals `\"Smith\"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.\n"
  },
  {
      "question": "13. What are the three phases of event propagation?",
      "code": null,
      "options": {
          "A": " Target > Capturing > Bubbling\n",
          "B": " Bubbling > Target > Capturing\n",
          "C": " Target > Bubbling > Capturing\n",
          "D": " Capturing > Target > Bubbling\n"
      },
      "answer": "D",
      "explanation": "\nDuring the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.\n\n<img src=\"https://i.imgur.com/N18oRgd.png\" width=\"200\">\n"
  },
  {
      "question": "14. All object have prototypes.",
      "code": null,
      "options": {
          "A": " true\n",
          "B": " false\n"
      },
      "answer": "B",
      "explanation": "\nAll objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.\n"
  },
  {
      "question": "15. What's the output?",
      "code": "function sum(a, b) {\n  return a + b;\n}\n\nsum(1, '2');",
      "options": {
          "A": " `NaN`\n",
          "B": " `TypeError`\n",
          "C": " `\"12\"`\n",
          "D": " `3`\n"
      },
      "answer": "C",
      "explanation": "\nJavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.\n\nIn this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `\"Hello\" + \"World\"`, so what's happening here is `\"1\" + \"2\"` which returns `\"12\"`.\n"
  },
  {
      "question": "16. What's the output?",
      "code": "let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);",
      "options": {
          "A": " `1` `1` `2`\n",
          "B": " `1` `2` `2`\n",
          "C": " `0` `2` `2`\n",
          "D": " `0` `1` `2`\n"
      },
      "answer": "C",
      "explanation": "\nThe **postfix** unary operator `++`:\n\n1. Returns the value (this returns `0`)\n2. Increments the value (number is now `1`)\n\nThe **prefix** unary operator `++`:\n\n1. Increments the value (number is now `2`)\n2. Returns the value (this returns `2`)\n\nThis returns `0 2 2`.\n"
  },
  {
      "question": "17. What's the output?",
      "code": "function getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = 'Lydia';\nconst age = 21;\n\ngetPersonInfo`${person} is ${age} years old`;",
      "options": {
          "A": " `\"Lydia\"` `21` `[\"\", \" is \", \" years old\"]`\n",
          "B": " `[\"\", \" is \", \" years old\"]` `\"Lydia\"` `21`\n",
          "C": " `\"Lydia\"` `[\"\", \" is \", \" years old\"]` `21`\n"
      },
      "answer": "B",
      "explanation": "\nIf you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!\n"
  },
  {
      "question": "18. What's the output?",
      "code": "function checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log('You are an adult!');\n  } else if (data == { age: 18 }) {\n    console.log('You are still an adult.');\n  } else {\n    console.log(`Hmm.. You don't have an age I guess`);\n  }\n}\n\ncheckAge({ age: 18 });",
      "options": {
          "A": " `You are an adult!`\n",
          "B": " `You are still an adult.`\n",
          "C": " `Hmm.. You don't have an age I guess`\n"
      },
      "answer": "C",
      "explanation": "\nWhen testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.\n\nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n\nThis is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.\n"
  },
  {
      "question": "19. What's the output?",
      "code": "function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);",
      "options": {
          "A": " `\"number\"`\n",
          "B": " `\"array\"`\n",
          "C": " `\"object\"`\n",
          "D": " `\"NaN\"`\n"
      },
      "answer": "C",
      "explanation": "\nThe rest parameter (`...args`) lets us \"collect\" all remaining arguments into an array. An array is an object, so `typeof args` returns `\"object\"`\n"
  },
  {
      "question": "20. What's the output?",
      "code": "function getAge() {\n  'use strict';\n  age = 21;\n  console.log(age);\n}\n\ngetAge();",
      "options": {
          "A": " `21`\n",
          "B": " `undefined`\n",
          "C": " `ReferenceError`\n",
          "D": " `TypeError`\n"
      },
      "answer": "C",
      "explanation": "\nWith `\"use strict\"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `\"use strict\"`, it will throw a reference error. If we didn't use `\"use strict\"`, it would have worked, since the property `age` would have gotten added to the global object.\n"
  },
  {
      "question": "21. What's the value of `sum`?",
      "code": "const sum = eval('10*10+5');",
      "options": {
          "A": " `105`\n",
          "B": " `\"105\"`\n",
          "C": " `TypeError`\n",
          "D": " `\"10*10+5\"`\n"
      },
      "answer": "A",
      "explanation": "\n`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.\n"
  },
  {
      "question": "22. How long is cool_secret accessible?",
      "code": "sessionStorage.setItem('cool_secret', 123);",
      "options": {
          "A": " Forever, the data doesn't get lost.\n",
          "B": " When the user closes the tab.\n",
          "C": " When the user closes the entire browser, not only the tab.\n",
          "D": " When the user shuts off their computer.\n"
      },
      "answer": "B",
      "explanation": "\nThe data stored in `sessionStorage` is removed after closing the _tab_.\n\nIf you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.\n"
  },
  {
      "question": "23. What's the output?",
      "code": "var num = 8;\nvar num = 10;\n\nconsole.log(num);",
      "options": {
          "A": " `8`\n",
          "B": " `10`\n",
          "C": " `SyntaxError`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\nWith the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n\nYou cannot do this with `let` or `const` since they're block-scoped.\n"
  },
  {
      "question": "24. What's the output?",
      "code": "const obj = { 1: 'a', 2: 'b', 3: 'c' };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty('1');\nobj.hasOwnProperty(1);\nset.has('1');\nset.has(1);",
      "options": {
          "A": " `false` `true` `false` `true`\n",
          "B": " `false` `true` `true` `true`\n",
          "C": " `true` `true` `false` `true`\n",
          "D": " `true` `true` `true` `true`\n"
      },
      "answer": "C",
      "explanation": "\nAll object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.\n\nIt doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.\n"
  },
  {
      "question": "25. What's the output?",
      "code": "const obj = { a: 'one', b: 'two', a: 'three' };\nconsole.log(obj);",
      "options": {
          "A": " `{ a: \"one\", b: \"two\" }`\n",
          "B": " `{ b: \"two\", a: \"three\" }`\n",
          "C": " `{ a: \"three\", b: \"two\" }`\n",
          "D": " `SyntaxError`\n"
      },
      "answer": "C",
      "explanation": "\nIf you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.\n"
  },
  {
      "question": "26. The JavaScript global execution context creates two things for you: the global object, and the \"this\" keyword.",
      "code": null,
      "options": {
          "A": " true\n",
          "B": " false\n",
          "C": " it depends\n"
      },
      "answer": "A",
      "explanation": "\nThe base execution context is the global execution context: it's what's accessible everywhere in your code.\n"
  },
  {
      "question": "27. What's the output?",
      "code": "for (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}",
      "options": {
          "A": " `1` `2`\n",
          "B": " `1` `2` `3`\n",
          "C": " `1` `2` `4`\n",
          "D": " `1` `3` `4`\n"
      },
      "answer": "C",
      "explanation": "\nThe `continue` statement skips an iteration if a certain condition returns `true`.\n"
  },
  {
      "question": "28. What's the output?",
      "code": "String.prototype.giveLydiaPizza = () => {\n  return 'Just give Lydia pizza already!';\n};\n\nconst name = 'Lydia';\n\nconsole.log(name.giveLydiaPizza())",
      "options": {
          "A": " `\"Just give Lydia pizza already!\"`\n",
          "B": " `TypeError: not a function`\n",
          "C": " `SyntaxError`\n",
          "D": " `undefined`\n"
      },
      "answer": "A",
      "explanation": "\n`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!\n"
  },
  {
      "question": "29. What's the output?",
      "code": "const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);",
      "options": {
          "A": " `123`\n",
          "B": " `456`\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\nObject keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.\n\nHowever, when we stringify an object, it becomes `\"[object Object]\"`. So what we are saying here, is that `a[\"[object Object]\"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a[\"[object Object]\"] = 456`.\n\nThen, we log `a[b]`, which is actually `a[\"[object Object]\"]`. We just set that to `456`, so it returns `456`.\n"
  },
  {
      "question": "30. What's the output?",
      "code": "const foo = () => console.log('First');\nconst bar = () => setTimeout(() => console.log('Second'));\nconst baz = () => console.log('Third');\n\nbar();\nfoo();\nbaz();",
      "options": {
          "A": " `First` `Second` `Third`\n",
          "B": " `First` `Third` `Second`\n",
          "C": " `Second` `First` `Third`\n",
          "D": " `Second` `Third` `First`\n"
      },
      "answer": "B",
      "explanation": "\nWe have a `setTimeout` function and invoked it first. Yet, it was logged last.\n\nThis is because in browsers, we don't just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.\n\nAfter the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.\n\n<img src=\"https://i.imgur.com/X5wsHOg.png\" width=\"200\">\n\nNow, `foo` gets invoked, and `\"First\"` is being logged.\n\n<img src=\"https://i.imgur.com/Pvc0dGq.png\" width=\"200\">\n\n`foo` is popped off the stack, and `baz` gets invoked. `\"Third\"` gets logged.\n\n<img src=\"https://i.imgur.com/WhA2bCP.png\" width=\"200\">\n\nThe WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the _queue_.\n\n<img src=\"https://i.imgur.com/NSnDZmU.png\" width=\"200\">\n\nThis is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.\n\n<img src=\"https://i.imgur.com/uyiScAI.png\" width=\"200\">\n\n`bar` gets invoked, `\"Second\"` gets logged, and it's popped off the stack.\n"
  },
  {
      "question": "31. What is the event.target when clicking the button?",
      "code": null,
      "options": {
          "A": " Outer `div`\n",
          "B": " Inner `div`\n",
          "C": " `button`\n",
          "D": " An array of all nested elements.\n"
      },
      "answer": "C",
      "explanation": "\nThe deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`\n"
  },
  {
      "question": "32. When you click the paragraph, what's the logged output?",
      "code": null,
      "options": {
          "A": " `p` `div`\n",
          "B": " `div` `p`\n",
          "C": " `p`\n",
          "D": " `div`\n"
      },
      "answer": "A",
      "explanation": "\nIf we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.\n"
  },
  {
      "question": "33. What's the output?",
      "code": "const person = { name: 'Lydia' };\n\nfunction sayHi(age) {\n  return `${this.name} is ${age}`;\n}\n\nconsole.log(sayHi.call(person, 21));\nconsole.log(sayHi.bind(person, 21));",
      "options": {
          "A": " `undefined is 21` `Lydia is 21`\n",
          "B": " `function` `function`\n",
          "C": " `Lydia is 21` `Lydia is 21`\n",
          "D": " `Lydia is 21` `function`\n"
      },
      "answer": "D",
      "explanation": "\nWith both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!\n\n`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.\n"
  },
  {
      "question": "34. What's the output?",
      "code": "function sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());",
      "options": {
          "A": " `\"object\"`\n",
          "B": " `\"number\"`\n",
          "C": " `\"function\"`\n",
          "D": " `\"undefined\"`\n"
      },
      "answer": "B",
      "explanation": "\nThe `sayHi` function returns the returned value of the immediately invoked function expression (IIFE). This function returned `0`, which is type `\"number\"`.\n\t\nFYI: `typeof` can return the following list of values: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` and `object`. Note that `typeof null` returns `\"object\"`.\n"
  },
  {
      "question": "35. Which of these values are falsy?",
      "code": "0;\nnew Number(0);\n('');\n(' ');\nnew Boolean(false);\nundefined;",
      "options": {
          "A": " `0`, `''`, `undefined`\n",
          "B": " `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`\n",
          "C": " `0`, `''`, `new Boolean(false)`, `undefined`\n",
          "D": " All of them are falsy\n"
      },
      "answer": "A",
      "explanation": "\nThere are 8 falsy values:\n\n- `undefined`\n- `null`\n- `NaN`\n- `false`\n- `''` (empty string)\n- `0`\n- `-0`\n- `0n` (BigInt(0))\n\nFunction constructors, like `new Number` and `new Boolean` are truthy.\n"
  },
  {
      "question": "36. What's the output?",
      "code": "console.log(typeof typeof 1);",
      "options": {
          "A": " `\"number\"`\n",
          "B": " `\"string\"`\n",
          "C": " `\"object\"`\n",
          "D": " `\"undefined\"`\n"
      },
      "answer": "B",
      "explanation": "\n`typeof 1` returns `\"number\"`.\n`typeof \"number\"` returns `\"string\"`\n"
  },
  {
      "question": "37. What's the output?",
      "code": "const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);",
      "options": {
          "A": " `[1, 2, 3, null x 7, 11]`\n",
          "B": " `[1, 2, 3, 11]`\n",
          "C": " `[1, 2, 3, empty x 7, 11]`\n",
          "D": " `SyntaxError`\n"
      },
      "answer": "C",
      "explanation": "\nWhen you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called \"empty slots\". These actually have the value of `undefined`, but you will see something like:\n\n`[1, 2, 3, empty x 7, 11]`\n\ndepending on where you run it (it's different for every browser, node, etc.)\n"
  },
  {
      "question": "38. What's the output?",
      "code": "(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();",
      "options": {
          "A": " `1` `undefined` `2`\n",
          "B": " `undefined` `undefined` `undefined`\n",
          "C": " `1` `1` `2`\n",
          "D": " `1` `undefined` `undefined`\n"
      },
      "answer": "A",
      "explanation": "\nThe `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.\n\nLater, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.\n\nOutside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.\n"
  },
  {
      "question": "39. Everything in JavaScript is either a...",
      "code": null,
      "options": {
          "A": " primitive or object\n",
          "B": " function or object\n",
          "C": " trick question! only objects\n",
          "D": " number or object\n"
      },
      "answer": "A",
      "explanation": "\nJavaScript only has primitive types and objects.\n\nPrimitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.\n\nWhat differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.\n"
  },
  {
      "question": "40. What's the output?",
      "code": "[[0, 1], [2, 3]].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2],\n);",
      "options": {
          "A": " `[0, 1, 2, 3, 1, 2]`\n",
          "B": " `[6, 1, 2]`\n",
          "C": " `[1, 2, 0, 1, 2, 3]`\n",
          "D": " `[1, 2, 6]`\n"
      },
      "answer": "C",
      "explanation": "\n`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.\n\nThen, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`\n"
  },
  {
      "question": "41. What's the output?",
      "code": "!!null;\n!!'';\n!!1;",
      "options": {
          "A": " `false` `true` `false`\n",
          "B": " `false` `false` `true`\n",
          "C": " `false` `true` `true`\n",
          "D": " `true` `true` `false`\n"
      },
      "answer": "B",
      "explanation": "\n`null` is falsy. `!null` returns `true`. `!true` returns `false`.\n\n`\"\"` is falsy. `!\"\"` returns `true`. `!true` returns `false`.\n\n`1` is truthy. `!1` returns `false`. `!false` returns `true`.\n"
  },
  {
      "question": "42. What does the `setInterval` method return in the browser?",
      "code": "setInterval(() => console.log('Hi'), 1000);",
      "options": {
          "A": " a unique id\n",
          "B": " the amount of milliseconds specified\n",
          "C": " the passed function\n",
          "D": " `undefined`\n"
      },
      "answer": "A",
      "explanation": "\nIt returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.\n"
  },
  {
      "question": "43. What does this return?",
      "code": "[...'Lydia'];",
      "options": {
          "A": " `[\"L\", \"y\", \"d\", \"i\", \"a\"]`\n",
          "B": " `[\"Lydia\"]`\n",
          "C": " `[[], \"Lydia\"]`\n",
          "D": " `[[\"L\", \"y\", \"d\", \"i\", \"a\"]]`\n"
      },
      "answer": "A",
      "explanation": "\nA string is an iterable. The spread operator maps every character of an iterable to one element.\n"
  },
  {
      "question": "44. What's the output?",
      "code": "function* generator(i) {\n  yield i;\n  yield i * 2;\n}\n\nconst gen = generator(10);\n\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);",
      "options": {
          "A": " `[0, 10], [10, 20]`\n",
          "B": " `20, 20`\n",
          "C": " `10, 20`\n",
          "D": " `0, 10 and 10, 20`\n"
      },
      "answer": "C",
      "explanation": "\nRegular functions cannot be stopped mid-way after invocation. However, a generator function can be \"stopped\" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.\n\nFirst, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now \"paused\", and `10` gets logged.\n\nThen, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.\n"
  },
  {
      "question": "45. What does this return?",
      "code": "const firstPromise = new Promise((res, rej) => {\n  setTimeout(res, 500, 'one');\n});\n\nconst secondPromise = new Promise((res, rej) => {\n  setTimeout(res, 100, 'two');\n});\n\nPromise.race([firstPromise, secondPromise]).then(res => console.log(res));",
      "options": {
          "A": " `\"one\"`\n",
          "B": " `\"two\"`\n",
          "C": " `\"two\" \"one\"`\n",
          "D": " `\"one\" \"two\"`\n"
      },
      "answer": "B",
      "explanation": "\nWhen we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.\n"
  },
  {
      "question": "46. What's the output?",
      "code": "let person = { name: 'Lydia' };\nconst members = [person];\nperson = null;\n\nconsole.log(members);",
      "options": {
          "A": " `null`\n",
          "B": " `[null]`\n",
          "C": " `[{}]`\n",
          "D": " `[{ name: \"Lydia\" }]`\n"
      },
      "answer": "D",
      "explanation": "\nFirst, we declare a variable `person` with the value of an object that has a `name` property.\n\n<img src=\"https://i.imgur.com/TML1MbS.png\" width=\"200\">\n\nThen, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!)\n\n<img src=\"https://i.imgur.com/FSG5K3F.png\" width=\"300\">\n\nThen, we set the variable `person` equal to `null`.\n\n<img src=\"https://i.imgur.com/sYjcsMT.png\" width=\"300\">\n\nWe are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.\n"
  },
  {
      "question": "47. What's the output?",
      "code": "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nfor (const item in person) {\n  console.log(item);\n}",
      "options": {
          "A": " `{ name: \"Lydia\" }, { age: 21 }`\n",
          "B": " `\"name\", \"age\"`\n",
          "C": " `\"Lydia\", 21`\n",
          "D": " `[\"name\", \"Lydia\"], [\"age\", 21]`\n"
      },
      "answer": "B",
      "explanation": "\nWith a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.\n"
  },
  {
      "question": "48. What's the output?",
      "code": "console.log(3 + 4 + '5');",
      "options": {
          "A": " `\"345\"`\n",
          "B": " `\"75\"`\n",
          "C": " `12`\n",
          "D": " `\"12\"`\n"
      },
      "answer": "B",
      "explanation": "\nOperator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.\n\n`3 + 4` gets evaluated first. This results in the number `7`.\n\n`7 + '5'` results in `\"75\"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `\"7\" + \"5\"` results in `\"75\"`.\n"
  },
  {
      "question": "49. What's the value of `num`?",
      "code": "const num = parseInt('7*6', 10);",
      "options": {
          "A": " `42`\n",
          "B": " `\"42\"`\n",
          "C": " `7`\n",
          "D": " `NaN`\n"
      },
      "answer": "C",
      "explanation": "\nOnly the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.\n\n`*` is not a valid number. It only parses `\"7\"` into the decimal `7`. `num` now holds the value of `7`.\n"
  },
  {
      "question": "50. What's the output?",
      "code": "[1, 2, 3].map(num => {\n  if (typeof num === 'number') return;\n  return num * 2;\n});",
      "options": {
          "A": " `[]`\n",
          "B": " `[null, null, null]`\n",
          "C": " `[undefined, undefined, undefined]`\n",
          "D": " `[ 3 x empty ]`\n"
      },
      "answer": "C",
      "explanation": "\nWhen mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === \"number\"` returns `true`. The map function creates a new array and inserts the values returned from the function.\n\nHowever, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.\n"
  },
  {
      "question": "51. What's the output?",
      "code": "function getInfo(member, year) {\n  member.name = 'Lydia';\n  year = '1998';\n}\n\nconst person = { name: 'Sarah' };\nconst birthYear = '1997';\n\ngetInfo(person, birthYear);\n\nconsole.log(person, birthYear);",
      "options": {
          "A": " `{ name: \"Lydia\" }, \"1997\"`\n",
          "B": " `{ name: \"Sarah\" }, \"1998\"`\n",
          "C": " `{ name: \"Lydia\" }, \"1998\"`\n",
          "D": " `{ name: \"Sarah\" }, \"1997\"`\n"
      },
      "answer": "A",
      "explanation": "\nArguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).\n\nThe variable `birthYear` has a reference to the value `\"1997\"`. The argument `year` also has a reference to the value `\"1997\"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `\"1998\"`, we are only updating the value of `year`. `birthYear` is still equal to `\"1997\"`.\n\nThe value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `\"Lydia\"`\n"
  },
  {
      "question": "52. What's the output?",
      "code": "function greeting() {\n  throw 'Hello world!';\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();\n    console.log('It worked!', data);\n  } catch (e) {\n    console.log('Oh no an error:', e);\n  }\n}\n\nsayHi();",
      "options": {
          "A": " `It worked! Hello world!`\n",
          "B": " `Oh no an error: undefined`\n",
          "C": " `SyntaxError: can only throw Error objects`\n",
          "D": " `Oh no an error: Hello world!`\n"
      },
      "answer": "D",
      "explanation": "\nWith the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world!'`.\n\nWith the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world!'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world!'`.\n"
  },
  {
      "question": "53. What's the output?",
      "code": "function Car() {\n  this.make = 'Lamborghini';\n  return { make: 'Maserati' };\n}\n\nconst myCar = new Car();\nconsole.log(myCar.make);",
      "options": {
          "A": " `\"Lamborghini\"`\n",
          "B": " `\"Maserati\"`\n",
          "C": " `ReferenceError`\n",
          "D": " `TypeError`\n"
      },
      "answer": "B",
      "explanation": "\nWhen you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `\"Maserati\"`, so `myCar.make` is equal to `\"Maserati\"`.\n"
  },
  {
      "question": "54. What's the output?",
      "code": "(() => {\n  let x = (y = 10);\n})();\n\nconsole.log(typeof x);\nconsole.log(typeof y);",
      "options": {
          "A": " `\"undefined\", \"number\"`\n",
          "B": " `\"number\", \"number\"`\n",
          "C": " `\"object\", \"number\"`\n",
          "D": " `\"number\", \"undefined\"`\n"
      },
      "answer": "A",
      "explanation": "\n`let x = (y = 10);` is actually shorthand for:\n\n```javascript\ny = 10;\nlet x = y;\n```\n\nWhen we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.\n\nThen, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they're declared in; the immediately invoked function expression (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it's declared in. This means that `x` is not defined. Values who haven't been assigned a value or declared are of type `\"undefined\"`. `console.log(typeof x)` returns `\"undefined\"`.\n\nHowever, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `\"number\"`. `console.log(typeof y)` returns `\"number\"`.\n"
  },
  {
      "question": "55. What's the output?",
      "code": "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nDog.prototype.bark = function() {\n  console.log(`Woof I am ${this.name}`);\n};\n\nconst pet = new Dog('Mara');\n\npet.bark();\n\ndelete Dog.prototype.bark;\n\npet.bark();",
      "options": {
          "A": " `\"Woof I am Mara\"`, `TypeError`\n",
          "B": " `\"Woof I am Mara\"`, `\"Woof I am Mara\"`\n",
          "C": " `\"Woof I am Mara\"`, `undefined`\n",
          "D": " `TypeError`, `TypeError`\n"
      },
      "answer": "A",
      "explanation": "\nWe can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.\n\nWhen we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.\n"
  },
  {
      "question": "56. What's the output?",
      "code": "const set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);",
      "options": {
          "A": " `[1, 1, 2, 3, 4]`\n",
          "B": " `[1, 2, 3, 4]`\n",
          "C": " `{1, 1, 2, 3, 4}`\n",
          "D": " `{1, 2, 3, 4}`\n"
      },
      "answer": "D",
      "explanation": "\nThe `Set` object is a collection of _unique_ values: a value can only occur once in a set.\n\nWe passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.\n"
  },
  {
      "question": "57. What's the output?",
      "code": "// counter.js\nlet counter = 10;\nexport default counter;\n```\n\n```javascript\n// index.js\nimport myCounter from './counter';\n\nmyCounter += 1;\n\nconsole.log(myCounter);",
      "options": {
          "A": " `10`\n",
          "B": " `11`\n",
          "C": " `Error`\n",
          "D": " `NaN`\n"
      },
      "answer": "C",
      "explanation": "\nAn imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.\n\nWhen we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.\n"
  },
  {
      "question": "58. What's the output?",
      "code": "const name = 'Lydia';\nage = 21;\n\nconsole.log(delete name);\nconsole.log(delete age);",
      "options": {
          "A": " `false`, `true`\n",
          "B": " `\"Lydia\"`, `21`\n",
          "C": " `true`, `true`\n",
          "D": " `undefined`, `undefined`\n"
      },
      "answer": "A",
      "explanation": "\nThe `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.\n\nThe `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.\n"
  },
  {
      "question": "59. What's the output?",
      "code": "const numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);",
      "options": {
          "A": " `[[1, 2, 3, 4, 5]]`\n",
          "B": " `[1, 2, 3, 4, 5]`\n",
          "C": " `1`\n",
          "D": " `[1]`\n"
      },
      "answer": "C",
      "explanation": "\nWe can unpack values from arrays or properties from objects through destructuring. For example:\n\n```javascript\n[a, b] = [1, 2];\n```\n\n<img src=\"https://i.imgur.com/ADFpVop.png\" width=\"200\">\n\nThe value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:\n\n```javascript\n[y] = [1, 2, 3, 4, 5];\n```\n\n<img src=\"https://i.imgur.com/NzGkMNk.png\" width=\"200\">\n\nThis means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.\n"
  },
  {
      "question": "60. What's the output?",
      "code": "const user = { name: 'Lydia', age: 21 };\nconst admin = { admin: true, ...user };\n\nconsole.log(admin);",
      "options": {
          "A": " `{ admin: true, user: { name: \"Lydia\", age: 21 } }`\n",
          "B": " `{ admin: true, name: \"Lydia\", age: 21 }`\n",
          "C": " `{ admin: true, user: [\"Lydia\", 21] }`\n",
          "D": " `{ admin: true }`\n"
      },
      "answer": "B",
      "explanation": "\nIt's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: \"Lydia\", age: 21 }`.\n"
  },
  {
      "question": "61. What's the output?",
      "code": "const person = { name: 'Lydia' };\n\nObject.defineProperty(person, 'age', { value: 21 });\n\nconsole.log(person);\nconsole.log(Object.keys(person));",
      "options": {
          "A": " `{ name: \"Lydia\", age: 21 }`, `[\"name\", \"age\"]`\n",
          "B": " `{ name: \"Lydia\", age: 21 }`, `[\"name\"]`\n",
          "C": " `{ name: \"Lydia\"}`, `[\"name\", \"age\"]`\n",
          "D": " `{ name: \"Lydia\"}`, `[\"age\"]`\n"
      },
      "answer": "B",
      "explanation": "\nWith the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `\"name\"`.\n\nProperties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.\n"
  },
  {
      "question": "62. What's the output?",
      "code": "const settings = {\n  username: 'lydiahallie',\n  level: 19,\n  health: 90,\n};\n\nconst data = JSON.stringify(settings, ['level', 'health']);\nconsole.log(data);",
      "options": {
          "A": " `\"{\"level\":19, \"health\":90}\"`\n",
          "B": " `\"{\"username\": \"lydiahallie\"}\"`\n",
          "C": " `\"[\"level\", \"health\"]\"`\n",
          "D": " `\"{\"username\": \"lydiahallie\", \"level\":19, \"health\":90}\"`\n"
      },
      "answer": "A",
      "explanation": "\nThe second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.\n\nIf the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `\"level\"` and `\"health\"` are included, `\"username\"` is excluded. `data` is now equal to `\"{\"level\":19, \"health\":90}\"`.\n\nIf the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.\n"
  },
  {
      "question": "63. What's the output?",
      "code": "let num = 10;\n\nconst increaseNumber = () => num++;\nconst increasePassedNumber = number => number++;\n\nconst num1 = increaseNumber();\nconst num2 = increasePassedNumber(num1);\n\nconsole.log(num1);\nconsole.log(num2);",
      "options": {
          "A": " `10`, `10`\n",
          "B": " `10`, `11`\n",
          "C": " `11`, `11`\n",
          "D": " `11`, `12`\n"
      },
      "answer": "A",
      "explanation": "\nThe unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.\n\n`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.\n"
  },
  {
      "question": "64. What's the output?",
      "code": "const value = { number: 10 };\n\nconst multiply = (x = { ...value }) => {\n  console.log((x.number *= 2));\n};\n\nmultiply();\nmultiply();\nmultiply(value);\nmultiply(value);",
      "options": {
          "A": " `20`, `40`, `80`, `160`\n",
          "B": " `20`, `40`, `20`, `40`\n",
          "C": " `20`, `20`, `20`, `40`\n",
          "D": " `NaN`, `NaN`, `20`, `40`\n"
      },
      "answer": "C",
      "explanation": "\nIn ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `\"undefined\"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.\n\nThe default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.\n\nThe third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`.\n\nThe fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.\n"
  },
  {
      "question": "65. What's the output?",
      "code": "[1, 2, 3, 4].reduce((x, y) => console.log(x, y));",
      "options": {
          "A": " `1` `2` and `3` `3` and `6` `4`\n",
          "B": " `1` `2` and `2` `3` and `3` `4`\n",
          "C": " `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`\n",
          "D": " `1` `2` and `undefined` `3` and `undefined` `4`\n"
      },
      "answer": "D",
      "explanation": "\nThe first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.\n\nIn this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.\n\nThe value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.\n\nOn the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.\n\nIf you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged.\n\nOn the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.\n"
  },
  {
      "question": "66. With which constructor can we successfully extend the `Dog` class?",
      "code": "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n};\n\nclass Labrador extends Dog {\n  // 1\n  constructor(name, size) {\n    this.size = size;\n  }\n  // 2\n  constructor(name, size) {\n    super(name);\n    this.size = size;\n  }\n  // 3\n  constructor(size) {\n    super(name);\n    this.size = size;\n  }\n  // 4\n  constructor(name, size) {\n    this.name = name;\n    this.size = size;\n  }\n\n};",
      "options": {
          "A": " 1\n",
          "B": " 2\n",
          "C": " 3\n",
          "D": " 4\n"
      },
      "answer": "B",
      "explanation": "\nIn a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.\n\nWith the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`.\n\nThe `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2.\n"
  },
  {
      "question": "67. What's the output?",
      "code": "// index.js\nconsole.log('running index.js');\nimport { sum } from './sum.js';\nconsole.log(sum(1, 2));\n\n// sum.js\nconsole.log('running sum.js');\nexport const sum = (a, b) => a + b;",
      "options": {
          "A": " `running index.js`, `running sum.js`, `3`\n",
          "B": " `running sum.js`, `running index.js`, `3`\n",
          "C": " `running sum.js`, `3`, `running index.js`\n",
          "D": " `running index.js`, `undefined`, `running sum.js`\n"
      },
      "answer": "B",
      "explanation": "\nWith the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.\n\nThis is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console.\n"
  },
  {
      "question": "68. What's the output?",
      "code": "console.log(Number(2) === Number(2));\nconsole.log(Boolean(false) === Boolean(false));\nconsole.log(Symbol('foo') === Symbol('foo'));",
      "options": {
          "A": " `true`, `true`, `false`\n",
          "B": " `false`, `true`, `false`\n",
          "C": " `true`, `false`, `true`\n",
          "D": " `true`, `true`, `true`\n"
      },
      "answer": "A",
      "explanation": "\nEvery Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.\n"
  },
  {
      "question": "69. What's the output?",
      "code": "const name = 'Lydia Hallie';\nconsole.log(name.padStart(13));\nconsole.log(name.padStart(2));",
      "options": {
          "A": " `\"Lydia Hallie\"`, `\"Lydia Hallie\"`\n",
          "B": " `\" Lydia Hallie\"`, `\" Lydia Hallie\"` (`\"[13x whitespace]Lydia Hallie\"`, `\"[2x whitespace]Lydia Hallie\"`)\n",
          "C": " `\" Lydia Hallie\"`, `\"Lydia Hallie\"` (`\"[1x whitespace]Lydia Hallie\"`, `\"Lydia Hallie\"`)\n",
          "D": " `\"Lydia Hallie\"`, `\"Lyd\"`,\n"
      },
      "answer": "C",
      "explanation": "\nWith the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `\"Lydia Hallie\"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.\n\nIf the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.\n"
  },
  {
      "question": "70. What's the output?",
      "code": "console.log('🥑' + '💻');",
      "options": {
          "A": " `\"🥑💻\"`\n",
          "B": " `257548`\n",
          "C": " A string containing their code points\n",
          "D": " Error\n"
      },
      "answer": "A",
      "explanation": "\nWith the `+` operator, you can concatenate strings. In this case, we are concatenating the string `\"🥑\"` with the string `\"💻\"`, resulting in `\"🥑💻\"`.\n"
  },
  {
      "question": "71. How can we log the values that are commented out after the console.log statement?",
      "code": "function* startGame() {\n  const answer = yield 'Do you love JavaScript?';\n  if (answer !== 'Yes') {\n    return \"Oh wow... Guess we're done here\";\n  }\n  return 'JavaScript loves you back ❤️';\n}\n\nconst game = startGame();\nconsole.log(/* 1 */); // Do you love JavaScript?\nconsole.log(/* 2 */); // JavaScript loves you back ❤️",
      "options": {
          "A": " `game.next(\"Yes\").value` and `game.next().value`\n",
          "B": " `game.next.value(\"Yes\")` and `game.next.value()`\n",
          "C": " `game.next().value` and `game.next(\"Yes\").value`\n",
          "D": " `game.next.value()` and `game.next.value(\"Yes\")`\n"
      },
      "answer": "C",
      "explanation": "\nA generator function \"pauses\" its execution when it sees the `yield` keyword. First, we have to let the function yield the string \"Do you love JavaScript?\", which can be done by calling `game.next().value`.\n\nEvery line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_\n\nWhen we call `game.next(\"Yes\").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `\"Yes\"` in this case. The value of the variable `answer` is now equal to `\"Yes\"`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged.\n"
  },
  {
      "question": "72. What's the output?",
      "code": "console.log(String.raw`Hello\\nworld`);",
      "options": {
          "A": " `Hello world!`\n",
          "B": " `Hello` <br />&nbsp; &nbsp; &nbsp;`world`\n",
          "C": " `Hello\\nworld`\n",
          "D": " `Hello\\n` <br /> &nbsp; &nbsp; &nbsp;`world`\n"
      },
      "answer": "C",
      "explanation": "\n`String.raw` returns a string where the escapes (`\\n`, `\\v`, `\\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:\n\n`` const path = `C:\\Documents\\Projects\\table.html` ``\n\nWhich would result in:\n\n`\"C:DocumentsProjects able.html\"`\n\nWith `String.raw`, it would simply ignore the escape and print:\n\n`C:\\Documents\\Projects\\table.html`\n\nIn this case, the string is `Hello\\nworld`, which gets logged.\n"
  },
  {
      "question": "73. What's the output?",
      "code": "async function getData() {\n  return await Promise.resolve('I made it!');\n}\n\nconst data = getData();\nconsole.log(data);",
      "options": {
          "A": " `\"I made it!\"`\n",
          "B": " `Promise {<resolved>: \"I made it!\"}`\n",
          "C": " `Promise {<pending>}`\n",
          "D": " `undefined`\n"
      },
      "answer": "C",
      "explanation": "\nAn async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.\n\nIf we wanted to get access to the resolved value `\"I made it\"`, we could have used the `.then()` method on `data`:\n\n`data.then(res => console.log(res))`\n\nThis would've logged `\"I made it!\"`\n"
  },
  {
      "question": "74. What's the output?",
      "code": "function addToList(item, list) {\n  return list.push(item);\n}\n\nconst result = addToList('apple', ['banana']);\nconsole.log(result);",
      "options": {
          "A": " `['apple', 'banana']`\n",
          "B": " `2`\n",
          "C": " `true`\n",
          "D": " `undefined`\n"
      },
      "answer": "B",
      "explanation": "\nThe `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `\"banana\"`) and had a length of `1`. After adding the string `\"apple\"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.\n\nThe `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.\n"
  },
  {
      "question": "75. What's the output?",
      "code": "const box = { x: 10, y: 20 };\n\nObject.freeze(box);\n\nconst shape = box;\nshape.x = 100;\n\nconsole.log(shape);",
      "options": {
          "A": " `{ x: 100, y: 20 }`\n",
          "B": " `{ x: 10, y: 20 }`\n",
          "C": " `{ x: 100 }`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\n`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).\n\nWhen we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` would return true, since the variable `shape` has a reference to a frozen object.\n\nSince `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.\n"
  },
  {
      "question": "76. What's the output?",
      "code": "const { firstName: myName } = { firstName: 'Lydia' };\n\nconsole.log(firstName);",
      "options": {
          "A": " `\"Lydia\"`\n",
          "B": " `\"myName\"`\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "D",
      "explanation": "\nBy using [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax we can unpack values from arrays, or properties from objects, into distinct variables:\n\n```javascript\nconst { firstName } = { firstName: 'Lydia' };\n// ES5 version:\n// var firstName = { firstName: 'Lydia' }.firstName;\n\nconsole.log(firstName); // \"Lydia\"\n```\n\nAlso, a property can be unpacked from an object and assigned to a variable with a different name than the object property:\n\n```javascript\nconst { firstName: myName } = { firstName: 'Lydia' };\n// ES5 version:\n// var myName = { firstName: 'Lydia' }.firstName;\n\nconsole.log(myName); // \"Lydia\"\nconsole.log(firstName); // Uncaught ReferenceError: firstName is not defined\n```\n\nTherefore, `firstName` does not exist as a variable, thus attempting to access its value will raise a `ReferenceError`.\n\n**Note:** Be aware of the `global scope` properties:\n\n```javascript\nconst { name: myName } = { name: 'Lydia' };\n\nconsole.log(myName); // \"lydia\"\nconsole.log(name); // \"\"  Browser e.g. Chrome\nconsole.log(name); // ReferenceError: name is not defined   NodeJS\n\n```\n\nWhenever Javascript is unable to find a variable within the _current scope_, it climbs up the [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) and searches for it and if it reaches the top-level scope, aka **Global scope**, and still doesn't find it, it will throw a `ReferenceError`.\n\n- In **Browsers** such as _Chrome_, `name` is a _deprecated global scope property_. In this example, the code is running inside _global scope_ and there is no user defined local variable for `name`, therefore it searches the predefined _variables/properties_ in the global scope which is in case of browsers, it searches through `window` object and it will extract the [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) value which is equal to an **empty string**.\n\n- In **NodeJS**, there is no such property on the `global` object, thus attempting to access a non-existent variable will raise a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined).\n"
  },
  {
      "question": "77. Is this a pure function?",
      "code": "function sum(a, b) {\n  return a + b;\n}",
      "options": {
          "A": " Yes\n",
          "B": " No\n"
      },
      "answer": "A",
      "explanation": "\nA pure function is a function that _always_ returns the same result, if the same arguments are passed.\n\nThe `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.\n"
  },
  {
      "question": "78. What is the output?",
      "code": "const add = () => {\n  const cache = {};\n  return num => {\n    if (num in cache) {\n      return `From cache! ${cache[num]}`;\n    } else {\n      const result = num + 10;\n      cache[num] = result;\n      return `Calculated! ${result}`;\n    }\n  };\n};\n\nconst addFunction = add();\nconsole.log(addFunction(10));\nconsole.log(addFunction(10));\nconsole.log(addFunction(5 * 2));",
      "options": {
          "A": " `Calculated! 20` `Calculated! 20` `Calculated! 20`\n",
          "B": " `Calculated! 20` `From cache! 20` `Calculated! 20`\n",
          "C": " `Calculated! 20` `From cache! 20` `From cache! 20`\n",
          "D": " `Calculated! 20` `From cache! 20` `Error`\n"
      },
      "answer": "C",
      "explanation": "\nThe `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.\n\nIf we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.\n\nWe call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.\n\nThe second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.\n\nThe third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.\n"
  },
  {
      "question": "79. What is the output?",
      "code": "const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];\n\nfor (let item in myLifeSummedUp) {\n  console.log(item);\n}\n\nfor (let item of myLifeSummedUp) {\n  console.log(item);\n}",
      "options": {
          "A": " `0` `1` `2` `3` and `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"`\n",
          "B": " `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"` and `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"`\n",
          "C": " `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"` and `0` `1` `2` `3`\n",
          "D": " `0` `1` `2` `3` and `{0: \"☕\", 1: \"💻\", 2: \"🍷\", 3: \"🍫\"}`\n"
      },
      "answer": "A",
      "explanation": "\nWith a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the \"keys\" of array elements, which are actually their indexes. You could see an array as:\n\n`{0: \"☕\", 1: \"💻\", 2: \"🍷\", 3: \"🍫\"}`\n\nWhere the keys are the enumerable properties. `0` `1` `2` `3` get logged.\n\nWith a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable \"item\" is equal to the element it's currently iterating over, `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"` get logged.\n"
  },
  {
      "question": "80. What is the output?",
      "code": "const list = [1 + 2, 1 * 2, 1 / 2];\nconsole.log(list);",
      "options": {
          "A": " `[\"1 + 2\", \"1 * 2\", \"1 / 2\"]`\n",
          "B": " `[\"12\", 2, 0.5]`\n",
          "C": " `[3, 2, 0.5]`\n",
          "D": " `[1, 1, 1]`\n"
      },
      "answer": "C",
      "explanation": "\nArray elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.\n\nThe element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.\n"
  },
  {
      "question": "81. What is the output?",
      "code": "function sayHi(name) {\n  return `Hi there, ${name}`;\n}\n\nconsole.log(sayHi());",
      "options": {
          "A": " `Hi there,`\n",
          "B": " `Hi there, undefined`\n",
          "C": " `Hi there, null`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\nBy default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.\n\nIn ES6, we can overwrite this default `undefined` value with default parameters. For example:\n\n`function sayHi(name = \"Lydia\") { ... }`\n\nIn this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`\n"
  },
  {
      "question": "82. What is the output?",
      "code": "var status = '😎';\n\nsetTimeout(() => {\n  const status = '😍';\n\n  const data = {\n    status: '🥑',\n    getStatus() {\n      return this.status;\n    },\n  };\n\n  console.log(data.getStatus());\n  console.log(data.getStatus.call(this));\n}, 0);",
      "options": {
          "A": " `\"🥑\"` and `\"😍\"`\n",
          "B": " `\"🥑\"` and `\"😎\"`\n",
          "C": " `\"😍\"` and `\"😎\"`\n",
          "D": " `\"😎\"` and `\"😎\"`\n"
      },
      "answer": "B",
      "explanation": "\nThe value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `\"🥑\"`.\n\nWith the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `\"😎\"`. When logging `this.status`, `\"😎\"` gets logged.\n"
  },
  {
      "question": "83. What is the output?",
      "code": "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nlet city = person.city;\ncity = 'Amsterdam';\n\nconsole.log(person);",
      "options": {
          "A": " `{ name: \"Lydia\", age: 21 }`\n",
          "B": " `{ name: \"Lydia\", age: 21, city: \"Amsterdam\" }`\n",
          "C": " `{ name: \"Lydia\", age: 21, city: undefined }`\n",
          "D": " `\"Amsterdam\"`\n"
      },
      "answer": "A",
      "explanation": "\nWe set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.\n\nNote that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.\n\nThen, we set `city` equal to the string `\"Amsterdam\"`. This doesn't change the person object: there is no reference to that object.\n\nWhen logging the `person` object, the unmodified object gets returned.\n"
  },
  {
      "question": "84. What is the output?",
      "code": "function checkAge(age) {\n  if (age < 18) {\n    const message = \"Sorry, you're too young.\";\n  } else {\n    const message = \"Yay! You're old enough!\";\n  }\n\n  return message;\n}\n\nconsole.log(checkAge(21));",
      "options": {
          "A": " `\"Sorry, you're too young.\"`\n",
          "B": " `\"Yay! You're old enough!\"`\n",
          "C": " `ReferenceError`\n",
          "D": " `undefined`\n"
      },
      "answer": "C",
      "explanation": "\nVariables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.\n"
  },
  {
      "question": "85. What kind of information would get logged?",
      "code": "fetch('https://www.website.com/api/user/1')\n  .then(res => res.json())\n  .then(res => console.log(res));",
      "options": {
          "A": " The result of the `fetch` method.\n",
          "B": " The result of the second invocation of the `fetch` method.\n",
          "C": " The result of the callback in the previous `.then()`.\n",
          "D": " It would always be undefined.\n"
      },
      "answer": "C",
      "explanation": "\nThe value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.\n"
  },
  {
      "question": "86. Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?",
      "code": "function getName(name) {\n  const hasName = //\n}",
      "options": {
          "A": " `!!name`\n",
          "B": " `name`\n",
          "C": " `new Boolean(name)`\n",
          "D": " `name.length`\n"
      },
      "answer": "A",
      "explanation": "\nWith `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.\n\nBy setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.\n\n`new Boolean(true)` returns an object wrapper, not the boolean value itself.\n\n`name.length` returns the length of the passed argument, not whether it's `true`.\n"
  },
  {
      "question": "87. What's the output?",
      "code": "console.log('I want pizza'[0]);",
      "options": {
          "A": " `\"\"\"`\n",
          "B": " `\"I\"`\n",
          "C": " `SyntaxError`\n",
          "D": " `undefined`\n"
      },
      "answer": "B",
      "explanation": "\nIn order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character `\"I'`, which gets logged.\n\nNote that this method is not supported in IE7 and below. In that case, use `.charAt()`.\n"
  },
  {
      "question": "88. What's the output?",
      "code": "function sum(num1, num2 = num1) {\n  console.log(num1 + num2);\n}\n\nsum(10);",
      "options": {
          "A": " `NaN`\n",
          "B": " `20`\n",
          "C": " `ReferenceError`\n",
          "D": " `undefined`\n"
      },
      "answer": "B",
      "explanation": "\nYou can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`. `num1 + num2` returns `20`.\n\nIf you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error.\n"
  },
  {
      "question": "89. What's the output?",
      "code": "// module.js\nexport default () => 'Hello world';\nexport const name = 'Lydia';\n\n// index.js\nimport * as data from './module';\n\nconsole.log(data);",
      "options": {
          "A": " `{ default: function default(), name: \"Lydia\" }`\n",
          "B": " `{ default: function default() }`\n",
          "C": " `{ default: \"Hello world\", name: \"Lydia\" }`\n",
          "D": " Global object of `module.js`\n"
      },
      "answer": "A",
      "explanation": "\nWith the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `\"Hello World\"`, and the named export is a variable called `name` which has the value of the string `\"Lydia\"`.\n\nThe `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.\n"
  },
  {
      "question": "90. What's the output?",
      "code": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst member = new Person('John');\nconsole.log(typeof member);",
      "options": {
          "A": " `\"class\"`\n",
          "B": " `\"function\"`\n",
          "C": " `\"object\"`\n",
          "D": " `\"string\"`\n"
      },
      "answer": "C",
      "explanation": "\nClasses are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:\n\n```javascript\nfunction Person(name) {\n  this.name = name;\n}\n```\n\nCalling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `\"object\"` for an instance. `typeof member` returns `\"object\"`.\n"
  },
  {
      "question": "91. What's the output?",
      "code": "let newList = [1, 2, 3].push(4);\n\nconsole.log(newList.push(5));",
      "options": {
          "A": " `[1, 2, 3, 4, 5]`\n",
          "B": " `[1, 2, 3, 5]`\n",
          "C": " `[1, 2, 3, 4]`\n",
          "D": " `Error`\n"
      },
      "answer": "D",
      "explanation": "\nThe `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`.\n\nThen, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.\n"
  },
  {
      "question": "92. What's the output?",
      "code": "function giveLydiaPizza() {\n  return 'Here is pizza!';\n}\n\nconst giveLydiaChocolate = () =>\n  \"Here's chocolate... now go hit the gym already.\";\n\nconsole.log(giveLydiaPizza.prototype);\nconsole.log(giveLydiaChocolate.prototype);",
      "options": {
          "A": " `{ constructor: ...}` `{ constructor: ...}`\n",
          "B": " `{}` `{ constructor: ...}`\n",
          "C": " `{ constructor: ...}` `{}`\n",
          "D": " `{ constructor: ...}` `undefined`\n"
      },
      "answer": "D",
      "explanation": "\nRegular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.\n"
  },
  {
      "question": "93. What's the output?",
      "code": "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nfor (const [x, y] of Object.entries(person)) {\n  console.log(x, y);\n}",
      "options": {
          "A": " `name` `Lydia` and `age` `21`\n",
          "B": " `[\"name\", \"Lydia\"]` and `[\"age\", 21]`\n",
          "C": " `[\"name\", \"age\"]` and `undefined`\n",
          "D": " `Error`\n"
      },
      "answer": "A",
      "explanation": "\n`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:\n\n`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`\n\nUsing the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray.\n\nThe first subarray is `[ \"name\", \"Lydia\" ]`, with `x` equal to `\"name\"`, and `y` equal to `\"Lydia\"`, which get logged.\nThe second subarray is `[ \"age\", 21 ]`, with `x` equal to `\"age\"`, and `y` equal to `21`, which get logged.\n"
  },
  {
      "question": "94. What's the output?",
      "code": "function getItems(fruitList, ...args, favoriteFruit) {\n  return [...fruitList, ...args, favoriteFruit]\n}\n\ngetItems([\"banana\", \"apple\"], \"pear\", \"orange\")",
      "options": {
          "A": " `[\"banana\", \"apple\", \"pear\", \"orange\"]`\n",
          "B": " `[[\"banana\", \"apple\"], \"pear\", \"orange\"]`\n",
          "C": " `[\"banana\", \"apple\", [\"pear\"], \"orange\"]`\n",
          "D": " `SyntaxError`\n"
      },
      "answer": "D",
      "explanation": "\n`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.\n\n```javascript\nfunction getItems(fruitList, favoriteFruit, ...args) {\n  return [...fruitList, ...args, favoriteFruit];\n}\n\ngetItems(['banana', 'apple'], 'pear', 'orange');\n```\n\nThe above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`\n"
  },
  {
      "question": "95. What's the output?",
      "code": "function nums(a, b) {\n  if (a > b) console.log('a is bigger');\n  else console.log('b is bigger');\n  return\n  a + b;\n}\n\nconsole.log(nums(4, 2));\nconsole.log(nums(1, 2));",
      "options": {
          "A": " `a is bigger`, `6` and `b is bigger`, `3`\n",
          "B": " `a is bigger`, `undefined` and `b is bigger`, `undefined`\n",
          "C": " `undefined` and `undefined`\n",
          "D": " `SyntaxError`\n"
      },
      "answer": "B",
      "explanation": "\nIn JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc.\n\nHere, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:\n\n```javascript\nreturn;\na + b;\n```\n\nThis means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!\n"
  },
  {
      "question": "96. What's the output?",
      "code": "class Person {\n  constructor() {\n    this.name = 'Lydia';\n  }\n}\n\nPerson = class AnotherPerson {\n  constructor() {\n    this.name = 'Sarah';\n  }\n};\n\nconst member = new Person();\nconsole.log(member.name);",
      "options": {
          "A": " `\"Lydia\"`\n",
          "B": " `\"Sarah\"`\n",
          "C": " `Error: cannot redeclare Person`\n",
          "D": " `SyntaxError`\n"
      },
      "answer": "B",
      "explanation": "\nWe can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `\"Sarah\"`.\n"
  },
  {
      "question": "97. What's the output?",
      "code": "const info = {\n  [Symbol('a')]: 'b',\n};\n\nconsole.log(info);\nconsole.log(Object.keys(info));",
      "options": {
          "A": " `{Symbol('a'): 'b'}` and `[\"{Symbol('a')\"]`\n",
          "B": " `{}` and `[]`\n",
          "C": " `{ a: \"b\" }` and `[\"a\"]`\n",
          "D": " `{Symbol('a'): 'b'}` and `[]`\n"
      },
      "answer": "D",
      "explanation": "\nA Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.\n\nThis is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also \"hide\" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).\n"
  },
  {
      "question": "98. What's the output?",
      "code": "const getList = ([x, ...y]) => [x, y]\nconst getUser = user => { name: user.name, age: user.age }\n\nconst list = [1, 2, 3, 4]\nconst user = { name: \"Lydia\", age: 21 }\n\nconsole.log(getList(list))\nconsole.log(getUser(user))",
      "options": {
          "A": " `[1, [2, 3, 4]]` and `SyntaxError`\n",
          "B": " `[1, [2, 3, 4]]` and `{ name: \"Lydia\", age: 21 }`\n",
          "C": " `[1, 2, 3, 4]` and `{ name: \"Lydia\", age: 21 }`\n",
          "D": " `Error` and `{ name: \"Lydia\", age: 21 }`\n"
      },
      "answer": "A",
      "explanation": "\nThe `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:\n\n`[x, ...y] = [1, 2, 3, 4]`\n\nWith the rest parameter `...y`, we put all \"remaining\" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.\n\nThe `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to instantly return an _object_ from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a `SyntaxError` gets thrown. \n\nThe following function would have returned an object:\n\n`const getUser = user => ({ name: user.name, age: user.age })`\n"
  },
  {
      "question": "99. What's the output?",
      "code": "const name = 'Lydia';\n\nconsole.log(name());",
      "options": {
          "A": " `SyntaxError`\n",
          "B": " `ReferenceError`\n",
          "C": " `TypeError`\n",
          "D": " `undefined`\n"
      },
      "answer": "C",
      "explanation": "\nThe variable `name` holds the value of a string, which is not a function, thus cannot invoke.\n\nTypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!\n\nSyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`.\nReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.\n"
  },
  {
      "question": "100. What's the value of output?",
      "code": "// 🎉✨ This is my 100th question! ✨🎉\n\nconst output = `${[] && 'Im'}possible!\nYou should${'' && `n't`} see a therapist after so much JavaScript lol`;",
      "options": {
          "A": " `possible! You should see a therapist after so much JavaScript lol`\n",
          "B": " `Impossible! You should see a therapist after so much JavaScript lol`\n",
          "C": " `possible! You shouldn't see a therapist after so much JavaScript lol`\n",
          "D": " `Impossible! You shouldn't see a therapist after so much JavaScript lol`\n"
      },
      "answer": "B",
      "explanation": "\n`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `\"Im'` gets returned.\n\n`\"\"` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.\n"
  },
  {
      "question": "101. What's the value of output?",
      "code": "const one = false || {} || null;\nconst two = null || false || '';\nconst three = [] || 0 || true;\n\nconsole.log(one, two, three);",
      "options": {
          "A": " `false` `null` `[]`\n",
          "B": " `null` `\"\"` `true`\n",
          "C": " `{}` `\"\"` `[]`\n",
          "D": " `null` `null` `true`\n"
      },
      "answer": "C",
      "explanation": "\nWith the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.\n\n`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.\n\n`(null || false || \"\")`: all operands are falsy values. This means that the last operand, `\"\"` gets returned. `two` is equal to `\"\"`.\n\n`([] || 0 || \"\")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.\n"
  },
  {
      "question": "102. What's the value of output?",
      "code": "const myPromise = () => Promise.resolve('I have resolved!');\n\nfunction firstFunction() {\n  myPromise().then(res => console.log(res));\n  console.log('second');\n}\n\nasync function secondFunction() {\n  console.log(await myPromise());\n  console.log('second');\n}\n\nfirstFunction();\nsecondFunction();",
      "options": {
          "A": " `I have resolved!`, `second` and `I have resolved!`, `second`\n",
          "B": " `second`, `I have resolved!` and `second`, `I have resolved!`\n",
          "C": " `I have resolved!`, `second` and `second`, `I have resolved!`\n",
          "D": " `second`, `I have resolved!` and `I have resolved!`, `second`\n"
      },
      "answer": "D",
      "explanation": "\nWith a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._\n\nWe can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently.\n\nIn the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty.\n\nWith the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.\n\nThis means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.\n"
  },
  {
      "question": "103. What's the value of output?",
      "code": "const set = new Set();\n\nset.add(1);\nset.add('Lydia');\nset.add({ name: 'Lydia' });\n\nfor (let item of set) {\n  console.log(item + 2);\n}",
      "options": {
          "A": " `3`, `NaN`, `NaN`\n",
          "B": " `3`, `7`, `NaN`\n",
          "C": " `3`, `Lydia2`, `[object Object]2`\n",
          "D": " `\"12\"`, `Lydia2`, `[object Object]2`\n"
      },
      "answer": "C",
      "explanation": "\nThe `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.\n\nThe first one is `1`, which is a numerical value. `1 + 2` returns the number 3.\n\nHowever, the second one is a string `\"Lydia\"`. `\"Lydia\"` is a string and `2` is a number: `2` gets coerced into a string. `\"Lydia\"` and `\"2\"` get concatenated, which results in the string `\"Lydia2\"`.\n\n`{ name: \"Lydia\" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `\"[object Object]\"`. `\"[object Object]\"` concatenated with `\"2\"` becomes `\"[object Object]2\"`.\n"
  },
  {
      "question": "104. What's its value?",
      "code": "Promise.resolve(5);",
      "options": {
          "A": " `5`\n",
          "B": " `Promise {<pending>: 5}`\n",
          "C": " `Promise {<fulfilled>: 5}`\n",
          "D": " `Error`\n"
      },
      "answer": "C",
      "explanation": "\nWe can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value (`<fulfilled>`). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.\n\nIn this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`.\n"
  },
  {
      "question": "105. What's its value?",
      "code": "function compareMembers(person1, person2 = person) {\n  if (person1 !== person2) {\n    console.log('Not the same!');\n  } else {\n    console.log('They are the same!');\n  }\n}\n\nconst person = { name: 'Lydia' };\n\ncompareMembers(person);",
      "options": {
          "A": " `Not the same!`\n",
          "B": " `They are the same!`\n",
          "C": " `ReferenceError`\n",
          "D": " `SyntaxError`\n"
      },
      "answer": "B",
      "explanation": "\nObjects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references.\n\nWe set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.\n\nThis means that both values have a reference to the same spot in memory, thus they are equal.\n\nThe code block in the `else` statement gets run, and `They are the same!` gets logged.\n"
  },
  {
      "question": "106. What's its value?",
      "code": "const colorConfig = {\n  red: true,\n  blue: false,\n  green: true,\n  black: true,\n  yellow: false,\n};\n\nconst colors = ['pink', 'red', 'blue'];\n\nconsole.log(colorConfig.colors[1]);",
      "options": {
          "A": " `true`\n",
          "B": " `false`\n",
          "C": " `undefined`\n",
          "D": " `TypeError`\n"
      },
      "answer": "D",
      "explanation": "\nIn JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig[\"colors\"]`).\n\nWith dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.\n"
  },
  {
      "question": "107. What's its value?",
      "code": "console.log('❤️' === '❤️');",
      "options": {
          "A": " `true`\n",
          "B": " `false`\n"
      },
      "answer": "A",
      "explanation": "\nUnder the hood, emojis are unicodes. The unicodes for the heart emoji is `\"U+2764 U+FE0F\"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.\n"
  },
  {
      "question": "108. Which of these methods modifies the original array?",
      "code": "const emojis = ['✨', '🥑', '😍'];\n\nemojis.map(x => x + '✨');\nemojis.filter(x => x !== '🥑');\nemojis.find(x => x !== '🥑');\nemojis.reduce((acc, cur) => acc + '✨');\nemojis.slice(1, 2, '✨');\nemojis.splice(1, 2, '✨');",
      "options": {
          "A": " `All of them`\n",
          "B": " `map` `reduce` `slice` `splice`\n",
          "C": " `map` `slice` `splice`\n",
          "D": " `splice`\n"
      },
      "answer": "D",
      "explanation": "\nWith `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead.\n\n`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.\n"
  },
  {
      "question": "109. What's the output?",
      "code": "const food = ['🍕', '🍫', '🥑', '🍔'];\nconst info = { favoriteFood: food[0] };\n\ninfo.favoriteFood = '🍝';\n\nconsole.log(food);",
      "options": {
          "A": " `['🍕', '🍫', '🥑', '🍔']`\n",
          "B": " `['🍝', '🍫', '🥑', '🍔']`\n",
          "C": " `['🍝', '🍕', '🍫', '🥑', '🍔']`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "A",
      "explanation": "\nWe set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.\n\nIn JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)\n\nThen, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.\n"
  },
  {
      "question": "110. What does this method do?",
      "code": "JSON.parse();",
      "options": {
          "A": " Parses JSON to a JavaScript value\n",
          "B": " Parses a JavaScript object to JSON\n",
          "C": " Parses any JavaScript value to JSON\n",
          "D": " Parses JSON to a JavaScript object only\n"
      },
      "answer": "A",
      "explanation": "\nWith the `JSON.parse()` method, we can parse JSON string to a JavaScript value.\n\n```javascript\n// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonNumber = JSON.stringify(4); // '4'\nJSON.parse(jsonNumber); // 4\n\n// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'\nJSON.parse(jsonArray); // [1, 2, 3]\n\n// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify({ name: 'Lydia' }); // '{\"name\":\"Lydia\"}'\nJSON.parse(jsonArray); // { name: 'Lydia' }\n```\n"
  },
  {
      "question": "111. What's the output?",
      "code": "let name = 'Lydia';\n\nfunction getName() {\n  console.log(name);\n  let name = 'Sarah';\n}\n\ngetName();",
      "options": {
          "A": " Lydia\n",
          "B": " Sarah\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "D",
      "explanation": "\nEach function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.\n\nIf we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`.\n\n```javascript\nlet name = 'Lydia';\n\nfunction getName() {\n  console.log(name);\n}\n\ngetName(); // Lydia\n```\n"
  },
  {
      "question": "112. What's the output?",
      "code": "function* generatorOne() {\n  yield ['a', 'b', 'c'];\n}\n\nfunction* generatorTwo() {\n  yield* ['a', 'b', 'c'];\n}\n\nconst one = generatorOne();\nconst two = generatorTwo();\n\nconsole.log(one.next().value);\nconsole.log(two.next().value);",
      "options": {
          "A": " `a` and `a`\n",
          "B": " `a` and `undefined`\n",
          "C": " `['a', 'b', 'c']` and `a`\n",
          "D": " `a` and `['a', 'b', 'c']`\n"
      },
      "answer": "C",
      "explanation": "\nWith the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).\n\nIn `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.\n\n```javascript\nconsole.log(one.next().value); // ['a', 'b', 'c']\nconsole.log(one.next().value); // undefined\n```\n\nIn `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned.\n\n```javascript\nconsole.log(two.next().value); // 'a'\nconsole.log(two.next().value); // 'b'\nconsole.log(two.next().value); // 'c'\nconsole.log(two.next().value); // undefined\n```\n"
  },
  {
      "question": "113. What's the output?",
      "code": "console.log(`${(x => x)('I love')} to program`);",
      "options": {
          "A": " `I love to program`\n",
          "B": " `undefined to program`\n",
          "C": " `${(x => x)('I love') to program`\n",
          "D": " `TypeError`\n"
      },
      "answer": "A",
      "explanation": "\nExpressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.\n"
  },
  {
      "question": "114. What will happen?",
      "code": "let config = {\n  alert: setInterval(() => {\n    console.log('Alert!');\n  }, 1000),\n};\n\nconfig = null;",
      "options": {
          "A": " The `setInterval` callback won't be invoked\n",
          "B": " The `setInterval` callback gets invoked once\n",
          "C": " The `setInterval` callback will still be called every second\n",
          "D": " We never invoked `config.alert()`, config is `null`\n"
      },
      "answer": "C",
      "explanation": "\nNormally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. \nAs long as there is a reference, the object won't get garbage collected. \nSince this is an interval, setting `config` to `null` or `delete`-ing `config.alert` won't garbage-collect the interval, so the interval will still be called. \nIt should be cleared with `clearInterval(config.alert)` to remove it from memory.\nSince it was not cleared, the `setInterval` callback function will still get invoked every 1000ms (1s).\n"
  },
  {
      "question": "115. Which method(s) will return the value `'Hello world!'`?",
      "code": "const myMap = new Map();\nconst myFunc = () => 'greeting';\n\nmyMap.set(myFunc, 'Hello world!');\n\n//1\nmyMap.get('greeting');\n//2\nmyMap.get(myFunc);\n//3\nmyMap.get(() => 'greeting');",
      "options": {
          "A": " 1\n",
          "B": " 2\n",
          "C": " 2 and 3\n",
          "D": " All of them\n"
      },
      "answer": "B",
      "explanation": "\nWhen adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.\n\n1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.\n3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.\n"
  },
  {
      "question": "116. What's the output?",
      "code": "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nconst changeAge = (x = { ...person }) => (x.age += 1);\nconst changeAgeAndName = (x = { ...person }) => {\n  x.age += 1;\n  x.name = 'Sarah';\n};\n\nchangeAge(person);\nchangeAgeAndName();\n\nconsole.log(person);",
      "options": {
          "A": " `{name: \"Sarah\", age: 22}`\n",
          "B": " `{name: \"Sarah\", age: 23}`\n",
          "C": " `{name: \"Lydia\", age: 22}`\n",
          "D": " `{name: \"Lydia\", age: 23}`\n"
      },
      "answer": "C",
      "explanation": "\nBoth the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object.\n\nFirst, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: \"Lydia\", age: 22 }`.\n\nThen, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: \"Lydia\", age: 22 }`.\n"
  },
  {
      "question": "117. Which of the following options will return `6`?",
      "code": "function sumValues(x, y, z) {\n  return x + y + z;\n}",
      "options": {
          "A": " `sumValues([...1, 2, 3])`\n",
          "B": " `sumValues([...[1, 2, 3]])`\n",
          "C": " `sumValues(...[1, 2, 3])`\n",
          "D": " `sumValues([1, 2, 3])`\n"
      },
      "answer": "C",
      "explanation": "\nWith the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.\n"
  },
  {
      "question": "118. What's the output?",
      "code": "let num = 1;\nconst list = ['🥳', '🤠', '🥰', '🤪'];\n\nconsole.log(list[(num += 1)]);",
      "options": {
          "A": " `🤠`\n",
          "B": " `🥰`\n",
          "C": " `SyntaxError`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\nWith the `+=` operand, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰.\n"
  },
  {
      "question": "119. What's the output?",
      "code": "const person = {\n  firstName: 'Lydia',\n  lastName: 'Hallie',\n  pet: {\n    name: 'Mara',\n    breed: 'Dutch Tulip Hound',\n  },\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n};\n\nconsole.log(person.pet?.name);\nconsole.log(person.pet?.family?.name);\nconsole.log(person.getFullName?.());\nconsole.log(member.getLastName?.());",
      "options": {
          "A": " `undefined` `undefined` `undefined` `undefined`\n",
          "B": " `Mara` `undefined` `Lydia Hallie` `ReferenceError`\n",
          "C": " `Mara` `null` `Lydia Hallie` `null`\n",
          "D": " `null` `ReferenceError` `null` `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\nWith the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.\n\n`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`.\n`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.\n`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`.\n`member.getLastName?.()`: variable `member` is non existent therefore a `ReferenceError` gets thrown!\n"
  },
  {
      "question": "120. What's the output?",
      "code": "const groceries = ['banana', 'apple', 'peanuts'];\n\nif (groceries.indexOf('banana')) {\n  console.log('We have to buy bananas!');\n} else {\n  console.log(`We don't have to buy bananas!`);\n}",
      "options": {
          "A": " We have to buy bananas!\n",
          "B": " We don't have to buy bananas\n",
          "C": " `undefined`\n",
          "D": " `1`\n"
      },
      "answer": "B",
      "explanation": "\nWe passed the condition `groceries.indexOf(\"banana\")` to the if-statement. `groceries.indexOf(\"banana\")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don't have to buy bananas!` gets logged.\n"
  },
  {
      "question": "121. What's the output?",
      "code": "const config = {\n  languages: [],\n  set language(lang) {\n    return this.languages.push(lang);\n  },\n};\n\nconsole.log(config.language);",
      "options": {
          "A": " `function language(lang) { this.languages.push(lang }`\n",
          "B": " `0`\n",
          "C": " `[]`\n",
          "D": " `undefined`\n"
      },
      "answer": "D",
      "explanation": "\nThe `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.\n"
  },
  {
      "question": "122. What's the output?",
      "code": "const name = 'Lydia Hallie';\n\nconsole.log(!typeof name === 'object');\nconsole.log(!typeof name === 'string');",
      "options": {
          "A": " `false` `true`\n",
          "B": " `true` `false`\n",
          "C": " `false` `false`\n",
          "D": " `true` `true`\n"
      },
      "answer": "C",
      "explanation": "\n`typeof name` returns `\"string\"`. The string `\"string\"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === \"object\"` and `false === \"string\"` both return`false`.\n\n(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)\n"
  },
  {
      "question": "123. What's the output?",
      "code": "const add = x => y => z => {\n  console.log(x, y, z);\n  return x + y + z;\n};\n\nadd(4)(5)(6);",
      "options": {
          "A": " `4` `5` `6`\n",
          "B": " `6` `5` `4`\n",
          "C": " `4` `function` `function`\n",
          "D": " `undefined` `undefined` `6`\n"
      },
      "answer": "A",
      "explanation": "\nThe `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`.\n"
  },
  {
      "question": "124. What's the output?",
      "code": "async function* range(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield Promise.resolve(i);\n  }\n}\n\n(async () => {\n  const gen = range(1, 3);\n  for await (const item of gen) {\n    console.log(item);\n  }\n})();",
      "options": {
          "A": " `Promise {1}` `Promise {2}` `Promise {3}`\n",
          "B": " `Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`\n",
          "C": " `1` `2` `3`\n",
          "D": " `undefined` `undefined` `undefined`\n"
      },
      "answer": "C",
      "explanation": "\nThe generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promise, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.\n"
  },
  {
      "question": "125. What's the output?",
      "code": "const myFunc = ({ x, y, z }) => {\n  console.log(x, y, z);\n};\n\nmyFunc(1, 2, 3);",
      "options": {
          "A": " `1` `2` `3`\n",
          "B": " `{1: 1}` `{2: 2}` `{3: 3}`\n",
          "C": " `{ 1: undefined }` `undefined` `undefined`\n",
          "D": " `undefined` `undefined` `undefined`\n"
      },
      "answer": "D",
      "explanation": "\n`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.\n"
  },
  {
      "question": "126. What's the output?",
      "code": "function getFine(speed, amount) {\n  const formattedSpeed = new Intl.NumberFormat('en-US', {\n    style: 'unit',\n    unit: 'mile-per-hour'\n  }).format(speed);\n\n  const formattedAmount = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD'\n  }).format(amount);\n\n  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;\n}\n\nconsole.log(getFine(130, 300))",
      "options": {
          "A": " The driver drove 130 and has to pay 300\n",
          "B": " The driver drove 130 mph and has to pay \\$300.00\n",
          "C": " The driver drove undefined and has to pay undefined\n",
          "D": " The driver drove 130.00 and has to pay 300.00\n"
      },
      "answer": "B",
      "explanation": "\nWith the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currency` in `USD` results in `$300.00`.\n"
  },
  {
      "question": "127. What's the output?",
      "code": "const spookyItems = ['👻', '🎃', '🕸'];\n({ item: spookyItems[3] } = { item: '💀' });\n\nconsole.log(spookyItems);",
      "options": {
          "A": " `[\"👻\", \"🎃\", \"🕸\"]`\n",
          "B": " `[\"👻\", \"🎃\", \"🕸\", \"💀\"]`\n",
          "C": " `[\"👻\", \"🎃\", \"🕸\", { item: \"💀\" }]`\n",
          "D": " `[\"👻\", \"🎃\", \"🕸\", \"[object Object]\"]`\n"
      },
      "answer": "B",
      "explanation": "\nBy destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value \"💀\" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the \"💀\" to it. When logging `spookyItems`, `[\"👻\", \"🎃\", \"🕸\", \"💀\"]` gets logged.\n"
  },
  {
      "question": "128. What's the output?",
      "code": "const name = 'Lydia Hallie';\nconst age = 21;\n\nconsole.log(Number.isNaN(name));\nconsole.log(Number.isNaN(age));\n\nconsole.log(isNaN(name));\nconsole.log(isNaN(age));",
      "options": {
          "A": " `true` `false` `true` `false`\n",
          "B": " `true` `false` `false` `false`\n",
          "C": " `false` `false` `true` `false`\n",
          "D": " `false` `true` `false` `true`\n"
      },
      "answer": "C",
      "explanation": "\nWith the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.\n\nWith the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.\n"
  },
  {
      "question": "129. What's the output?",
      "code": "const randomValue = 21;\n\nfunction getInfo() {\n  console.log(typeof randomValue);\n  const randomValue = 'Lydia Hallie';\n}\n\ngetInfo();",
      "options": {
          "A": " `\"number\"`\n",
          "B": " `\"string\"`\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "D",
      "explanation": "\nVariables declared with the `const` keyword are not referenceable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.\n"
  },
  {
      "question": "130. What's the output?",
      "code": "const myPromise = Promise.resolve('Woah some cool data');\n\n(async () => {\n  try {\n    console.log(await myPromise);\n  } catch {\n    throw new Error(`Oops didn't work`);\n  } finally {\n    console.log('Oh finally!');\n  }\n})();",
      "options": {
          "A": " `Woah some cool data`\n",
          "B": " `Oh finally!`\n",
          "C": " `Woah some cool data` `Oh finally!`\n",
          "D": " `Oops didn't work` `Oh finally!`\n"
      },
      "answer": "C",
      "explanation": "\nIn the `try` block, we're logging the awaited value of the `myPromise` variable: `\"Woah some cool data\"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `\"Oh finally!\"` gets logged.\n"
  },
  {
      "question": "131. What's the output?",
      "code": "const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];\n\nconsole.log(emojis.flat(1));",
      "options": {
          "A": " `['🥑', ['✨', '✨', ['🍕', '🍕']]]`\n",
          "B": " `['🥑', '✨', '✨', ['🍕', '🍕']]`\n",
          "C": " `['🥑', ['✨', '✨', '🍕', '🍕']]`\n",
          "D": " `['🥑', '✨', '✨', '🍕', '🍕']`\n"
      },
      "answer": "B",
      "explanation": "\nWith the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.\n"
  },
  {
      "question": "132. What's the output?",
      "code": "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n\n  increment() {\n    this.count++;\n  }\n}\n\nconst counterOne = new Counter();\ncounterOne.increment();\ncounterOne.increment();\n\nconst counterTwo = counterOne;\ncounterTwo.increment();\n\nconsole.log(counterOne.count);",
      "options": {
          "A": " `0`\n",
          "B": " `1`\n",
          "C": " `2`\n",
          "D": " `3`\n"
      },
      "answer": "D",
      "explanation": "\n`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.\n\n<img src=\"https://i.imgur.com/KxLlTm9.png\" width=\"400\">\n\nThen, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.\n\nWe invoke `counterTwo.increment()`, which sets `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.\n\n<img src=\"https://i.imgur.com/BNBHXmc.png\" width=\"400\">\n"
  },
  {
      "question": "133. What's the output?",
      "code": "const myPromise = Promise.resolve(Promise.resolve('Promise'));\n\nfunction funcOne() {\n  setTimeout(() => console.log('Timeout 1!'), 0);\n  myPromise.then(res => res).then(res => console.log(`${res} 1!`));\n  console.log('Last line 1!');\n}\n\nasync function funcTwo() {\n  const res = await myPromise;\n  console.log(`${res} 2!`)\n  setTimeout(() => console.log('Timeout 2!'), 0);\n  console.log('Last line 2!');\n}\n\nfuncOne();\nfuncTwo();",
      "options": {
          "A": " `Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!`\n",
          "B": " `Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! `\n",
          "C": " `Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!`\n",
          "D": " `Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!`\n"
      },
      "answer": "C",
      "explanation": "\nFirst, we invoke `funcOne`. On the first line of `funcOne`, we call the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop <a href=\"https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif\">here</a>.)\n\nThen we call the `myPromise` promise, which is an _asynchronous_ operation.\n\nBoth the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line 1!` gets logged first, since this is not an asynchonous operation. \n\nSince the callstack is not empty yet, the `setTimeout` function and promise in `funcOne` cannot get added to the callstack yet.\n\nIn `funcTwo`, the variable `res` gets `Promise` because `Promise.resolve(Promise.resolve('Promise'))` is equivalent to `Promise.resolve('Promise')` since resolving a promise just resolves it's value. The `await` in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so `Promise 2!` and then `Last line 2!` are logged and the `setTimeout` is sent to the Web API.\n\nThen the call stack is empty. Promises are _microtasks_ so they are resolved first when the call stack is empty so `Promise 1!` gets to be logged.\n\nNow, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log(\"Timeout 1!\")` from `funcOne`, and `() => console.log(\"Timeout 2!\")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout 1!`, and gets popped off the stack. Then, the second callback logs `Timeout 2!`, and gets popped off the stack.\n"
  },
  {
      "question": "134. How can we invoke `sum` in `sum.js` from `index.js?`",
      "code": "// sum.js\nexport default function sum(x) {\n  return x + x;\n}\n\n// index.js\nimport * as sum from './sum';",
      "options": {
          "A": " `sum(4)`\n",
          "B": " `sum.sum(4)`\n",
          "C": " `sum.default(4)`\n",
          "D": " Default aren't imported with `*`, only named exports\n"
      },
      "answer": "C",
      "explanation": "\nWith the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file:\n\n```javascript\n// info.js\nexport const name = 'Lydia';\nexport const age = 21;\nexport default 'I love JavaScript';\n\n// index.js\nimport * as info from './info';\nconsole.log(info);\n```\n\nThe following would get logged:\n\n```javascript\n{\n  default: \"I love JavaScript\",\n  name: \"Lydia\",\n  age: 21\n}\n```\n\nFor the `sum` example, it means that the imported value `sum` looks like this:\n\n```javascript\n{ default: function sum(x) { return x + x } }\n```\n\nWe can invoke this function, by calling `sum.default`\n"
  },
  {
      "question": "135. What's the output?",
      "code": "const handler = {\n  set: () => console.log('Added a new property!'),\n  get: () => console.log('Accessed a property!'),\n};\n\nconst person = new Proxy({}, handler);\n\nperson.name = 'Lydia';\nperson.name;",
      "options": {
          "A": " `Added a new property!`\n",
          "B": " `Accessed a property!`\n",
          "C": " `Added a new property!` `Accessed a property!`\n",
          "D": " Nothing gets logged\n"
      },
      "answer": "C",
      "explanation": "\nWith a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the `handler` object which contained two properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.\n\nThe first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.\n\nFirst, we added a new property `name` to the proxy object (`person.name = \"Lydia\"`). `set` gets invoked, and logs `\"Added a new property!\"`.\n\nThen, we access a property value on the proxy object, the `get` property on the handler object got invoked. `\"Accessed a property!\"` gets logged.\n"
  },
  {
      "question": "136. Which of the following will modify the `person` object?",
      "code": "const person = { name: 'Lydia Hallie' };\n\nObject.seal(person);",
      "options": {
          "A": " `person.name = \"Evan Bacon\"`\n",
          "B": " `person.age = 21`\n",
          "C": " `delete person.name`\n",
          "D": " `Object.assign(person, { age: 21 })`\n"
      },
      "answer": "A",
      "explanation": "\nWith `Object.seal` we can prevent new properties from being _added_, or existing properties to be _removed_.\n\nHowever, you can still modify the value of existing properties.\n"
  },
  {
      "question": "137. Which of the following will modify the `person` object?",
      "code": "const person = {\n  name: 'Lydia Hallie',\n  address: {\n    street: '100 Main St',\n  },\n};\n\nObject.freeze(person);",
      "options": {
          "A": " `person.name = \"Evan Bacon\"`\n",
          "B": " `delete person.address`\n",
          "C": " `person.address.street = \"101 Main St\"`\n",
          "D": " `person.pet = { name: \"Mara\" }`\n"
      },
      "answer": "C",
      "explanation": "\nThe `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.\n\nHowever, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.\n"
  },
  {
      "question": "138. What's the output?",
      "code": "const add = x => x + x;\n\nfunction myFunc(num = 2, value = add(num)) {\n  console.log(num, value);\n}\n\nmyFunc();\nmyFunc(3);",
      "options": {
          "A": " `2` `4` and `3` `6`\n",
          "B": " `2` `NaN` and `3` `NaN`\n",
          "C": " `2` `Error` and `3` `6`\n",
          "D": " `2` `4` and `3` `Error`\n"
      },
      "answer": "A",
      "explanation": "\nFirst, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.\n\nThen, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.\n"
  },
  {
      "question": "139. What's the output?",
      "code": "class Counter {\n  #number = 10\n\n  increment() {\n    this.#number++\n  }\n\n  getNum() {\n    return this.#number\n  }\n}\n\nconst counter = new Counter()\ncounter.increment()\n\nconsole.log(counter.#number)",
      "options": {
          "A": " `10`\n",
          "B": " `11`\n",
          "C": " `undefined`\n",
          "D": " `SyntaxError`\n"
      },
      "answer": "D",
      "explanation": "\nIn ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!\n"
  },
  {
      "question": "140. What's missing?",
      "code": "const teams = [\n  { name: 'Team 1', members: ['Paul', 'Lisa'] },\n  { name: 'Team 2', members: ['Laura', 'Tim'] },\n];\n\nfunction* getMembers(members) {\n  for (let i = 0; i < members.length; i++) {\n    yield members[i];\n  }\n}\n\nfunction* getTeams(teams) {\n  for (let i = 0; i < teams.length; i++) {\n    // ✨ SOMETHING IS MISSING HERE ✨\n  }\n}\n\nconst obj = getTeams(teams);\nobj.next(); // { value: \"Paul\", done: false }\nobj.next(); // { value: \"Lisa\", done: false }",
      "options": {
          "A": " `yield getMembers(teams[i].members)`\n",
          "B": " `yield* getMembers(teams[i].members)`\n",
          "C": " `return getMembers(teams[i].members)`\n",
          "D": " `return yield getMembers(teams[i].members)`\n"
      },
      "answer": "B",
      "explanation": "\nIn order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.\n\nIf we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.\n"
  },
  {
      "question": "141. What's the output?",
      "code": "const person = {\n  name: 'Lydia Hallie',\n  hobbies: ['coding'],\n};\n\nfunction addHobby(hobby, hobbies = person.hobbies) {\n  hobbies.push(hobby);\n  return hobbies;\n}\n\naddHobby('running', []);\naddHobby('dancing');\naddHobby('baking', person.hobbies);\n\nconsole.log(person.hobbies);",
      "options": {
          "A": " `[\"coding\"]`\n",
          "B": " `[\"coding\", \"dancing\"]`\n",
          "C": " `[\"coding\", \"dancing\", \"baking\"]`\n",
          "D": " `[\"coding\", \"running\", \"dancing\", \"baking\"]`\n"
      },
      "answer": "C",
      "explanation": "\nThe `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.\n\nFirst, we invoke the `addHobby` function, and pass `\"running\"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `hobbies`, `\"running\"` gets added to this empty array.\n\nThen, we invoke the `addHobby` function, and pass `\"dancing\"` as the value for `hobby`. We didn't pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.\n\nLast, we invoke the `addHobby` function, and pass `\"baking\"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.\n\nAfter pushing `dancing` and `baking`, the value of `person.hobbies` is `[\"coding\", \"dancing\", \"baking\"]`\n"
  },
  {
      "question": "142. What's the output?",
      "code": "class Bird {\n  constructor() {\n    console.log(\"I'm a bird. 🦢\");\n  }\n}\n\nclass Flamingo extends Bird {\n  constructor() {\n    console.log(\"I'm pink. 🌸\");\n    super();\n  }\n}\n\nconst pet = new Flamingo();",
      "options": {
          "A": " `I'm pink. 🌸`\n",
          "B": " `I'm pink. 🌸` `I'm a bird. 🦢`\n",
          "C": " `I'm a bird. 🦢` `I'm pink. 🌸`\n",
          "D": " Nothing, we didn't call any method\n"
      },
      "answer": "B",
      "explanation": "\nWe create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `\"I'm pink. 🌸\"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. The constructor in `Bird` gets called, and logs `\"I'm a bird. 🦢\"`.\n"
  },
  {
      "question": "143. Which of the options result(s) in an error?",
      "code": "const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];\n\n/* 1 */ emojis.push('🦌');\n/* 2 */ emojis.splice(0, 2);\n/* 3 */ emojis = [...emojis, '🥂'];\n/* 4 */ emojis.length = 0;",
      "options": {
          "A": " 1\n",
          "B": " 1 and 2\n",
          "C": " 3 and 4\n",
          "D": " 3\n"
      },
      "answer": "D",
      "explanation": "\nThe `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The properties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.\n"
  },
  {
      "question": "144. What do we need to add to the `person` object to get `[\"Lydia Hallie\", 21]` as the output of `[...person]`?",
      "code": "const person = {\n  name: \"Lydia Hallie\",\n  age: 21\n}\n\n[...person] // [\"Lydia Hallie\", 21]",
      "options": {
          "A": " Nothing, object are iterable by default\n",
          "B": " `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`\n",
          "C": " `*[Symbol.iterator]() { yield* Object.values(this) }`\n",
          "D": " `*[Symbol.iterator]() { for (let x in this) yield this }`\n"
      },
      "answer": "C",
      "explanation": "\nObjects aren't iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `[\"Lydia Hallie\", 21]`: `yield* Object.values(this)`.\n"
  },
  {
      "question": "145. What's the output?",
      "code": "let count = 0;\nconst nums = [0, 1, 2, 3];\n\nnums.forEach(num => {\n\tif (num) count += 1\n})\n\nconsole.log(count)",
      "options": {
          "A": " 1\n",
          "B": " 2\n",
          "C": " 3\n",
          "D": " 4\n"
      },
      "answer": "C",
      "explanation": "\nThe `if` condition within the `forEach` loop checks whether the value of `num` is truthy or falsy. Since the first number in the `nums` array is `0`, a falsy value, the `if` statement's code block won't be executed. `count` only gets incremented for the other 3 numbers in the `nums` array, `1`, `2` and `3`. Since `count` gets incremented by `1` 3 times, the value of `count` is `3`.\n"
  },
  {
      "question": "146. What's the output?",
      "code": "function getFruit(fruits) {\n\tconsole.log(fruits?.[1]?.[1])\n}\n\ngetFruit([['🍊', '🍌'], ['🍍']])\ngetFruit()\ngetFruit([['🍍'], ['🍊', '🍌']])",
      "options": {
          "A": " `null`, `undefined`, 🍌\n",
          "B": " `[]`, `null`, 🍌\n",
          "C": " `[]`, `[]`, 🍌\n",
          "D": " `undefined`, `undefined`, 🍌\n"
      },
      "answer": "D",
      "explanation": "\nThe `?` allows us to optionally access deeper nested properties within objects. We're trying to log the item on index `1` within the subarray that's on index `1` of the `fruits` array. If the subarray on index `1` in the `fruits` array doesn't exist, it'll simply return `undefined`. If the subarray on index `1` in the `fruits` array exists, but this subarray doesn't have an item on its `1` index, it'll also return `undefined`. \n\nFirst, we're trying to log the second item in the `['🍍']` subarray of `[['🍊', '🍌'], ['🍍']]`. This subarray only contains one item, which means there is no item on index `1`, and returns `undefined`.\n\nThen, we're invoking the `getFruits` function without passing a value as an argument, which means that `fruits` has a value of `undefined` by default. Since we're conditionally chaining the item on index `1` of`fruits`, it returns `undefined` since this item on index `1` does not exist. \n\nLastly, we're trying to log the second item in the `['🍊', '🍌']` subarray of `['🍍'], ['🍊', '🍌']`. The item on index `1` within this subarray is `🍌`, which gets logged.\n"
  },
  {
      "question": "147. What's the output?",
      "code": "class Calc {\n\tconstructor() {\n\t\tthis.count = 0 \n\t}\n\n\tincrease() {\n\t\tthis.count ++\n\t}\n}\n\nconst calc = new Calc()\nnew Calc().increase()\n\nconsole.log(calc.count)",
      "options": {
          "A": " `0`\n",
          "B": " `1`\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "A",
      "explanation": "\nWe set the variable `calc` equal to a new instance of the `Calc` class. Then, we instantiate a new instance of `Calc`, and invoke the `increase` method on this instance. Since the count property is within the constructor of the `Calc` class, the count property is not shared on the prototype of `Calc`. This means that the value of count has not been updated for the instance calc points to, count is still `0`.\n"
  },
  {
      "question": "148. What's the output?",
      "code": "const user = {\n\temail: \"e@mail.com\",\n\tpassword: \"12345\"\n}\n\nconst updateUser = ({ email, password }) => {\n\tif (email) {\n\t\tObject.assign(user, { email })\n\t}\n\n\tif (password) {\n\t\tuser.password = password\n\t}\n\n\treturn user\n}\n\nconst updatedUser = updateUser({ email: \"new@email.com\" })\n\nconsole.log(updatedUser === user)",
      "options": {
          "A": " `false`\n",
          "B": " `true`\n",
          "C": " `TypeError`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\nThe `updateUser` function updates the values of the `email` and `password` properties on user, if their values are passed to the function, after which the function returns the `user` object. The returned value of the `updateUser` function is the `user` object, which means that the value of updatedUser is a reference to the same `user` object that `user` points to. `updatedUser === user` equals `true`.\n"
  },
  {
      "question": "149. What's the output?",
      "code": "const fruit = ['🍌', '🍊', '🍎']\n\nfruit.slice(0, 1)\nfruit.splice(0, 1)\nfruit.unshift('🍇')\n\nconsole.log(fruit)",
      "options": {
          "A": " `['🍌', '🍊', '🍎']`\n",
          "B": " `['🍊', '🍎']`\n",
          "C": " `['🍇', '🍊', '🍎']`\n",
          "D": " `['🍇', '🍌', '🍊', '🍎']`\n"
      },
      "answer": "C",
      "explanation": "\nFirst, we invoke the `slice` method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji.\nThen, we invoke the `splice` method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of `['🍊', '🍎']`.\nAt last, we invoke the `unshift` method on the `fruit` array, which modifies the original array by adding the provided value, ‘🍇’ in this case,  as the first element in the array.  The fruit array now consists of `['🍇', '🍊', '🍎']`.\n"
  },
  {
      "question": "150. What's the output?",
      "code": "const animals = {};\nlet dog = { emoji: '🐶' }\nlet cat = { emoji: '🐈' }\n\nanimals[dog] = { ...dog, name: \"Mara\" }\nanimals[cat] = { ...cat, name: \"Sara\" }\n\nconsole.log(animals[dog])",
      "options": {
          "A": " `{ emoji: \"🐶\", name: \"Mara\" }`\n",
          "B": " `{ emoji: \"🐈\", name: \"Sara\" }`\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "B",
      "explanation": "\nObject keys are converted to strings. \n\nSince the value of  `dog` is an object,  `animals[dog]` actually means that we’re creating a new property called `\"object Object\"` equal to the new object. `animals[\"object Object\"]` is now equal to `{ emoji: \"🐶\", name: \"Mara\"}`.\n\n`cat` is also an object, which means that `animals[cat]` actually means that we’re overwriting the value of  `animals[\"object Object\"]` with the new cat properties. \n\nLogging `animals[dog]`, or actually `animals[\"object Object\"]` since converting the `dog` object to a string results `\"object Object\"`, returns the `{ emoji: \"🐈\", name: \"Sara\" }`.\n"
  },
  {
      "question": "151. What's the output?",
      "code": "const user = {\n\temail: \"my@email.com\",\n\tupdateEmail: email => {\n\t\tthis.email = email\n\t}\n}\n\nuser.updateEmail(\"new@email.com\")\nconsole.log(user.email)",
      "options": {
          "A": " `my@email.com`\n",
          "B": " `new@email.com`\n",
          "C": " `undefined`\n",
          "D": " `ReferenceError`\n"
      },
      "answer": "A",
      "explanation": "\nThe `updateEmail` function is an arrow function, and is not bound to the `user` object. This means that the `this` keyword is not referring to the `user` object, but refers to  the global scope in this case. The value of `email` within the `user` object does not get updated. When logging the value of `user.email`, the original value of `my@email.com` gets returned. \n"
  },
  {
      "question": "152. What's the output?",
      "code": "const promise1 = Promise.resolve('First')\nconst promise2 = Promise.resolve('Second')\nconst promise3 = Promise.reject('Third')\nconst promise4 = Promise.resolve('Fourth')\n\nconst runPromises = async () => {\n\tconst res1 = await Promise.all([promise1, promise2])\n\tconst res2  = await Promise.all([promise3, promise4])\n\treturn [res1, res2]\n}\n\nrunPromises()\n\t.then(res => console.log(res))\n\t.catch(err => console.log(err))",
      "options": {
          "A": " `[['First', 'Second'], ['Fourth']]`\n",
          "B": " `[['First', 'Second'], ['Third', 'Fourth']]`\n",
          "C": " `[['First', 'Second']]`\n",
          "D": " `'Third'`\n"
      },
      "answer": "D",
      "explanation": "\nThe `Promise.all` method runs the passed promises in parallel. If one promise fails, the `Promise.all` method _rejects_ with the value of the rejected promise. In this case, `promise3` rejected with the value `\"Third\"`. We’re catching the rejected value in the chained `catch` method on the `runPromises` invocation to catch any errors  within the `runPromises` function. Only `\"Third\"` gets logged, since `promise3` rejected with this value.\n"
  },
  {
      "question": "153. What should the value of `method` be to log `{ name: \"Lydia\", age: 22 }`? ",
      "code": "const keys = [\"name\", \"age\"]\nconst values = [\"Lydia\", 22]\n\nconst method = /* ?? */\nObject[method](keys.map((_, i) => {\n\treturn [keys[i], values[i]]\n})) // { name: \"Lydia\", age: 22 }",
      "options": {
          "A": " `entries`\n",
          "B": " `values`\n",
          "C": " `fromEntries`\n",
          "D": " `forEach`\n"
      },
      "answer": "C",
      "explanation": "\nThe `fromEntries` method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the `keys` array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index. \n\nThis creates an array of subarrays containing the correct keys and values, which results in `{ name: \"Lydia\", age: 22 }`\n"
  },
  {
      "question": "154. What's the output?",
      "code": "const createMember = ({ email, address = {}}) => {\n\tconst validEmail = /.+\\@.+\\..+/.test(email)\n\tif (!validEmail) throw new Error(\"Valid email pls\")\n\n\treturn {\n\t\temail,\n\t\taddress: address ? address : null\n\t}\n}\n\nconst member = createMember({ email: \"my@email.com\" })\nconsole.log(member)",
      "options": {
          "A": " `{ email: \"my@email.com\", address: null }`\n",
          "B": " `{ email: \"my@email.com\" }`\n",
          "C": " `{ email: \"my@email.com\", address: {} }`\n",
          "D": " `{ email: \"my@email.com\", address: undefined }`\n"
      },
      "answer": "C",
      "explanation": "\nThe default value of `address` is an empty object `{}`. When we set the variable `member` equal to the object returned by the `createMember` function, we didn't pass a value for address, which means that the value of address is the default empty object `{}`. An empty object is a truthy value, which means that the condition of the `address ? address : null` conditional returns `true`. The value of address is the empty object `{}`.\n"
  },
  {
      "question": "155. What's the output?",
      "code": "let randomValue = { name: \"Lydia\" }\nrandomValue = 23\n\nif (!typeof randomValue === \"string\") {\n\tconsole.log(\"It's not a string!\")\n} else {\n\tconsole.log(\"Yay it's a string!\")\n}",
      "options": {
          "A": " `It's not a string!`\n",
          "B": " `Yay it's a string!`\n",
          "C": " `TypeError`\n",
          "D": " `undefined`\n"
      },
      "answer": "B",
      "explanation": "\nThe condition within the `if` statement checks whether the value of `!typeof randomValue` is equal to `\"string\"`. The `!` operator converts the value to a boolean value. If the value is truthy, the returned value will be `false`, if the value is falsy, the returned value will be `true`. In this case, the returned value of `typeof randomValue` is the truthy value `\"number\"`, meaning that the value of `!typeof randomValue` is the boolean value `false`.\n\n`!typeof randomValue === \"string\"` always returns false, since we're actually checking `false === \"string\"`. Since the condition returned `false`, the code block of the `else` statement gets run, and `Yay it's a string!` gets logged.\n"
  }
]