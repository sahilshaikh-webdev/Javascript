// const title = document.getElementById('title')
// const title = document.getElementById('title').id
// const title = document.getElementById('title').class
// const title = document.getElementById('title').className
// const title = document.getElementById('title').getAttribute('id')
// const title = document.getElementById('title').setAttribute('class, test heading')

// document.getElementById('title')
const title = document.getElementById('title')

title.style.backgroundColor = 'green'
title.style.padding = '16px'
title.style.borderRadius = '7px'

title.textContent// return all the content 
title.innerText// return only the visual content
title.innerHTML//return all the contents with tags

document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type=password')
document.querySelector('p:first-child')

const myul = document.querySelector('ul')

const turnGreen = myul.querySelector('li')

// turnGreen.style.backgroundColor = 'red'
// turnGreen.style.padding = '15px'
// turnGreen.style.innerText= '5'

// const tempLiList = document.querySelectorAll('li')
// console.log(tempLiList)// this will give the node list of li this is as like array but not a array

// tempLiList.style.color = "green"//this is not work on node.lis

// tempLiList[0].style.color = 'green' //this is right way

// tempLiList.forEach( function(length) {
//     length.style.backgroundColor = "blue"
// })

const myH1 = document.querySelectorAll('h1')

// myH1[0].style.color = "green"


const tempClassList = document.getElementsByClassName('list-item')// this will give the HTMLCollection this is different from node.lis

// tempClassList.forEach( function(li) {
//     console.log(li)
// } ) this will not work directly in HTMLCollection

const myConvertedArray = Array.from(tempClassList) // we need to concert it into array
console.log((myConvertedArray))
myConvertedArray.forEach( function(li) {
        li.style.color = 'orange'
})// now this will work





