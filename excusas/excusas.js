let who = ['the dog', 'my granma', 'his turtle', 'my bird', 'the aliens', 'the government', 'the Illuminati'];
let what = ['eat', 'pissed', 'crushed', 'broked', 'burned', 'exploded', 'deleted'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying', 'in a parallel universe', 'in a previous life'];

 function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = randomWho + " " + randomWhat + " my hearth " + randomWhen + ".";
  document.getElementById("excuse").innerHTML = excuse;
}
