classData()
async function classData(){
let data = await fetch("http://localhost:9090/data")
data = await data.json()  
let res = data
displayData(res)
}


function displayData(classDataItems){
    classDataItems.map((elem)=>{
        let mainCardDiv = document.createElement('div');
        mainCardDiv.setAttribute("class", "card")

        let cardImg = document.createElement('img');
        cardImg.src = "https://wallpaperaccess.com/full/2200501.jpg"
        cardImg.setAttribute("class", "card-img-top")

        let cardiv = document.createElement('div');
        cardiv.setAttribute("class", "card-body")
        

        let cardtitle = document.createElement('h3');
        cardtitle.textContent = elem.Name
        cardtitle.setAttribute("class", "card-title")

        let cardPara = document.createElement('p');
        cardPara.textContent = elem.ShortDesc
        cardPara.setAttribute("class", "card-text")

        let cardBtn = document.createElement('button');
        cardBtn.textContent="View"
        cardBtn.setAttribute("class", "btn btn-outline-dark")

        cardiv.append(cardtitle, cardPara, cardBtn);
        mainCardDiv.append(cardImg, cardiv)
        document.querySelector(".cardContainer").append(mainCardDiv)
    })


}