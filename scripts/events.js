console.log("hello world")
 //Exercise1


const showContent = event => console.log(event.target.textContent)
document.querySelector(".porcupine").onclick = showContent;

document.querySelector(".panther").onclick = (event) => console.log(event.target.tagName);

window.onclick = event => console.log(event.target);
 
 //Exercise2

 //window.onclick = event => console.log(event.target)


document.querySelector(".penguin").onclick = (event) => console.log (event.target.textContent.toUppercase())
 //window.onclick = event => console.log(event.target.textContent.toUpperCase())
 window.onclick = event =>console.log(event.target.textContent.toUppercase())


//Exercise3

const pelicanLove = () => {
    for (let i = 0; i < 3; i++) {
        console.log("I love pelicans!")
    }
}
document.querySelector(".pelican").addEventListener("click", pelicanLove)
 

const birdlove = animal => console.log(`${animal} is a pretty boy`);
 
document.querySelector(".parrot").addEventListener("click", event=> birdlove(event.target.textContent));
document.querySelector(".peacock").addEventListener("click",event =>birdlove(event.target.textContent));
 

//Exercise4
const notAnteater = () => console.log("I am NOT a anteater")
const notArmdillo = () => console.log("I am NOT a armadillo")
 
document.querySelector(".pangolin").addEventListener("click", notAnteater);
document.querySelector(".pangolin").addEventListener("click", notArmdillo);
 

// console.log(Array.from(document.querySelectorAll("tab"));
 
// let x = document.querySelectorAll(".tab")
// console.log(x)
// let tabs = Array.from(x);
 
// tabs.forEach(item => item.addEventListerner("click",() => alert(item.textcontent)))
 
 

//Exercise5 
const bestAnimal = animal => {console.log(`${animal}is the best!`);}

let animalTabs = Array.from(document.queryselectorAll(".tab"));
 
animalTabs.forEach( tab => tab.addEventListener("click",() => bestAnimal(tab.textcomntent)))


//Exercise 6
document.querySelector ("fotter p span").addEventListener("click", () => console.log("span"));
document.querySelector ("fotter").addEventListener("click", () => console.log("footer", true));
document.querySelector ("fotter p").addEventListener("click", () => console.log("paragraph"), true);



//Exercise 7
const setActive = (clickedTab)=>{
    animalTabs.forEach(tab => tab.classList.remove("active"))
    clickedTab.classList.add("active")
    document.querySelector(".header__page-title").textContent = clickedTab.textContent;
}
    animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

    // document.querySelector(".pangolin").addEventListener("mouseenter", ()=> console.log("Hover"));
    // document.querySelector(".pangolin").addEventListener("mouseleave", ()=> console.log("Stop the hover"));

 
let animalcontent = Array.from(document.querySelectorAll("content"));
 
const findcontent = classToMatch => {
    animalcontent.forEach(contentDiv =>{
        if(contentDiv.classList.Contaibns(classToMatch)) {
            contentDiv.classList.add("featured") 
        }
    })    
}
 
animalTabs.forEach(tab => tab.addEventListener("mouseenter", () => {
    findContent(tab.textContent,toLowerCase());
}));
animalTabs.forEach(tab => tab.addEventListener("mouseleave", () => {
    animalcontent.forEach(contentDiv => contentDiv.classList.remove("featured"));
}));



let serchInput =  document.querySelector("#search");
searchInput.addEventListener("change" , () => console.log(search.value))

const findTab = () => {
    animalTabs.forEach(tab => {
        if(tab.textContent.toLowerCase().include(search.value)){

        }else{

        }
    })
}
searchInput.addEventListener("input", findTab)
searchInput.addEventListener("change")
