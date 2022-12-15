document.querySelector("#form").addEventListener("submit",showUser);
document.querySelector("#form").style.backgroundColor="skyblue";
let arr=JSON.parse(localStorage.getItem("dataStore"))||[];
  displayUser(arr);
function showUser(event){
    event.preventDefault()
    let userObj={
        questTitle:document.querySelector("#title").value,
        questLink:document.querySelector("#link").value,
       questDiff:document.querySelector("#difficulty").value
    
}
arr.push(userObj);
displayUser(arr);
localStorage.setItem("dataStore",JSON.stringify(arr));
}
function displayUser(arr){
    document.querySelector("tbody").innerHTML="";
    arr.forEach(function(elem,index){
       
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
          td1.innerText=elem.questTitle;
        let td2=document.createElement("td");
           td2.innerText=elem.questLink;
        let td3=document.createElement("td");
           td3.innerText=elem.questDiff;
        let td4=document.createElement("td");
           if(td3.innerText=="Easy"){
               td4.innerText="No";
           }
           if(td3.innerText=="Medium" || td3.innerText=="Hard"){
               td4.innerText="Yes";
           }
           let td5=document.createElement("td");
           td5.innerText="DELETE";
           td5.style.cursor="pointer"
           td5.addEventListener("click",()=>{
            removeRow(index);
           })
           
           td5.style.backgroundColor="red";
        tr.append(td1,td2,td3,td4,td5);
        tr.style.backgroundColor="yellow";
        document.querySelector("tbody").append(tr);
        
    });
}
let removeRow = (i)=>{
     arr.splice(i,1);
     localStorage.setItem("dataStore",JSON.stringify(arr));
      displayUser(arr);
}