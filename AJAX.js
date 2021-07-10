// Ubico el botón de mi HTML
const button = document.getElementById("data")

// Tras dar click :
button.addEventListener("click", () => {
// a) Creo el objeto para guardar al información
// Hago un if por las dudas que se abra en un navegador viejo y el objeto se deba crear de otra 
//forma   
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr= new ActiveXObject("Microsoft.XMLHTTP")

// b) Hago una petición GET, POST, PUT, DELETE

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// c) Decir que queremos que haga con los datos

// Escucho este evento para saber si terminé de recibir todos los datos.  
        xhr.addEventListener("load", (data)=> { 
// Covierto los datos a JSON para ser interpretados por JS.     
        const dataJSON = JSON.parse(data.target.response)
        console.log(dataJSON)
// Armo la estructura de datos
        const list= document.getElementById("list")
        const fragment= document.createDocumentFragment()
        for (const userInfo of dataJSON) {
            const listItem = document.createElement("li")
            listItem.textContent= `El id de ${userInfo.name} es ${userInfo.id}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    })
// d) Envío la petición

    xhr.send()

})

// ---------------------------------------------------------------------------------------

const form= document.getElementById("form")
const select= document.getElementById("select")

form.addEventListener("submit", (e)=> {
// Como queremos que el formulario se envíe una vez realicemos una determinada acción, coloco:   
    e.preventDefault()

    getData(select.children[select.selectedIndex].value);

})

const getData =(id)=> {
   
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr= new ActiveXObject("Microsoft.XMLHTTP");

    if (id === undefined) {

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    
    xhr.addEventListener("load", (data)=> {
        const dataJSON = JSON.parse(data.target.response)
      
        const fragment= document.createDocumentFragment()
        for (const userInfo of dataJSON) {
            const option = document.createElement("option")
            option.setAttribute("value", userInfo.id)
            option.textContent= userInfo.name
            fragment.appendChild(option)
        }
        select.appendChild(fragment)
    })
    

    xhr.send()
    } else {

        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    
    xhr.addEventListener("load", (data)=> {
        const dataJSON = JSON.parse(data.target.response)
        const selectTable= document.getElementById("letablo")
        const fragment= document.createDocumentFragment()
       
        for (const userInfo of dataJSON) {
    
         if (userInfo.id == id) {
            const row = document.createElement("tr")
            const dataId = document.createElement("td")
            const dataName = document.createElement("td")
            const dataEmail = document.createElement("td")
            const dataAddress = document.createElement("td")
    
            dataId.textContent= userInfo.id
            dataName.textContent= userInfo.name
            dataEmail.textContent= userInfo.email
            dataAddress.textContent= userInfo.address.street
            
            row.appendChild(dataId)
            row.appendChild(dataName)
            row.appendChild(dataEmail)
            row.appendChild(dataAddress)

            fragment.appendChild(row)
            
            if (selectTable.children[1]) {
            selectTable.removeChild(selectTable.children[1])}
            selectTable.appendChild(fragment)
            
        }
    }
       
    })
    xhr.send()
    }
    
}

getData()


