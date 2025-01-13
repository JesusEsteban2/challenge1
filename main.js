function getThankYouTemplate(chose = 0) {
    const template = `
   <div class="card">
        <img src="./layout/illustration-thank-you.svg" alt="imagen de una estrella" class="thanks">
        <p class="selection">Seleccionaste ${chose} de 5</p>
        <h1>!Gracias!</h1>
        <section>
            <p>Agradecemos que te hayas tomado el tiempo de dar una calificación</p>
            <p>Si alguna vez necesitas más ayuda, no dudes en volver a ponerte en contacto con nosotros.</p>
        </section>
    </div>`;
    return template;
}

function handlerForm(event) {
    event.preventDefault();
    const form = event.target;
    const option = new FormData(form);
    const valueOption = option.get("assessment");
    const insertPoint = document.querySelector("body");
    const template = getThankYouTemplate(valueOption);
    insertPoint.innerHTML = template;
}

const formCapture = document.querySelector("form");
formCapture.addEventListener("submit", handlerForm);
