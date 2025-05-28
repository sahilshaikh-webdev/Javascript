const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc + currval
// }, 4)



// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc + currval
// }, 3)

//**********also this type  */

// const myTotal = myNums.reduce( (acc, curval) => acc+curval,4)

// console.log(myTotal)


const shoppingCart = [
    { itemName: "js Course",
      Price: 2999
    },
    { itemName: "py Course",
      Price: 999
    },
    { itemName: "Mobile dev Course",
      Price: 5999
    },
    { itemName: "Data Science Course",
      Price: 12999
    },
    { itemName: "AI Course",
      Price: 13999
    },
    { itemName: "cloud computing Course",
      Price: 7999
    },
] 

const TotalPrice = shoppingCart.reduce ( (acc, item) => (  acc + item.Price ),0)
// console.log(TotalPrice)