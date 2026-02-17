import Swal from "sweetalert2";


const Alert: React.FC = () => {
    const ShowSuccess = async () => {
        const resultado = await Swal.fire(
            {
                title: "Exito",
                text: "La operacion se realizo con exito",
                icon: "success",
                confirmButtonText: "Aceptar"
            }
        )
        if (resultado.isConfirmed){
            Swal.fire({
                title: "Gracias por aceptar",
            })
        }else {
            Swal.fire({
                title: "No aceptaste",
            })
        } 
    }
    const ShowConfirm = async () => {
        const resultado = await Swal.fire(
            {
            title: 'Estas seguro?',
            text: "Estas son las acciones que puedes deshacer",
            icon: 'warning',
            showCancelButton: true,
            timer: 5000,
            confirmButtonText: 'Si, eliminar!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No, cancelar!',
            }
             )
        if (resultado.isConfirmed){
            Swal.fire({
                title: "Gracias por aceptar",
            })
        }else {
            Swal.fire({
                title: "No aceptaste",
            })
        } 
    }
       
    function ShowToast() {
        const tost = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        })
        tost.fire({
            icon: 'success',
            title: 'Guardado con exito'
        })
    }        
    return (
        <div>
            <h1> SweetAlert para generacion de alertas</h1>
            <button onClick={ShowSuccess}>Exito</button>
            <button onClick={ShowConfirm}>Confirm</button>
            <button onClick={ShowToast}>Toast</button>
        </div>
    )
}
export default Alert;