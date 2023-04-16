// Importieren Sie die ChordSheetJS-Bibliothek
const ChordSheetJS = require('chordsheetjs').default;

// Importieren Sie die fs-Bibliothek, um Dateien zu lesen und zu schreiben
const fs = require('fs');

// Lesen Sie den Dateinamen aus dem dritten Argument der Kommandozeile
const filename = process.argv[2];

// Lesen Sie die Datei mit dem alten Format synchron
const data = fs.readFileSync(filename, 'utf8');

// Erstellen Sie einen UltimateGuitarParser, um das alte Format zu parsen
  const parser = new ChordSheetJS.UltimateGuitarParser();
  //const parser = new ChordSheetJS.ChordsOverWordsParser();
  // Parsen Sie das alte Format in ein Song-Objekt
  const song = parser.parse(data);

  // Erstellen Sie einen ChordProFormatter, um das neue Format zu formatieren
  const formatter = new ChordSheetJS.ChordProFormatter();

  // Formatieren Sie das Song-Objekt in das neue Format
  //const output = formatter.format(song);
  const output = formatter.format(song, { normalizeChords: true });  

  // Schreiben Sie die Ausgabe in eine neue Datei mit der Endung .chopro
  fs.writeFile(filename + '.chopro', output, 'utf8', (err) => {
    // Werfen Sie einen Fehler, wenn etwas schief geht
    if (err) throw err;

    // Geben Sie eine Erfolgsmeldung aus
    console.log('Datei erfolgreich konvertiert!');
  });

