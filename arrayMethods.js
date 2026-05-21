let ar=[1,5,6.9,'Java',`Apple`,0,null,true,'playwright']
console.log(ar)
//Use push() to add elements into an array
ar.push('testleaf')
console.log(ar)
//Use pop() to remove the last element
ar.pop()
console.log(ar)
//Use shift() to remove the first element
ar.shift()
console.log(ar)
//Use unshift() to add an element at the beginning
ar.unshift('testleaf')
console.log(ar)
//Use includes() to check whether an element exists
console.log(ar.includes('playwright'))
console.log(ar.includes('apple'))
//Use indexOf() to find the position of an element
console.log(ar.indexOf('Java'))
console.log(ar.indexOf(6))
console.log(ar.indexOf(`apple`))

//Use join() to convert array into string
console.log(ar.join())

//Use reverse() to reverse the array
console.log(ar.reverse())
//Use sort() to sort the array
console.log(ar.sort())
