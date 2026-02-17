import Swal from "sweetalert2";

const AlertasApi:React.FC = () => {
    const comenzar = async () => {
        try {
        const res = await fetch("https://fakestoreapi.com/products")
        if (!res.ok) {
            alert("Error en la llamada")
        }
        else {
            const data = await res.json()
            Swal.fire(
                {
                    title: "Productos cargados",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                }
            )
        }
    }       
            catch (e) {
                Swal.fire(
                    {
                        title: "Error en la carga",
                        icon: "error",
                        confirmButtonText: "Cerrar",
                    }
                )
            }
    }
    return (
        <div>
            <h2> Ejemplo Fetch + SweetAlert2</h2>
            <button onClick={comenzar}>Cargar productos</button>
        </div>
    )
}

export default AlertasApi;