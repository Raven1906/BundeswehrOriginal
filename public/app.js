const content = document.getElementById("content");

const pages = {
overview: `
<section class="section overview">
<h1>Überblick</h1>

<p>
Sicherheit ist kein statischer Zustand, sondern ein fortlaufender Prozess.
Sie entsteht aus dem Zusammenspiel politischer Entscheidungen, gesellschaftlicher
Verantwortung und institutioneller Handlungsfähigkeit. In Deutschland ist dieses
Verständnis historisch gewachsen und eng mit demokratischen Grundwerten verknüpft.
</p>

<p>
Das sicherheitspolitische Umfeld hat sich in den vergangenen Jahrzehnten tiefgreifend
verändert. Klassische Bedrohungsszenarien bestehen weiterhin, werden jedoch zunehmend
durch hybride Formen der Einflussnahme ergänzt. Dazu zählen Cyberoperationen,
Desinformation, wirtschaftlicher Druck sowie die Instrumentalisierung politischer
Instabilität.
</p>

<p>
Diese Plattform verfolgt das Ziel, sicherheitspolitische Zusammenhänge sachlich,
verständlich und ohne Verkürzungen darzustellen. Sie richtet sich an Leserinnen und
Leser, die bereit sind, sich mit komplexen Themen auseinanderzusetzen und unterschiedliche
Ebenen von Sicherheit – national, international und gesellschaftlich – zu reflektieren.
</p>

<h2>Gesellschaftliche Einbettung</h2>

<p>
Sicherheitspolitik ist stets auch Gesellschaftspolitik. Sie erfordert Akzeptanz,
Transparenz und eine klare rechtliche Grundlage. Staatliche Sicherheitsorgane handeln
nicht im eigenen Interesse, sondern im Auftrag der Gesellschaft und unterliegen deren
Kontrolle.
</p>
</section>
`,

auftrag: `
<section class="section auftrag">
<h1>Auftrag & Werte</h1>

<p>
Der staatliche Sicherheitsauftrag ist klar definiert und verfassungsrechtlich
gebunden. Er dient dem Schutz der Bevölkerung, der territorialen Integrität
und der freiheitlich-demokratischen Grundordnung. Dabei gilt stets der Grundsatz
der Verhältnismäßigkeit.
</p>

<p>
Zentrale Werte sind Verantwortung, Rechtstreue und politische Zurückhaltung.
Sicherheit darf niemals Selbstzweck sein, sondern muss sich stets an klaren
rechtlichen und ethischen Maßstäben orientieren.
</p>

<p>
Besondere Bedeutung kommt der parlamentarischen Kontrolle zu. Sie stellt sicher,
dass sicherheitsrelevante Entscheidungen demokratisch legitimiert sind und
transparent nachvollzogen werden können.
</p>

<h2>Innere Führung</h2>

<p>
Das Leitbild der inneren Führung betont den mündigen, verantwortungsbewussten
Staatsbürger in Uniform. Es verbindet militärische Auftragserfüllung mit
gesellschaftlicher Verantwortung und individueller Gewissensfreiheit.
</p>
</section>
`,

struktur: `
<section class="section struktur">
<h1>Struktur</h1>

<p>
Moderne Sicherheitsstrukturen sind arbeitsteilig organisiert. Unterschiedliche
Bereiche übernehmen klar definierte Aufgaben und greifen ineinander. Diese
Differenzierung ermöglicht Effizienz und verhindert Machtkonzentration.
</p>

<p>
Neben klassischen Einsatzkräften spielen unterstützende Strukturen eine zentrale
Rolle. Logistik, Ausbildung, Analyse und technische Entwicklung sind entscheidend
für nachhaltige Handlungsfähigkeit.
</p>

<p>
Die klare Trennung von Zuständigkeiten gewährleistet, dass jede Maßnahme rechtlich
eingeordnet und fachlich begründet ist.
</p>
</section>
`,

einsatz: `
<section class="section einsatz">
<h1>Einsätze & Verantwortung</h1>

<p>
Einsätze erfolgen niemals isoliert, sondern im Rahmen politischer Entscheidungen
und internationaler Verpflichtungen. Sie sind stets mit Verantwortung verbunden –
gegenüber der eigenen Bevölkerung, internationalen Partnern und der Zivilbevölkerung
vor Ort.
</p>

<p>
Neben militärischen Aspekten spielen humanitäre, diplomatische und gesellschaftliche
Faktoren eine zentrale Rolle. Nachhaltige Stabilisierung erfordert mehr als reine
Sicherheitsmaßnahmen.
</p>

<p>
Der Schutz von Zivilisten und die Einhaltung des Völkerrechts stehen im Mittelpunkt
jedes Einsatzes.
</p>
</section>
`,

zukunft: `
<section class="section zukunft">
<h1>Zukunft & Sicherheit</h1>

<p>
Die sicherheitspolitischen Herausforderungen der Zukunft sind geprägt von
technologischem Fortschritt, globaler Vernetzung und zunehmender Unvorhersehbarkeit.
Künstliche Intelligenz, autonome Systeme und Cyberfähigkeiten verändern die
Rahmenbedingungen grundlegend.
</p>

<p>
Gleichzeitig bleibt der Mensch zentraler Bezugspunkt sicherheitspolitischen Handelns.
Technologie kann unterstützen, ersetzt jedoch nicht Verantwortung, Urteilskraft
und ethische Reflexion.
</p>

<p>
Zukünftige Sicherheit wird daran gemessen werden, ob sie Schutz bietet, ohne Freiheit
zu untergraben – und Stabilität schafft, ohne gesellschaftliche Offenheit zu gefährden.
</p>
</section>
`
};

function loadPage(page){
  content.innerHTML = pages[page];
  history.pushState({page},"","#"+page);
}

document.querySelectorAll("button").forEach(btn=>{
  btn.onclick=()=>loadPage(btn.dataset.page);
});

window.onpopstate=e=>{
  if(e.state?.page) content.innerHTML=pages[e.state.page];
};

loadPage("overview");
