const click_list=document.querySelector("#click-list")
const list=document.querySelector(".list")
let page=8;

click_list.addEventListener("click",()=>{
    if(list.style.display !=="block"){
     list.style.display="block";
    }
    else{
        list.style.display="none";
    }
})

const js=document.querySelector(".js")

function LoadDataJson(){
fetch(`http://localhost:3000/box/`)
.then(res=>res.json())
.then(data=>{
    axios.get('http://localhost:3000/favorites')
            .then(fav => {
                data.slice(page-8,page).forEach(element => {
                    if (fav.data.find(f => f.id === element.id)){
            js.innerHTML+=`
            <div class="js-item">
            <i class="bi bi-heart-fill" style="color:red" onClick='removeFromFav(${element.id})'></i>
            <img src="${element.image}" alt="">
            <h1>${element.name}</h1>
            <p>${element.description}</p>
            <button class="btn-3" onclick="GetAll(${element.id})">GetAll</button>
            <button class="btn-1" onclick="deleteEl(${element.id})">Delete</button>
            <button class="btn-2" onclick="updateEl(${element.id})">Update</button>
        </div>
            `
     } 
    else{
        js.innerHTML+=`
        <div class="js-item">
        <i class="bi bi-heart" onClick='addToFav(${element.id})'></i>
        <img src="${element.image}" alt="">
        <h1>${element.name}</h1>
        <p>${element.description}</p>
        <button class="btn-3" onclick="GetAll(${element.id})">GetAll</button>
        <button class="btn-1" onclick="deleteEl(${element.id})">Delete</button>
        <button class="btn-2" onclick="updateEl(${element.id})">Update</button>
    </div>
        `
    }})
    } )
   
})
}
LoadDataJson();
let load=document.querySelector(".mean")
load.addEventListener("click",()=>{
page+=8;
LoadDataJson();

})
 
function GetAll(id){
    window.location=`getall.html?id=${id}`
}

function deleteEl(id){
    axios.delete(`http://localhost:3000/box/${id}`)
    window.location.reload()
}
function updateEl(id) {
    window.location = `update.html?id=${id}`
}
let add=document.querySelector("#add")
add.addEventListener("click",()=>{
    window.location="./add.html?id";

})

function removeFromFav(id){
axios.delete(`http://localhost:3000/favorites/${id}`)
}
function addToFav(id){
    fetch(`http://localhost:3000/box/${id}`)
    .then(res=>res.json())
    .then(data=>{
        axios.post(`http://localhost:3000/favorites/`,data)
    })
}

let click=document.querySelector("#click")
click.addEventListener("click",()=>{
    window.location=`./favorites.html?id`
})


