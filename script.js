const addtask = document.querySelector("#addtask");
const add = document.querySelector("#add");
const inPut = document.querySelector("#input");
const task = document.querySelector("#task");
const remain = document.querySelector("#tasK")
let reMain = 0
remain.innerHTML=reMain+ " tasks remaining"

add.addEventListener("click",function(){
    if(inPut.value===""){
        return
    }

    const widget = document.createElement('div')
    const reMove=document.createElement('button')
        reMove.innerHTML="remove";
    const edit = document.createElement('button')
        edit.innerHTML="edit";

    const setLineThrough = { false: '', true: 'line-through' };
    let doLine = false;
    reMain+=1 
    remain.innerHTML=reMain+ " tasks remaining"
    
    const todo=document.createElement("li");
    todo.innerHTML=inPut.value;
    widget.appendChild(reMove);
    widget.appendChild(edit);
    todo.appendChild(widget);


    todo.addEventListener("click",function(){
        console.log(setLineThrough[!doLine]);
        todo.style.textDecoration=setLineThrough[!doLine] 
        doLine = !doLine
    })
    reMove.addEventListener('click',function(){
        todo.remove();
        reMain-=1 
        remain.innerHTML=reMain+ " tasks remaining"
    })
    edit.addEventListener('click',function(){
        inPut.value=todo.firstChild.textContent
        console.log(todo.firstChild.textContent)
        todo.remove()
        reMain-=1 
        remain.innerHTML=reMain+ " tasks remaining"

    })


    task.appendChild(todo);
    inPut.value=""
})

