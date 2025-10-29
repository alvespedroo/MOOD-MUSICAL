// Captura elementos do DOM
var botao = document.getElementById("mostrarBtn");
var resultado = document.getElementById("resultado");

// Evento de clique no botão
botao.addEventListener("click", function exibirMood() {
    var nome = document.getElementById("nome").value;
    var mood = document.getElementById("mood").value;
    var conteudo = "";

    if (mood === "alegre") {
        conteudo = `
            <div class="mood-resultado">
                <h3>${nome || "Usuário"}, seu mood é ALEGRE!</h3>
                <p>Você gosta de energia, festa e batidas contagiantes!</p>
                <p><strong>Artistas:</strong> Charli XCX, Slayyyter, FKA Twigs</p>
                <p><strong>Recomendação:</strong> <i>Brat - Charli XCX, STARFUCKER - Slayyyter, EUSEXUA - FKA Twigs </i></p>
                <!-- Imagens dos artistas -->
                <img src="charli.jpeg" alt="BRAT capa">
                <img src="star.png" alt="STARFUCKER capa">
                <img src="fka.jpeg" alt="EUSEXUA">
            </div>
        `;
    } else if (mood === "caotico") {
        conteudo = `
            <div class="mood-resultado">
                <h3>Mood Caótico</h3>
                <p>Você busca sons experimentais e imprevisíveis — pura vanguarda!</p>
                <p><strong>Artistas:</strong> Arca, Aphex Twin, GFOTY</p>
                <p><strong>Recomendação:</strong> <i>Kick III - ARCA, Drukqz - Aphex Twin, GFOTYBUCKS - GFOTY </i></p>
                <img src="arca.jpeg" alt="KICK III">
                <img src="aphex.jpeg" alt="Drukqs capa">
                <img src="gfoty.jpg" alt="GFOTYBUCKS capa">
            </div>
        `;
    } else if (mood === "triste") {
        conteudo = `
            <div class="mood-resultado">
                <h3>Mood Triste</h3>
                <p>Um mergulho emocional profundo e atmosférico.</p>
                <p><strong>Artistas:</strong> Have a Nice Life, Ethel Cain, Slowdive</p>
                <p><strong>Recomendação:</strong> <i>Deathconsciousness - Have a Nice Life, Preacher’s Daughter - Ethel Cain, Souvlaki - Slowdive</i></p>
                <img src="death.jpeg" alt="Have a Nice Life">
                <img src="ethel.jpeg" alt="Ethel Cain em tom melancólico">
                <img src="slow.jpeg" alt="slowdive capa">
            </div>
        `;
    } else if (mood === "pensativo") {
        conteudo = `
            <div class="mood-resultado">
                <h3>Mood Pensativo</h3>
                <p>Você gosta de refletir e mergulhar em letras poéticas e sons suaves.</p>
                <p><strong>Artistas:</strong> Lana Del Rey, Urias, Racionais</p>
                <p><strong>Recomendação:</strong> <i>Did You Know That There's a Tunnel Under Ocean Blvd - Lana Del Rey, Carranca - Urias, Sobrevivendo no Inferno - Racionas</i></p>
                <img src="lana.jpeg" alt="Lana Del Rey capa">
                <img src="urias.jpg" alt="Urias capa">
                <img src="racionais.jpeg" alt="Racionais capa">
            </div>
        `;
    } else if (mood === "raiva") {
        conteudo = `
            <div class="mood-resultado">
                <h3>Mood Raiva</h3>
                <p>Você canaliza intensidade e força — sons potentes e emocionais.</p>
                <p><strong>Artistas:</strong> Lingua Ignota, Katy da Voz e as Abusadas, Poppy</p>
                <p><strong>Recomendação:</strong> <i>Sinner Get Ready - Lingua Ignota, Atormentadas Y Remixadas - Katy da Voz, I Disagree - Poppy</i></p>
                <img src="lingua.jpeg" alt="Lingua Ignota cantando em iluminação vermelha">
                <img src="katy.jpeg" alt="Katy da Voz e as Abusadas performando com atitude">
                <img src="poppy.jpeg" alt="Poppy capa">
            </div>
        `;
    } else {
        conteudo = "<p>Selecione um mood válido.</p>";
    }

    // Insere o resultado na página
    resultado.innerHTML = conteudo;
});
