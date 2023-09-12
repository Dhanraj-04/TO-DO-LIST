const item = document.getElementById("item")
const todolist=document.getElementById("to-dolist")

item.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        add(item.value)
        item.value=""
    }
})

const add= (item)=>{
    const listitem=document.createElement("li");
    listitem.innerHTML=`${item}
    <i class="fa-solid fa-xmark"></i> `;
    
    listitem.addEventListener("click",function(){
        listitem.classList.toggle("completed")
    })
    listitem.querySelector("i").addEventListener("click",function(){
        listitem.remove()
    })
    todolist.appendChild(listitem);
}