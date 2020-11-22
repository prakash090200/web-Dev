// 
class Book{
constructor(name,author,type){
 this.name=name;
 this.author=author;
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
       let doc=document.getElementById('libraryForm');
        doc.reset();
    }
}
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',formsubmit);

function formsubmit(e){
    console.log("helo");
      let name=document.getElementById('bookName').value;
      let author=document.getElementById('author').value;
      let type;
      let fiction=document.getElementById('fiction');
      let programming=document.getElementById('programming');
      let cooking=document.getElementById('cooking');
      if(fiction.checked){
          type=fiction.value;
      }
      else if(programming.checked){
          type=programming.value;
      }
      else if(cooking.checked){
          type=cooking.value;
      }
      let book=new Book(name,author,type);
      console.log("helo1");
      let display=new Display();
      display.added(book);
      e.preventDefault();    // everytime we submit the form it 
                            // get refresh to prevent that we can use preventDefault();
      display.cleared();

     
    
}