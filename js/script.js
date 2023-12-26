

var siteName = document.getElementById('siteName');
var siteUrl  =  document.getElementById('siteUrl');

var siteList =[] ;

if(localStorage.getItem('sites') != null ){
    siteList = JSON.parse(localStorage.getItem('sites'))
    displayData()
}

function addSite(){

    var site = {
        name:siteName.value ,
        url:siteUrl.value
    }

    siteList.push(site)
    localStorage.setItem('sites' , JSON.stringify(siteList))
    
    clearform()
    displayData()
    console.log(siteList);
   
}

 function clearform(){

    siteName.value ="";
    siteUrl.value= "";
 }

 function displayData(){
    var list="";

    for( var i = 0 ; i < siteList.length ; i++ ){

        list+= `<tr>
        <td> ${[i+1]} </td>
        <td> ${siteList[i].name}</td>
        <td> <a target="_blank" href="https://${siteList[i].url}" class="btn my-btn"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button class="btn btn-danger" onclick="DeleteSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`

    }
    document.getElementById("tableBody").innerHTML=list;
 }


 function DeleteSite(index){

    siteList.splice(index , 1)
    localStorage.setItem('sites' , JSON.stringify(siteList))
    
    displayData()
 }


 function validation(){
    var term = siteUrl.value ;
    document.getElementById("siteUrl").classList.add("is-invalid");

    if(term.toLowerCase().includes("www.") || term.toLowerCase().includes(".com")){
    
        document.getElementById("siteUrl").classList.remove("is-invalid");
        document.getElementById("siteUrl").classList.add("is-valid")
    }

 }
 