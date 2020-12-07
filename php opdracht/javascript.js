function convertToJason(response){
    return response.json(); //zet het om van rauwe data naar json
}

function processData(data){
console.log(data); //testen of je data hebt ontvangen
   document.querySelector("#customername").innerHTML = data.naam;  //laat zien wat je hebt ontvangen
}

fetch("phpopdracht.php") //haal de data op
.then(convertToJason) 
.then(processData) 
.catch(function(err) {console.log('Fetch Error :-S', err)});


const input = document.querySelector('.input');
const newslist = document.querySelector('.news-list');
function retrieve(){
    
    const apikey = '27f3102a3bb449c38d6634face83fc7b'
    let topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
     console.log(url);
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data.articles);
        for(let i = 0; i < data.articles.length; i++ ){

            /*newslist.innerHTML += "<li><a href='" + data.articles[i].url + "'>" + data.articles[i].title + "</a></li>";*/
            
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href',data.articles[i].url);
            a.setAttribute('target', '_blank');
            a.textContent = data.articles[i].title;
            li.appendChild(a);
            newslist.appendChild(li);
        }
    })
}
