// 

function book(name,author,type){
 this.name=name;
 this.book=book;
 this.type=type;
}
function display(){
    added(book){
       let target=document.getElementById('tableBody');
       let str= `<tr>
       <td>${book.name}</td>
       <td>${book.author}</td>
       <td>${book.type}</td> 
       </tr> `;
       target.innerHTML+=str;
    }

    cleared(){
        doc=document.getElementById('libraryForm');
        doc.reset();
    }
}
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',formsubmit);

function formsubmit(e){
      
      e.preventDefault();    // everytime we submit the form it 
                            // get refresh to prevent that we can use preventDefault();
    
    
}