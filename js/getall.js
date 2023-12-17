let id=new URLSearchParams(window.location.search).get("id");
let js=document.querySelector(".js")
fetch(`http://localhost:3000/box/${id}`)
.then(res=>res.json())
.then(element=>{
        js.innerHTML+=`
        <div class="js-item">
            <img src="${element.image}" alt="">
            <h1>${element.name}</h1>
            <p>${element.description}</p>
        </div>
        `
    });
