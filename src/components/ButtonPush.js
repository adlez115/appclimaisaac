import React from "react";
import addNotification from "react-push-notification";

const ButtonPush = () =>{
    const notificacion =() =>{
        addNotification({
            title: 'Notificacion-app de clima--Isaac',
            message: 'mensaje predeterminado',
            duration: 4000,
            native: true,
        });
    }
    return(
        <div className="col-12">
            <button color="#f194ff" onClick={notificacion} type="button" className="btn btn-primary" size="lg">BOTON DE NOTIFICACION!</button>
        </div>
    );
};

export default ButtonPush;