
let countel = document.getElementById("count-id")
let count=0
function increment(){
count=count+1
countel.textContent=count
}


saveEl=document.getElementById("save-el")
function save(){
    let add = " "+count+ " - "
    saveEl.textContent+=add
    count=0
    countel.textContent=count
}