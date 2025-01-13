function getThankYouTemplate(chose = 0) {
    const template = `
   <div class="card">
        <img src="./layout/illustration-thank-you.svg" alt="imagen de una estrella">
        <p>Seleccionaste ${chose} de 5</p>
        <h1>!Gracias!</h1>
        <section>
            <p>Agradecemos que te hayas tomado el tiempo de dar una calificación</p>
            <p>Si alguna vez necesitas más ayuda, no dudes en volver a ponerte en contacto con nosotros.</p>
        </section>
    </div>`;
    return template;
}
