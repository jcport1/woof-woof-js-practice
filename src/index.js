// const baseURL = "http://localhost:3000/pups" 

const dogBar = document.querySelector("#dog-bar")
const dogInfo = document.querySelector("#dog-info")

    // document.addEventListener('DOMContentLoaded', () => { 

    function fetchAllDogs(){
        fetch('http://localhost:3000/pups')
        //fetch request returns a promise 
        //then we're converting the data into json format
        .then(r => r.json())
        //returning data that is converted in json
        //most likely adding to DOM
        //automatically returns, you don't have to return unless you're using curly brackets
        //implicity passes whatever is being returned  
        // .then(data => addToDogBar(data))
    }
// })

    // function fetchSoloDog(dogId){

    //     return fetch(`http://localhost:3000/pups/${dogId}`)
    //     .then(r => r.json())

    // }

    function onDomLoadFunction() { 

        fetchAllDogs()
        .then(addDogNamesToBar)

    }

    function addDogNamesToBar(data){

        //grab dog bar
        //iterate through data
        data.forEach(dog => {
            //create span *each dog name
        let span = document.createElement("span")
          //add Dog name value to innerHTML of span
        span.innerHTML = dog.name 
        span.id = dog.id 
        // span.addEventListener("click", handleDogInfo) 
        //append child 
        dogBar.appendChild(span)
        })
    }

    // function handleDogInfo(event) {

    //     let dogId = parseInt(event.target.id)
    //     //call solo dog function *fetch info, get info back
    //     getSoloDog(dogId)
    //     .then(data => addSingleDogInfoToDom(data))

    // }

    // function addSingleDogInfoToDom(data) {

    //     //grab dog info element 
    //     //create children -> image tag(image of dog), h2(dog's name), button(good dog or bad dog based on boolean)
    //     let img = document.createElement("img")
    //     //img src =
    //     //attached dog info to newly created elements
    //     //append children to dog element
    // }

    onDomLoadFunction()
    

    
