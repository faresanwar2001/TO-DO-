let userInput = document.getElementById('userInput');
let homeContent = document.getElementById('homeContent');
let searchInput = document.getElementById('searchInput');


let item =[]
if ( JSON.parse(localStorage.getItem("items")) != null) {
    item = JSON.parse(localStorage.getItem("items"));
    displayItems()
}


function addItem(){
    item.push(userInput.value)
    var allItems = JSON.stringify(item);
    localStorage.setItem('items', allItems);
    displayItems()
    clearItems()
    
}
function clearItems(){
     userInput.value = ""
}

function displayItems(){
    let box =``
    for (let i = 0; i < item.length; i++){
        box += `
        <div
                    class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
                    <p id="item" class="m-0 p-0">${item[i]}</p>
                    <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${i})"></i>
                </div>
        `
        

    }
    homeContent.innerHTML=box
}
function deleteItem(index){
    item.splice(index,1);
    displayItems()
    localStorage.setItem('items', JSON.stringify(item));

}
searchInput.addEventListener('input', function(event){
    searchValue = event.target.value;
 
})
function searchItems(searchValue){
    item.forEach((item,i)=>{
        if (item.toLowerCase().includes(searchValue.toLowerCase())){
            box += `
            <div
                        class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
                        <p id="item" class="m-0 p-0">${item[i]}</p>
                        <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${i})"></i>
                    </div>
            `
        }

    })
    homeContent.innerHTML=box
    
}