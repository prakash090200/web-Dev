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
    validate(book){
        if(book.name.length<2 || book.author.length<2)
        return false;
        else
        return true;
    }
    show(alert,message){
        let mess=document.getElementById('messaged');
        let boldtext;
        if(alert==='success'){
        boldtext='Success';
        }
        else{
        boldtext='!Error';
        }
        mess.innerHTML= ` <div class="alert alert-${alert} alert-dismissible fade show" role="alert">
                                <strong>${boldtext} : </strong>${message}.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                          </div> `;
        setTimeout(()=>{
           mess.innerHTML='';
        },3000);
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
      if(display.validate(book)){
          //console.log('enter');
        display.added(book);
        display.cleared();
        display.show("success","You book is added to our library succesfully");
                                                                                                               
      }
      else{
          display.show("danger","Please Enter the details before adding");
      }
      e.preventDefault();
      

     
    
}