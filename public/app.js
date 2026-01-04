const content = document.getElementById("content");

const pages = {
  home: `
    <div class="card">
      <h1>Willkommen</h1>
      <p>Interaktive animierte Node.js Website</p>
      <button onclick="alert('Interaktion funktioniert!')">
        Klick mich
      </button>
    </div>
  `,
  mission: `
    <div class="card">
      <h1>Mission</h1>
      <p>Unsere Ziele und Visionen.</p>
    </div>
  `,
  kontakt: `
    <div class="card">
      <h1>Kontakt</h1>
      <p>Email: kontakt@test.de</p>
    </div>
  `
};

function loadPage(page){
  content.innerHTML = pages[page];
  history.pushState({page}, "", "#" + page);
}

document.querySelectorAll("button[data-page]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    loadPage(btn.dataset.page);
  });
});

window.onpopstate = e => {
  if(e.state?.page){
    content.innerHTML = pages[e.state.page];
  }
};

// Start
loadPage("home");
