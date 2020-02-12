"use strict";
for (var i = 1; i <= 100; i++) {
    var t_1 = i % 3 == 0, f = i % 5 == 0;
    console.log(t_1 && f ? "FizzBuzz"
        : t_1 ? "Fizz"
            : f ? "Buzz"
                : i);
}
