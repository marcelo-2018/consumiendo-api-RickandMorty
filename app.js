const templateCard = document.querySelector("#templateCard");
const rowCard = document.getElementById("rowCard");
const loading = document.getElementById("loading");

document.addEventListener("DOMContentLoaded", () => {
    
    consulta();
});

const url = "https://rickandmortyapi.com/api/character";

const consulta = async () => {
    
    try{        
            pintarLoading(true);
    
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            
            pintarTemplate(data);
    }catch(error){

        console.log(error);
    }finally{
        pintarLoading(false);
    }
}

const pintarLoading = (estado) => {

    estado? loading.classList.remove("d-none") : loading.classList.add("d-none");
}


const pintarTemplate = (data) => {

    const fragment = document.createDocumentFragment();
    
    data.results.forEach((item) => {

        const clone = templateCard.content.cloneNode(true);

        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image);

        fragment.appendChild(clone);
    });
        
    rowCard.appendChild(fragment);
}

