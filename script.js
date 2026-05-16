const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const botonpresionado = boton.textContent;


        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            } else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual") {
            try {
                let expresion = pantalla.textContent;
                expresion = expresion.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
                expresion = expresion.replace(/(\d+)%/g, '($1/100)');
                pantalla.textContent = eval(expresion);
            } catch{
                pantalla.textContent = "Error";
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonpresionado;
        } else{
            pantalla.textContent += botonpresionado;
        }
        
    })
})