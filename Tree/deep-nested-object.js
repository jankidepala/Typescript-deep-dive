const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}
var log = console.log.bind(console);

//Oliver Steele’s Nested Object Access Pattern
const name = ((user || {}).personalInfo || {}).name;
log(name)

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}// pass in your object structure as array elements
const name = getNestedObject(user, ['personalInfo', 'name']);// to access nested array, just pass in array index as an element the path array.
const city = getNestedObject(user, ['personalInfo', 'addresses', 0, 'city']);
// this will return the city from the first address item.