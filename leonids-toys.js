// const barbieDoll = {
//     id: 1,
//     name: "Barbie Doll",
//     manufacturer: "Matel",
//     price: 10.99,
//     electronic: false
// }

// const rayGun = {
//     id: 2,
//     name: "Ray Gun",
//     manufacturer: "Blammo",
//     price: 12.49,
//     electronic: true
// }

// const hotWheelsRaceTrack = {
//     id: 3,
//     name: "Hot Wheels Race Track",
//     manufacturer: "Matel",
//     price: 39.99,
//     electronic: true
// }

let toyToFind = 4

//toy array
let toys = [{
    id: 1,
    name: "Barbie Doll",
    manufacturer: "Matel",
    price: 10.99,
    electronic: false
}, 
{
    id: 2,
    name: "Ray Gun",
    manufacturer: "Blammo",
    price: 12.49,
    electronic: true
}, 
{
    id: 3,
    name: "Hot Wheels Race Track",
    manufacturer: "Matel",
    price: 39.99,
    electronic: true
}]

//new toys
const mrPoopPants = {
    id: 4,
    name: "Mr. Poop-Pants",
    manufacturer: "Blammo",
    price: 21.98,
    electronic: false
}

const nerfGun = {
    id: 5,
    name: "Nerf Gun",
    manufacturer: "Nerf Inc.",
    price: 24.99,
    electronic: false
}

//add new toys to array
toys.push(mrPoopPants)
toys.push(nerfGun)

//increase prices by 5%
for (let toy of toys) {
    toy.price = toy.price + toy.price * 0.05
}

//loop used to print catalog of toys with name, maker and price
for (let toy of toys) {
    if (toy.id === toyToFind) {
        console.log(`The ${toy.name} by ${toy.manufacturer} costs $${toy.price}.`)
    }
    
}

