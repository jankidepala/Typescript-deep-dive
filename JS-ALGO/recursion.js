Although Javascript doesn't have tail call optimization, 
recursion is often the best way to go. And sincerely, 
except in edge cases, you're not going to get call stack overflows.

//Tail call optimization - function inside a function
f1() // has its own stack space
{
    f2d() //TCO has its own stack
}