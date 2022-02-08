const resultimg=document.getElementsByClassName("result");

async function getimg(){
    resultimg.innerHTML="loading";
    try{
          let res= await fetch("https://biriyani.anoram.com/get");
           let resultdata=await res.json();
        console.log(resultdata.image);
           resultimg.innerHTML=`<img src="${resultdata.image}" alt="Biryani image" width="600" height="600">`;
        }
        catch(error){
          resultimg.innerHTML="Not Found";
        }
}