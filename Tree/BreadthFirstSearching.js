var a = [1, 2]

a.unshift(4)
a.push(5)

//a.shift('t')
a.pop()
console.log(a)

var levelOrder = function (root) {
    if (!root) return [];
    var array = [];
    search(root, 1);

    function search(root, level) {
        if (root) {
            if (array.length < level) {
                array.push([]);
            }
            var arr = array[level - 1];
            arr.push(root.val);
            search(root.left, level + 1);
            search(root.right, level + 1);
        } else {
            return;
        }
    }

    return array;
};


console.log(levelOrder(''))

var a = (b, current) =>
{
    console.log(b)
current = current || 0;
    current+= b
    return a( 2)
}

a()