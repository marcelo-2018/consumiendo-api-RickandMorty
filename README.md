# Consumiendo Api de Rick and Morty 😁

### Practica con fetch-async-await

Pagina web que consume datos de la api (https://rickandmortyapi.com/) y los muestra de una grilla.

````
<main class="container my-5">
        <!-- spinner Cargando -->
        <div class="d-flex justify-content-center align-items-center d-none" id="loading">
            <strong class="me-3">Cargando</strong>
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
        </div>

        <!-- Grilla donde se muestran las card -->
        <div class="row" id="rowCard">
            <template id="templateCard">
                    <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div class="card text-center">
                            <img src="..." class="card-img-top" alt="Foto del personaje">
                            <div class="card-body">
                                <h5 class="card-title">Rick</h5>
                                <p class="card-text">Human</p>
                            </div>
                        </div>
                    </div>
            </template>
        </div>
    </main>
````
