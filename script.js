var url=document.getElementById("getlink")
var link = document.querySelector('.link')
function myFunction() 
{
axios({
    "method":"GET",
    "url":"https://shorturl-sfy-cx.p.rapidapi.com/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"shorturl-sfy-cx.p.rapidapi.com",
    "x-rapidapi-key":"b10a154f03msh0bc6f60bcdc6180p15afb1jsn14ea480096bf",
    "useQueryString":true
    },"params":{
    "url":url.value
    }
    })
    .then((response)=>{
      const shortlink = response.data
      link.innerHTML=shortlink
      const shortenedlink = document.querySelector('a')
      shortenedlink.setAttribute('target', '_blank');
      url.value = shortenedlink.innerText      
    })
    .catch((error)=>{
      console.log(error)
    })
}

function copyText(){
  url.select();;
  document.execCommand("copy");
}
