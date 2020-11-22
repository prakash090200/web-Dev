// 
class Book{
constructor(name,author,type){
 this.name=name;
 this.book=book;
 this.type=type;
}
}
class Display{
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
      let name=document.getElementById('bookName').value;
      let author=document.getElementById('author').value;
      let type;
      let fiction=document.getElementById('fiction');
      let programming=document.getElementById('programming');
      let cooking=document.getElementById('cooking');
      if(fiction.clicked){
          type=fiction.value;
      }
      else if(programming.clicked){
          type=programming.value;
      }
      else if(cooking.clicked){
          type=cooking.value;
      }
      let book=new Book(name,author,type);
      let display=new Display();
      display.added(book);
      display.cleared();

      e.preventDefault();    // everytime we submit the form it 
                            // get refresh to prevent that we can use preventDefault();
    
    
}