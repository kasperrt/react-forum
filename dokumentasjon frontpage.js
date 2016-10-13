Frontpage.js er lagd med relativ åpenhet for å kunne viderebygges, og er ikke full-blown static serving. Siden nettsiden muligens skal videreutvikles i React, er forsiden implementert med at den bruker objekter for å populere hva som er på siden.
Øverst i koden, requirer den React for å få tilgang til React objektet, samt ReactRouter som tar seg av linker og hvordan siden router seg.
Så blir posts objektet definert. Dette objektet inneholder alle postsene som skal vises på fremsiden.
Så blir Frontpage klassen laget, som inneholder og bruker Post classen og legger inn det post sender som argumenter med seg.
Posts classen/objektet looper gjennom posts objektet, og lager en rekke med Posts objekter som blir brukt av Frontpage objektet, som igjen blir hentet ut av main.js for bruk.

Nederst er det gjort en litt node.js way of doing things, med at den eksporterer Frontpage objektet, sånn at det er klart for bruk av main.js/enhver fil som bruker var Frontpage = require('frontpage.js');
