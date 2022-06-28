var point = {
    x: 10,
    y: 20,
    z: 15
}

console.log(point.x)
console.log(point.y)
console.log(point.x+point.z)

console.log(point['x'])
console.log(point['y'])
console.log(point['x']+point['z'])

var show1 = 'x'
var show2 = 'y'
console.log(point[show1]+point[show2])

// update value to object property

var point = {
    x: 10,
    y: 20,
    z: 15
}
point.x = 100
console.log(point)

// adding new property in object

var point = {
    x: 10,
    y: 20,
    z: 15
}

point.a = 200
console.log(point)

// delete property in object

var point = {
    p: 10, 
    q: 20,
    r: 30,
    s: 40
}
console.log(point)
delete point.s
console.log(point)
