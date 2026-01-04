const content = document.getElementById("content");

const pages = {
  overview: `
    <section class="section">
      <h1>Überblick</h1>

      <p>
        Sicherheit ist eine zentrale Voraussetzung für Stabilität, Freiheit
        und gesellschaftliche Entwicklung. Sie entsteht nicht von selbst,
        sondern ist das Ergebnis politischer Entscheidungen, institutioneller
        Verantwortung und gesellschaftlicher Akzeptanz.
      </p>

      <p>
        In einer zunehmend vernetzten Welt haben sich die Rahmenbedingungen
        staatlicher Sicherheit grundlegend verändert. Klassische Bedrohungen
        existieren weiterhin, werden jedoch ergänzt durch neue Herausforderungen
        wie Cyberangriffe, hybride Einflussnahme und globale Abhängigkeiten.
      </p>

      <p>
        Diese Seite verfolgt das Ziel, sicherheitspolitische Zusammenhänge
        verständlich, sachlich und ohne Verkürzung darzustellen. Sie richtet
        sich an Leserinnen und Leser, die bereit sind, sich Zeit zu nehmen
        und Zusammenhänge in ihrer Tiefe zu erfassen.
      </p>

      <h2>Einordnung</h2>

      <p>
        Staatliche Sicherheitsstrukturen sind immer im Spannungsfeld zwischen
        Schutz und Zurückhaltung angesiedelt. Ihre Legitimität ergibt sich
        nicht aus Stärke, sondern aus rechtlicher Bindung, Transparenz und
        demokratischer Kontrolle.
      </p>

      <p>
        Gerade in Deutschland ist dieses Verständnis historisch gewachsen
        und fest im politischen System verankert. Sicherheit wird nicht als
        Machtinstrument verstanden, sondern als Dienst an der Gesellschaft.
      </p>
    </section>
  `,

  auftrag: `
    <section class="section">
      <h1>Auftrag & Werte</h1>

      <p>
        Der staatliche Sicherheitsauftrag ist klar begrenzt und verfassungsrechtlich
        definiert. Er dient dem Schutz der Bevölkerung, der territorialen
        Integrität und der freiheitlich-demokratischen Grundordnung.
      </p>

      <p>
        Zentrale Werte sind Verantwortung, Rechtstreue und Verhältnismäßigkeit.
        Jeder Einsatz staatlicher Mittel ist an klare Regeln gebunden und
        unterliegt parlamentarischer Kontrolle.
      </p>

      <p>
        Diese Prinzipien unterscheiden demokratische Sicherheitsstrukturen
        grundlegend von autoritären Systemen.
      </p>
    </section>
  `,

  struktur: `
    <section class="section">
      <h1>Struktur & Bereiche</h1>

      <p>
        Moderne Sicherheitsorganisationen sind komplex aufgebaut. Unterschiedliche
        Teilbereiche übernehmen spezialisierte Aufgaben – von Landes- und
        Bündnisverteidigung bis hin zu Unterstützung im Katastrophenfall.
      </p>

      <p>
        Die klare Trennung von Zuständigkeiten sorgt für Effizienz und verhindert
        Machtkonzentration.
      </p>
    </section>
  `,

  einsatz: `
    <section class="section">
      <h1>Einsätze & Verantwortung</h1>

      <p>
        Einsätze außerhalb des eigenen Staatsgebiets sind immer mit besonderer
        Verantwortung verbunden. Sie erfolgen auf Grundlage internationaler
        Mandate und politischer Beschlüsse.
      </p>

      <p>
        Neben militärischen Aspekten spielen humanitäre, diplomatische und
        gesellschaftliche Faktoren eine zentrale Rolle.
      </p>
    </section>
  `,

  zukunft: `
    <section class="section">
      <h1>Zukunft & Sicherheit</h1>

      <p>
        Die sicherheitspolitischen Herausforderungen der Zukunft sind geprägt
        von Unsicherheit, Geschwindigkeit und technologischer Entwicklung.
      </p>

      <p>
        Entscheidend wird sein, Sicherheit so zu gestalten, dass sie schützt,
        ohne Freiheit einzuschränken.
      </p>
    </section>
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

loadPage("overview");

