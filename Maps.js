//Map is a collection of elements where each element is stored as a Key, value pair. 
//Map object can hold both objects and primitive values as either key or value. 
//When we iterate over the map object it returns the key,value pair in the same order as inserted.

var map1 = new Map([[1 , 2], [9 ,3 ] ,[4, 5]]); 
console.log(map1);

var map2 = new Map([["firstname" ,"sumit"],  
        ["lastname", "ghosh"], ["website", "geeksforgeeks"]]); 
  
console.log("Map2"); 
console.log(map2); 

var map3 = new Map([["whole numbers", [1 ,2 ,3 ,4]], 
            ["Decimal numbers" , [1.1, 1.2, 1.3, 1.4]], 
            ["negative numbers", [-1, -2, -3, -4]]]); 
  
console.log("Map3"); 
console.log(map3); 
  
var map4 = new Map([[["first name", "last name"], 
            ["sumit", "ghosh"]], 
            [["friend 1", "friend 2"], 
            ["sourav","gourav"]]]); 
  
console.log("Map4"); 
console.log(map4); 

map1.set(123, 234, 88)
console.log('ENTRIES >>>',map1.entries()); //
console.log('KEYS >>>', map1.keys());
console.log('VALUES >>>', map1.values());
console.log("LOOOOOOOOP")
for(var ele of map3) 
console.log(ele[0]); 
console.log("-----one parameter-----"); 
map4.forEach(printTwo); 

function printTwo(values, key)  
{ 
   console.log(key + "  ------> " + values); 
} 
console.dir(map1.size)

console.log(map1);
