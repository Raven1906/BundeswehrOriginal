const content = document.getElementById("content");

const pages = {
  home: `
    <div class="card">
      <h1>Einführung</h1>
      <p>
        Sicherheit ist keine Selbstverständlichkeit. In einer Welt, die sich
        politisch, technologisch und gesellschaftlich immer schneller verändert,
        steht jede moderne Gesellschaft vor der Frage, wie sie Freiheit, Frieden
        und Stabilität langfristig sichern kann.
      </p>
      <p>
        Diese Seite bietet einen umfassenden Überblick über sicherheitspolitische
        Verantwortung, staatliche Strukturen und die Rolle moderner Streitkräfte
        im 21. Jahrhundert. Sie richtet sich an Leserinnen und Leser, die sich
        tiefergehend informieren möchten – sachlich, ruhig und ohne Verkürzungen.
      </p>
      <p>
        Die Inhalte sind bewusst ausführlich gehalten. Sie sollen zum Lesen,
        Nachdenken und Einordnen anregen – nicht zum schnellen Überfliegen.
      </p>
    </div>
  `,

  geschichte: `
    <div class="card">
      <h1>Geschichte und Entwicklung</h1>
      <p>
        Nach den Erfahrungen des 20. Jahrhunderts stand Deutschland vor der
        Herausforderung, Sicherheit neu zu denken. Die Lehren aus Krieg,
        Diktatur und Missbrauch staatlicher Macht führten zu einem besonderen
        Verständnis von Verantwortung und Kontrolle.
      </p>
      <p>
        Die Entwicklung moderner Sicherheitsstrukturen war deshalb von Beginn
        an eng mit demokratischen Prinzipien verbunden. Parlamentsvorbehalt,
        Gewaltenteilung und gesellschaftliche Kontrolle bilden bis heute das
        Fundament sicherheitspolitischen Handelns.
      </p>
      <p>
        Über Jahrzehnte hinweg veränderten sich Aufgaben, Ausrichtung und
        internationale Einbindung stetig – immer im Spannungsfeld zwischen
        nationaler Verantwortung und internationaler Zusammenarbeit.
      </p>
    </div>
  `,

  auftrag: `
    <div class="card">
      <h1>Auftrag und Verfassung</h1>
      <p>
        Staatliche Sicherheitsorgane handeln nicht aus eigenem Antrieb.
        Ihr Auftrag ist rechtlich klar definiert und an die Verfassung gebunden.
        Dies dient dem Schutz der Gesellschaft vor Machtmissbrauch und Willkür.
      </p>
      <p>
        Zentrale Elemente sind Transparenz, parlamentarische Kontrolle und
        die Einbindung in demokratische Entscheidungsprozesse. Sicherheit
        ist kein Selbstzweck, sondern Mittel zum Schutz von Freiheit und Recht.
      </p>
      <p>
        Diese rechtlichen Rahmenbedingungen sind bewusst restriktiv gestaltet
        und unterscheiden sich deutlich von autoritären Modellen.
      </p>
    </div>
  `,

  sicherheit: `
    <div class="card">
      <h1>Innere und äußere Sicherheit</h1>
      <p>
        Sicherheit endet nicht an Landesgrenzen. Globale Vernetzung, digitale
        Infrastruktur und internationale Abhängigkeiten machen eine klare
        Trennung zwischen innerer und äußerer Sicherheit zunehmend schwierig.
      </p>
      <p>
        Gleichzeitig bleibt der Schutz der eigenen Bevölkerung oberste Priorität.
        Prävention, Abschreckung und Kooperation sind dabei keine Gegensätze,
        sondern ergänzende Elemente.
      </p>
      <p>
        Moderne Sicherheitskonzepte setzen daher auf vernetzte Ansätze, bei denen
        militärische, politische und gesellschaftliche Faktoren zusammenwirken.
      </p>
    </div>
  `,

  zukunft: `
    <div class="card">
      <h1>Zukunft und Herausforderungen</h1>
      <p>
        Die sicherheitspolitischen Herausforderungen der Zukunft sind komplex.
        Cyberangriffe, hybride Bedrohungen und technologische Abhängigkeiten
        verändern klassische Vorstellungen von Konflikten.
      </p>
      <p>
        Gleichzeitig wächst die Verantwortung, ethische Grenzen zu definieren
        und einzuhalten. Technologie darf Sicherheit unterstützen, aber nicht
        ersetzen, was gesellschaftliche Werte ausmacht.
      </p>
      <p>
        Die zentrale Frage bleibt: Wie lässt sich Sicherheit gewährleisten,
        ohne Freiheit zu gefährden? Eine Antwort darauf erfordert kontinuierlichen
        Dialog und kritische Reflexion.
      </p>
    </div>
  `
};

function loadPage(page) {
  content.innerHTML = pages[page];
  history.pushState({ page }, "", "#" + page);
}

document.querySelectorAll("button[data-page]").forEach(btn => {
  btn.addEventListener("click", () => {
    loadPage(btn.dataset.page);
  });
});

window.onpopstate = e => {
  if (e.state?.page) {
    content.innerHTML = pages[e.state.page];
  }
};

loadPage("home");
