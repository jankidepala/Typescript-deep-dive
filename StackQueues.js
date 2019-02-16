//STACK - Last In, First Out (LIFO)
stack organizes data into sequential order.
push(data) adds data.
pop() removes the most recently added data.
//QUEUES - First In, First Out (FIFO)

function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    deletedData = this._storage[size];
 
    delete this._storage[size];
    this.size--;
 
    return deletedData;
};

function Stack() {
    this._size = 0;
    this._storage = {};
}
 
Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};
 
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};