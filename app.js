const templateCard = document.querySelector("#templateCard");
const rowCard = document.getElementById("rowCard");
const loading = document.getElementById("loading");

document.addEventListener("DOMContentLoaded", () => {
    
    consulta();
});


const consulta = async (url = "https://rickandmortyapi.com/api/character") => {
    
    try{        
            pintarLoading(true);
    
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            
            pintarDatos(data);
    }catch(error){

        console.log(error);
    }finally{
        pintarLoading(false);
    }
}

const pintarLoading = (estado) => {

    estado? loading.classList.remove("d-none") : loading.classList.add("d-none");
}


const pintarDatos = (data) => {

    rowCard.textContent = "";

    const fragment = document.createDocumentFragment();
    
    data.results.forEach((item) => {

        const clone = templateCard.content.cloneNode(true);

        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image);

        fragment.appendChild(clone);
    });
        
    rowCard.appendChild(fragment);

    pintarPaginacion(data.info);
}

const pintarPaginacion = (data) => {
    
    console.log(data);
    
    const paginacion = document.getElementById("paginacion");
    const templatePaginacion = document.getElementById("templatePaginacion");

    paginacion.textContent = "";
    
    const clone = templatePaginacion.content.cloneNode(true);

    if(data.prev){
        clone.querySelector(".btn-outline-secondary").disabled = false;
    }else{
        clone.querySelector(".btn-outline-secondary").disabled = true;
    }

    if(data.next){
        clone.querySelector('.btn-outline-primary').disabled = false;
    }else{
        clone.querySelector('.btn-outline-primary').disabled = true;
    }
    
    paginacion.appendChild(clone);

    paginacion.addEventListener('click', (e) => {
        if(e.target.matches(".btn-outline-primary")){
            
            if(data.next){
                consulta(data.next);
            }
        }
        if(e.target.matches(".btn-outline-secondary")){
            if(data.prev){
                consulta(data.prev);
            }
        }
    })
} 

