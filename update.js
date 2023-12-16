let id=new URLSearchParams(window.location.search).get("id")
const form=document.querySelector("form")
const modalImage=document.querySelector(".modalImage");
const name=document.querySelector("#name")
const description=document.querySelector("#description")
const file=document.querySelector('input[type="file"]')

fetch(`http://localhost:3000/box/${id}`)
.then(res=>res.json())
.then(data=>{
    modalImage.style.width="50px";
    modalImage.style.height="50px";
    modalImage.src = data.image
    name.value = data.name
    description.value = data.description
})

file.addEventListener("input",(e)=>{
    let file=e.target.files[0];
    if(file){
        let reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
            modalImage.src = reader.result;
        }
    }
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    axios.patch(`http://localhost:3000/box/${id}`,{
       image: modalImage.src,
       name: name.value,
       description: description.value
    })
    .then(res=>{
        window.location="index.html"
    })
})