// Captura elementos do DOM
let botao = document.getElementById("mostrarBtn");
let resultado = document.getElementById("resultado");

// Evento de clique no botão
botao.addEventListener("click", function exibirMood() {
    let nome = document.getElementById("nome").value;
    let mood = document.getElementById("mood").value;
    let conteudo = "";

    if (mood === "alegre") {
        conteudo = `
            <div class="mood-resultado">
                <h3>${nome || "Usuário"}, seu mood é ALEGRE</h3>
                <p>Você gosta de energia, festa e batidas contagiantes!</p>
                <p><strong>Artistas:</strong> Charli XCX, Slayyyter, FKA Twigs</p>
                <p><strong>Recomendação:</strong> <i>Brat - Charli XCX, STARFUCKER - Slayyyter, EUSEXUA - FKA Twigs </i></p>
                <img src="charli.jpeg" alt="BRAT capa">
                <img src="star.png" alt="STARFUCKER capa">
                <img src="fka.jpeg" alt="EUSEXUA">
            </div>
        `;
    } else if (mood === "caotico") {
        conteudo = `
            <div class="mood-resultado">
                <h3>${nome || "Usuário"}, seu mood é CAÓTICO</h3>
                <p><strong>Você busca sons experimentais e imprevisíveis — pura vanguarda!</strong></p>
                <p><strong>Artistas:</strong> Arca, Aphex Twin, GFOTY</p>
                <p><strong>Recomendação:</strong> <i>Kick III - ARCA, Drukqz - Aphex Twin, GFOTYBUCK'S - GFOTY </i></p>
                <img src="arca.jpeg" alt="KICK III">
                <img src="aphex.jpeg" alt="Drukqs capa">
                <img src="gfoty.jpg" alt="GFOTYBUCKS capa">
            </div>
        `;
    } else if (mood === "triste") {
        conteudo = `
            <div class="mood-resultado">
                <h3>${nome || "Usuário"}, seu mood é TRISTE</h3>
                <p><strong>Um mergulho emocional profundo e atmosférico.</strong></p>
                <p><strong>Artistas:</strong> Have a Nice Life, Ethel Cain, Slowdive</p>
                <p><strong>Recomendação:</strong><i>Deathconsciousness - Have a Nice Life, Preacher's Daughter - Ethel Cain, Souvlaki - Slowdive</i></p>
                <img src="death.jpeg" alt="Have a Nice Life">
                <img src="ethel.jpeg" alt="Ethel Cain em tom melancólico">
                <img src="slow.jpeg" alt="slowdive capa">
            </div>
        `;
    } else if (mood === "pensativo") {
        conteudo = `
            <div class="mood-resultado">
                <h3>${nome || "Usuário"}, seu mood é PENSATIVO</h3>
                <p>Você gosta de refletir e mergulhar em letras poéticas.</p>
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
                <h3>${nome || "Usuário"}, seu mood é RAIVA</h3>
                <p>Você canaliza intensidade e força — sons potentes e emocionais.</p>
                <p><strong>Artistas:</strong> Lingua Ignota, Katy da Voz e as Abusadas, Poppy</p>
                <p><strong>Recomendação:</strong> <i>Sinner Get Ready - Lingua Ignota, Atormentadas Y Remixadas - Katy da Voz, I Disagree - Poppy</i></p>
                <img src="lingua.jpeg" alt="Sinner Get Ready capa">
                <img src="katy.jpeg" alt="Atormentadas Y Remixadas capa">
                <img src="poppy.jpeg" alt="I Disagree">
            </div>
        `;
    } else if (mood === "apaixonado") {
        conteudo = `
            <div class="mood-resultado">
                <h3>${nome || "Usuário"}, seu mood é APAIXONADO</h3>
                <p>Você vibra com letras intensas, vocais marcantes e climas de amor ou desejo.</p>
                <p><strong>Artistas:</strong> HIM, SZA, </p>
                <p><strong>Recomendação:</strong> <i>Razorblade Romance - HIM, CRTL - SZA, Lovers Rock - SADE</i></p>
                <img src="him.jpg" alt="him capa">
                <img src="sza.jpeg" alt="Katy da Voz e as Abusadas performando com atitude">
                <img src="sadejpeg" alt="Poppy capa">
            </div>
        `;
    } else if (mood === "relaxado") {
        conteudo = `
            <div class="mood-resultado">
                <h3>${nome || "Usuário"}, seu mood é RELAXADO</h3>
                <p>Você aprecia sons tranquilos, ambientes sonoros e melodias que acalmam a mente.</p>
                <p><strong>Artistas:</strong> Aphex Twin, Cocteau Twins, Beach House</p>
                <p><strong>Recomendação:</strong><i>Selected Ambient Works VOL 2, Victorialand - Cocteau Twins, Bloom - Beach House</i></p>
                <img src="aphex2.jpeg" alt="Ambiental #2 capa">
                <img src="cocteau.jpeg" alt="Victorialand capa">
                <img src="beach.jpeg" alt=" capa">
            </div>
        `;
    } else {
        conteudo = "<p>Selecione um mood válido.</p>";
    }

    // Insere o resultado na página
    resultado.innerHTML = conteudo;
});
