console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(imgUrl)
    .then(res => res.json())
    .then(function(data){
        let dataArray = data.message
        dataArray.forEach(element => {
            let img = document.createElement('ul')
            img.innerHTML = `<img src="${element}">`
            document.querySelector('#dog_image_container').append(img)
        })
    })

///////////////////////////////////////////////////////////////////////

 const breedUrl = 'https://dog.ceo/api/breeds/list/all'

 fetch(breedUrl)
    .then(res => res.json())
    .then(function(data){
        let breedArray = Object.keys(data.message)
        let ul = document.createElement('ul')
        document.querySelector('#dog_breeds').append(ul)

        function arrayLoop(array){
            array.forEach(function(element){
                let li = document.createElement('li')
                ul.appendChild(li)
                li.innerHTML += element
                colorClick(li)
                li.style.cursor = "pointer"
            })
        }

        arrayLoop(breedArray);

        let drop = document.querySelector('#breed_dropdown')

        drop.addEventListener('change', function(){
            if(drop.value === "a"){
                ul.innerHTML = ""
                let aArray = breedArray.filter(word => word[0] === 'a')
                arrayLoop(aArray)
            } else if(drop.value === "b"){
                ul.innerHTML = ""
                let bArray = breedArray.filter(word => word[0] === 'b')
                arrayLoop(bArray)
            }else if(drop.value === "c"){
                ul.innerHTML = ""
                let cArray = breedArray.filter(word => word[0] === 'c')
                arrayLoop(cArray)
            } else if(drop.value === "d"){
                ul.innerHTML = ""
                let dArray = breedArray.filter(word => word[0] === 'd')
                arrayLoop(dArray)
            } else {
                ul.innerHTML = ""
                document.querySelector('#dog_breeds').append(ul)
                arrayLoop(breedArray)
            }
        })
    })

///////////////////////////////////////////////////////////////////////

function colorClick(li){
    li.addEventListener('click', function(){
        li.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    })
}