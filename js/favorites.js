let id=new URLSearchParams(window.location.search).get("id")
const forEl=document.querySelector(".for")
fetch(`http://localhost:3000/favorites`)
.then(res=>res.json())
.then(data=>{
   data.forEach(element => {
    forEl.innerHTML+=`
    <div class="js-item">
            <img src="${element.image}" alt="">
            <h1>${element.name}</h1>
            <p>${element.description}</p>
            <button class="btn-1" onclick="deleteEl(${element.id})">Delete</button>
        </div>
    `
   });
})
function deleteEl(id){
    axios.delete(`http://localhost:3000/favorites/${id}`)
}