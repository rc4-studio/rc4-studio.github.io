/*

    Para anunciar novos eventos, preencher a lista abaixo
    Se quiser meter um link, basta usar o seguinte formato:
        <a href='http://www.google.com'>Google</a>

*/



let texts = {
    "Quem Somos": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "A nossa equipa": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    events: [
        "Apanha da batata - 15/06/2022",
        "Apanha do malmequer - 18/06/2022",
        "Caça ao javali - 19/06/2022",
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#about-content").innerHTML = texts["Quem Somos"];
    document.querySelector("#team-content").innerHTML = texts["A nossa equipa"];

    let eventContainer = document.querySelector('#event-list');
    texts.events.forEach(event => {
        eventContainer.innerHTML += `
        <li class="fs-5">${event}</li>
        `
    })
})