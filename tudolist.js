function addit(){
    console.log("update.....");
    item=document.getElementById("item").value;
    desc=document.getElementById("desc").value;
       if(localStorage.getItem("itemjson")==null){
         itemjsonArray =[];
         itemjsonArray.push([item,desc]);
         localStorage.setItem("itemjson",JSON.stringify(itemjsonArray));
        }
       else{
        itemjsonStr=localStorage.getItem("itemjson");
         itemjsonArray =JSON.parse([itemjsonStr]);
         itemjsonArray.push([item,desc]);
         localStorage.setItem("itemjson",JSON.stringify(itemjsonArray));
       }
       update();
  }
  function update(){
    if(localStorage.getItem("itemjson")==null){
         itemjsonArray =[];
         localStorage.setItem("itemjson",JSON.stringify(itemjsonArray));
    }
    else{
      itemjsonStr=localStorage.getItem("itemjson");
         itemjsonArray =JSON.parse([itemjsonStr]);
    }
   mytable=document.getElementById("mytable");
   var str="";
   itemjsonArray.forEach((element,index) => {
    str+=` <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button type="button" class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
  </tr> `;
    });
  mytable.innerHTML=str;
 }
  add=document.getElementById("add");
  add.addEventListener("click",addit);
  update();
  function deleted(itemindex){
    console.log("delete",itemindex);
      itemjsonStr=localStorage.getItem("itemjson");
         itemjsonArray =JSON.parse([itemjsonStr]);
         itemjsonArray.splice(itemindex,1);
         localStorage.setItem("itemjson",JSON.stringify(itemjsonArray));
        update();
    }
  function cleared(){
    if(confirm("Do u really want to clear?")){
    localStorage.clear();
    update();
  }
  }