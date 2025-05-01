// Esconder a tela inicial e iniciar a música ao clicar no botão
document.getElementById("botao-entrada").addEventListener("click", function() {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
    
    // Mostra o botão de tema após clicar no botão neon
    document.querySelector(".theme-toggle-container").style.display = "block";
    
    // Inicia a música com efeito de fade-in
    musica.volume = 0;
    musica.play();
    
    let volume = 0;
    const fadeIn = setInterval(() => {
        if (volume < 1) {
            volume += 0.01;
            musica.volume = Math.min(volume, 1);
        } else {
            clearInterval(fadeIn);
        }
    }, 200);
    
    musicToggle.checked = true; // Atualiza o botão de música para indicar que está tocando
});

// Slider de imagens
let sliderWrapper = document.querySelector(".slides-wrapper");
let slides = document.querySelectorAll(".slide");
let index = 0;

function trocarImagem() {
    index = (index + 1) % slides.length;
    let deslocamento = -index * 100 + "%";
    sliderWrapper.style.transform = `translateX(${deslocamento})`;
}

setInterval(trocarImagem, 3000);

// Corações caindo
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.innerText = "︎♡";
    coracao.classList.add("coracao");
    document.body.appendChild(coracao);
    
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 200);

// Controle da música
let musica = document.getElementById("musica");
let musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("change", () => {
    if (musicToggle.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

// Atualiza o contador
function atualizarContador() {
    const inicio = new Date("August 23, 2024 22:25:00").getTime();
    const agora = new Date().getTime();
    const diferenca = agora - inicio;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
    
    document.getElementById("contador").innerText =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador(); // Chama a função ao carregar a página

// ===== CONTROLE DO TEMA =====
const themeToggle = document.getElementById('themeToggle');

// Alternar tema
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('tema-claro');
    
    // Salvar preferência
    localStorage.setItem('tema', this.checked ? 'claro' : 'escuro');
    
    // Atualizar corações no tema claro
    const coracoes = document.querySelectorAll('.coracao');
    if (document.body.classList.contains('tema-claro')) {
        coracoes.forEach(coracao => {
            coracao.style.color = 'black';
        });
    } else {
        coracoes.forEach(coracao => {
            coracao.style.color = '';
        });
    }
});

// Carregar tema salvo
document.addEventListener('DOMContentLoaded', function() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'claro') {
        themeToggle.checked = true;
        document.body.classList.add('tema-claro');
    }
});