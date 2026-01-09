const content = document.getElementById("content");

const pages = {

overview: `
<section class="section overview">
<h1>Überblick</h1>

<p>
Sicherheit ist kein statischer Zustand, sondern ein dynamischer Prozess, der sich
ständig an neue gesellschaftliche, technologische und geopolitische Rahmenbedingungen
anpassen muss. In einer Welt wachsender Vernetzung und zunehmender Abhängigkeiten
gewinnt dieser Prozess an Komplexität.
</p>

<p>
Während klassische Bedrohungen weiterhin existieren, treten neue Formen der
Herausforderung hinzu. Cyberangriffe, gezielte Desinformation, wirtschaftliche
Einflussnahme und hybride Strategien verändern das Verständnis von Sicherheit
grundlegend. Diese Entwicklungen wirken oft unsichtbar, entfalten jedoch langfristige
Auswirkungen auf Stabilität und Vertrauen.
</p>

<p>
Ziel dieser Seite ist es, sicherheitspolitische Zusammenhänge verständlich und
strukturiert darzustellen. Sie lädt dazu ein, sich mit Fragen auseinanderzusetzen,
die nicht nur staatliche Institutionen betreffen, sondern die gesamte Gesellschaft.
</p>

<h2>Sicherheit als gesellschaftliche Aufgabe</h2>

<p>
Sicherheit entsteht nicht allein durch staatliche Maßnahmen. Sie setzt informierte
Bürgerinnen und Bürger voraus, die politische Entscheidungen nachvollziehen,
hinterfragen und mittragen. Transparenz und Kommunikation sind daher zentrale Elemente
moderner Sicherheitskultur.
</p>
</section>
`,

auftrag: `
<section class="section auftrag">
<h1>Auftrag & Werte</h1>

<p>
Der staatliche Sicherheitsauftrag basiert auf klaren verfassungsrechtlichen Grundlagen.
Er dient dem Schutz der Bevölkerung, der territorialen Integrität sowie der
freiheitlich-demokratischen Grundordnung. Jede Maßnahme ist an Recht und Gesetz gebunden.
</p>

<p>
Zentrale Werte sind Verantwortung, Verhältnismäßigkeit und Zurückhaltung. Sicherheit
darf niemals Selbstzweck sein, sondern muss stets dem Gemeinwohl dienen. Diese Haltung
prägt das sicherheitspolitische Selbstverständnis Deutschlands.
</p>

<h2>Demokratische Kontrolle</h2>

<p>
Parlamentarische Kontrolle stellt sicher, dass sicherheitsrelevante Entscheidungen
demokratisch legitimiert sind. Sie verhindert Machtmissbrauch und stärkt das Vertrauen
der Gesellschaft in staatliches Handeln.
</p>

<p>
Innere Führung und ethische Orientierung verbinden Auftragserfüllung mit individueller
Verantwortung. Der Mensch bleibt Mittelpunkt sicherheitspolitischen Handelns.
</p>
</section>
`,

struktur: `
<section class="section struktur">
<h1>Struktur & Organisation</h1>

<p>
Moderne Sicherheitsstrukturen sind komplex aufgebaut. Unterschiedliche Bereiche
übernehmen spezialisierte Aufgaben, die ineinandergreifen. Diese Arbeitsteilung
ermöglicht Effizienz und klare Verantwortlichkeiten.
</p>

<p>
Neben operativen Kräften spielen Ausbildung, Logistik, Analyse und technologische
Entwicklung eine zentrale Rolle. Nachhaltige Sicherheit erfordert langfristige Planung
und kontinuierliche Anpassung.
</p>

<p>
Die klare Trennung von Zuständigkeiten dient nicht nur der Effizienz, sondern auch der
rechtlichen Absicherung. Jede Maßnahme ist nachvollziehbar und überprüfbar.
</p>
</section>
`,

debatte: `
<section class="section debatte">
<h1>Pro & Contra: Sicherheit und Freiheit</h1>

<p>
Eine der zentralen sicherheitspolitischen Fragen lautet: Wie viel Sicherheit ist
notwendig – und wie viel Freiheit darf dafür eingeschränkt werden? Diese Debatte
begleitet demokratische Gesellschaften seit Jahrzehnten.
</p>

<p>
Befürworter stärkerer Sicherheitsmaßnahmen argumentieren, dass der Staat verpflichtet
ist, Gefahren frühzeitig zu erkennen und zu verhindern. Kritiker warnen hingegen vor
schleichendem Verlust persönlicher Freiheiten.
</p>

<div class="choice">
  <button onclick="showResult('pro')">Ich neige zu PRO</button>
  <button onclick="showResult('contra')">Ich neige zu CONTRA</button>
</div>

<div id="result" class="result"></div>
</section>
`,

zukunft: `
<section class="section zukunft">
<h1>Zukunft & Sicherheit</h1>

<p>
Die sicherheitspolitischen Herausforderungen der Zukunft sind geprägt von technologischem
Wandel, globaler Vernetzung und zunehmender Unsicherheit. Künstliche Intelligenz,
Cyberfähigkeiten und autonome Systeme verändern die Art, wie Sicherheit gedacht und
umgesetzt wird.
</p>

<p>
Gleichzeitig bleibt der Mensch zentraler Bezugspunkt. Technologie kann unterstützen,
ersetzt jedoch nicht Verantwortung, Urteilskraft und ethische Reflexion.
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

function showResult(type){
  const r = document.getElementById("result");
  r.style.display="block";
  r.innerHTML = type==="pro"
    ? "<p><strong>PRO:</strong> Sicherheit kann Leben schützen, Stabilität sichern und Vertrauen stärken. Entscheidend ist klare Kontrolle.</p>"
    : "<p><strong>CONTRA:</strong> Freiheit ist ein hohes Gut. Sicherheit darf niemals zu dauerhafter Überwachung oder Machtmissbrauch führen.</p>";
}

document.querySelectorAll("button[data-page]").forEach(btn=>{
  btn.onclick=()=>loadPage(btn.dataset.page);
});

loadPage("overview");
