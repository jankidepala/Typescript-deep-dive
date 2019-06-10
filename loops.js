function tt() {
    var a = [34, 77, 90]
    var i = 0;
    for (; i < 5;) {
        console.log(i)
        i++;
    }

    for (x in a) {
        console.log("A", x, a)
    }

    var n = 0;
    for (; n < 4; n++) {
        console.log(n)
    }

    while (i < 2)
        console.log('true')

    do {
        i++;
        console.log("KKK", i)
    } while (i < 10)

    var h = 0;
    for (; a[h];) {
        console.log(a[h])
        h++;
    }


}

tt();