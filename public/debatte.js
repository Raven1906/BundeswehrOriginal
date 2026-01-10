let answers = {};
let pro = 0;
let contra = 0;

function answer(q,type){
  if(answers[q]) return;

  answers[q]=type;
  type==="pro" ? pro++ : contra++;

  document.querySelector(`[data-q="${q}"]`)
    .style.opacity = .6;

  if(Object.keys(answers).length === 10){
    showResult();
  }
}

function showResult(){
  const r = document.getElementById("result");
  const s = document.getElementById("summary");
  r.style.display="block";

  s.innerHTML = pro > contra
    ? `Sie haben häufiger sicherheitsorientiert geantwortet.
       Das deutet auf ein stärkeres Bedürfnis nach Schutz, Stabilität
       und staatlicher Handlungsfähigkeit hin – bei bewusster Abwägung
       möglicher Einschränkungen.`
    : `Sie haben häufiger freiheitsorientiert geantwortet.
       Das weist auf ein starkes Vertrauen in individuelle Verantwortung,
       Zurückhaltung staatlicher Eingriffe und die Bedeutung persönlicher
       Freiheiten hin.`;
}
