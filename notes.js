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
         str+=`<div class="card my-3 mx-3" style="width: 18rem;">
                    <div class="card-body ">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <a href="#" id="${index}"class="btn btn-primary" onclick="deleted(this.id)">Delete</a>
                    </div>
                 </div>`;
        
    });
    d.innerHTML = str;
}