doct = document.getElementById('adbu');
console.log(1);
doct.addEventListener('click', perform);
update();

function perform() {
    console.log(2);
     doc = document.getElementById('ta').value;
     document.getElementById('ta').value='';   //// to reset the value of text area
    if (localStorage.getItem('note') == null) {
        notearray = [];
        notearray.push([doc]);
        localStorage.setItem('note', JSON.stringify(notearray));
    }
    else {
         items = localStorage.getItem('note');
        notearray = JSON.parse([items]);
        notearray.push([doc]);
        localStorage.setItem('note', JSON.stringify(notearray));
    }
    
    update();
}
function update() {
    console.log(3);
     d = document.getElementById('notes');
    if (localStorage.getItem('note') == null) {
        notearray = [];
        localStorage.setItem('note', JSON.stringify(notearray));
    }
    else {
         ite = localStorage.getItem('note');
        notearray = JSON.parse(ite);
    }
    var str="";
    notearray.forEach((element, index) => {
         str+=`<div class=" notecard card my-3 mx-3" style="width: 18rem;">
                    <div class="card-body ">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <a href="#" id="${index}"class="btn btn-primary" onclick="deleted(this.id)">Delete</a>
                    </div>
                 </div>`;
        
    });
    d.innerHTML = str;
}
function deleted(value){
item=localStorage.getItem('note');
notearray=JSON.parse(item);
notearray.splice(value,1);
localStorage.setItem('note',JSON.stringify(notearray));

update();
}

//// search in seach bar
let searchtxt=document.getElementById('searchtxt');
searchtxt.addEventListener("input",searchnow);
function searchnow(){
    
let inputtxt=searchtxt.value.toLowerCase();
//console.log(inputtxt);
let card=document.getElementsByClassName('notecard');
Array.from(card).forEach(element=>{
let cardtxt=element.getElementsByTagName('p')[0].innerHTML;
if(cardtxt.includes(inputtxt)){
element.style.display="block";
}
else
element.style.display="none";
});

}