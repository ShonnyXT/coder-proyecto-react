import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {  
    return(
        <nav class="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse show" id="navbarDark">
                <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Deportes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Mas Vendidos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Proximamente...</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-light" type="submit"><CartWidget/></button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar