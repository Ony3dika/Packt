let ebooks = document.querySelector('.ebooks'),
    evids = document.querySelector('.evids'),
    pvc = document.querySelector('.pvc'),
    exp = document.querySelector('.exp');


///EBOOK API///

document.addEventListener("DOMContentLoaded", run)

function run(){
    
    fetch("ebooks.json")
        .then(function(data){
            return data.json()
        })

        .then(function(books,title,price,img){
            books.forEach((ebook)=>{
              let div = document.createElement('div')
              div.classList.add("col-xl-2", "col-10", "ms-3", "mx-xl-3","mt-4")
              div.innerHTML=`
                <img class="w-100" src="${ebook.img}">

                <p><b>${ebook.title}</b></p>

                <h4><b>${ebook.price}</b></h4>

                <div class="text-center"><button type="button" class="btn px-5"><b>View Details</b></button></div>
              `

              ebooks.append(div)
            })
        })
}

///EVID API///

document.addEventListener("DOMContentLoaded", video)

function video(){
    
    fetch("evids.json")
        .then(function(data){
            return data.json()
        })

        .then(function(books,title,price,img){
            books.forEach((evid)=>{
              let div = document.createElement('div')
              div.classList.add("col-xl-2", "col-10", "ms-3", "mx-xl-3","mt-4")
              div.innerHTML=`
                <img class="w-100" src="${evid.img}">

                <p><b>${evid.title}</b></p>

                <h4><b>${evid.price}</b></h4>

                <div class="text-center"><button type="button" class="btn px-5"><b>View Details</b></button></div>
              `

              evids.append(div)
            })
        })
}

///PVC API///

document.addEventListener("DOMContentLoaded", courses)


function courses(){
    
    fetch("pvc.json")
        .then(function(data){
            return data.json()
        })

        .then(function(books,title,price,img){
            books.forEach((pvcs)=>{
              let div = document.createElement('div')
              div.classList.add("col-xl-2", "col-10", "ms-3", "mx-xl-3","mt-4")
              div.innerHTML=`
                <img class="w-100" src="${pvcs.img}">

                <p><b>${pvcs.title}</b></p>

                <h4><b>${pvcs.price}</b></h4>

                <div class="text-center"><button type="button" class="btn px-5"><b>View Details</b></button></div>
              `

              pvc.append(div)
            })
        })
}
