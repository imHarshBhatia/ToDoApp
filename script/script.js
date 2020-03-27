// alert("Script Linked.")

let addButton = document.getElementById('add')
let removeButton = document.getElementById('remove')
let removeAllButton = document.getElementById('removeAll')
let ul = document.getElementById('taskList')
let userIn = document.getElementsByName('inToDo') //if an id is assigned, the element can be pulled with getElementById()

//console.log(userIn)
//userIn[0].value = "ABC" //If pulled by Id, the value can directly be assigned as userIn.value = "ABC"

//console.log(addButton)
//console.log(removeButton)
//console.log(ul)


//let li = ul.children
//console.log(li)




addButton.addEventListener('click',addToDos)
removeButton.addEventListener('click', removeDoneToDos)
removeAllButton.addEventListener('click', removeAllToDos)

function addToDos() {



    let userValue = userIn[0].value
    
    if (userValue === null || userValue === '') {
        let insertErr = "The input was empty. Please input some task and then add it."
        let para = document.createElement('p')
        let textNode = document.createTextNode(insertErr)

        para.appendChild(textNode)

        document.body.appendChild(para)
        para.style.opacity = 1
        para.style.transition = "opacity 3s"

        setTimeout(() => {
            para.style.opacity = 0
            setTimeout(() => {
                document.body.removeChild(para)
            }, 3000);
            //document.body.removeChild(para)
        }, 2500);

        
    }
    
    else{
    let textNode = document.createTextNode(userValue)
    let li = document.createElement('li')
    //console.log(li) 
    let inputTag = document.createElement('input')
    inputTag.setAttribute('type','checkbox')
    let label = document.createElement('label')
    //console.log(inputTag)
    
    li.style.opacity = 0
    label.appendChild(textNode)
    li.appendChild(inputTag)
    li.appendChild(label)

    li.style.opacity = 0
    li.style.transition = "opacity 0.5s"
    ul.insertBefore(li,ul.children[0])

    setTimeout(() => {
        li.style.opacity = 1
    }, 500);

    userIn[0].value = ''

    console.log("After timeout")
    //ul.insertBefore(li,ul.children[0])
    //console.log(li)
    //console.log(ul.children[0])
    }
}



function removeDoneToDos() {

    let li = ul.children
    for (let i=0; i<li.length; i++) {
        //console.log(li[i].children[0].checked === true)
        console.log(`On element ${li[i].children[1].textContent}`)
        
        //Mylogic
        // if (li[i].children[0].checked === true) {
        //     console.log(`Removing element ${li[i].children[1].textContent}`)
        //     ul.removeChild(li[i--])
        // }

        while(li[i] && li[i].children[0].checked){ //li[i] actually checks if there is any value present, esle returns undefined, undfined logical and (&&) with any element results in false 
            console.log(`i is ${i} and length of listItem is ${li.length}`)
            console.log(`Removing element ${li[i].children[1].textContent}`)
            console.log(li)
            ul.removeChild(li[i])
        }

        // console.log(li[i])
        // console.log(li[i].children[0].checked)
        // console.log(`${li[i] && li[i].children[0].checked}`)
    }
}

function removeAllToDos() {
    let li = ul.children
    for (let i = 0; i < li.length; i++) {
        ul.removeChild(li[i--])
    }

}