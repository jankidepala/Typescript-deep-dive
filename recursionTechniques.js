//Recursion is when a functions calls itself until it reaches a certain state

const categories = [
    { name: 'tech', parent: null },
    { name: 'hot_right_now', parent: 'tech' },
    { name: 'upcomming_releases', parent: 'tech' },
    { name: 'gadgets', parent: 'tech' },
    { name: 'news', parent: null },
    { name: 'social', parent: 'startups' },
    { name: 'europe', parent: 'news' },
    { name: 'asia', parent: 'news' },
    { name: 'events', parent: 'news' },
    { name: 'startups', parent: null },
    { name: 'funding', parent: 'startups' },
    { name: 'unicorns', parent: 'startups' },
    { name: 'venture_capital', parent: 'funding' },
    { name: 'crowdfunding', parent: 'funding' },
    { name: 'usa', parent: 'news' }
]

const arrangeCategories = (category, parent) => {
    let result = {}
    //    console.log(category.filter ( val => val.parent === parent))
    category.filter(val => val.parent !=null)
        .forEach(element => {
           console.log(category, element)
           result[element.name] = arrangeCategories(category, element.name)
        });
    // arrangeCategories('b')
    return result
}

console.log(arrangeCategories(categories, 'j'))