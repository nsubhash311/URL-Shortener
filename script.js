    var url=document.getElementById("getlink")
function myFunction() 
{
    fetch(`https://shorturl-sfy-cx.p.rapidapi.com/?url=${url.value}`, 
    {
    "method": "GET",
    "headers": 
    {
        "x-rapidapi-host": "shorturl-sfy-cx.p.rapidapi.com",
        "x-rapidapi-key": "b10a154f03msh0bc6f60bcdc6180p15afb1jsn14ea480096bf"
    }
    })
.then(response => 
    {
    console.log(response);
    })
.catch(err => 
    {
    console.log(err);
    });
}
		