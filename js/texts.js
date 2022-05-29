/*

    Para anunciar novos eventos, preencher a lista abaixo
    Se quiser meter um link, basta usar o seguinte formato:
        <a href='http://www.google.com'>Google</a>

*/



let texts = {
    "Quem Somos": "Nós somos a Associação de Estudantes Júlio Dantas, de Lagos (AEJDL), organização representativa dos alunos da Escola Secundária Júlio Dantas, de Lagos, e temos como objetivo não só representar todos os estudantes do Estabelecimento de Ensino mas também promover ao seu bem-estar, integração, defender e promover os valores fundamentais do ser humano, contribuir para a participação dos estudantes na vida escolar e na discussão dos problemas educativos, cooperar com organismos estudantis, nacionais ou estrangeiros, cujos princípios não contrariem os aqui definidos, entre muitos outros.",
    "A nossa equipa": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    events: [
        "Miss e Mister: 27.05.2022",
        "Baile de Finalistas de 9ºAno: 10.06.2022",
        "Baile de Finalistas de 12ºAno: 27.06.2022",
        "<a href='http://www.google.com'>Mais informação</a>",
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