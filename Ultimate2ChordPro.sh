#!/bin/bash
# Dies ist ein Shellskript, das einen Befehl mit einer Nummer aus einer Datei aufruft
# Die Datei mit den Nummern heißt nummern.txt
# Der Befehl heißt mein_befehl
rm Tabs/*
rm Tabs/Filtered/Tabs/*
rm ChordProTabs.zip
# Eine Schleife, die jede Zeile der Datei liest
while read nummer; do
  # Den Befehl mit der Nummer als Parameter aufrufen
  go run main.go fetch -id $nummer | sed -n '2p' | sed -n '/Song name:/,/by/p' | sed 's/Song name: //g' | sed 's/  by.*//' | xargs -I {} sh -c 'go run main.go fetch -id '$nummer' > Tabs/"{}"'
done < numbers.txt # Die Datei als Eingabe für die Schleife verwenden
# Eine Schleife, die alle Dateien im Ordner erkennt
echo "ULTIMATE TABS DOWNLOADED!"
for datei in Tabs/*; do
  # Den anderen Befehl mit der Datei als Parameter aufrufen
  node konverter.js "$datei" 
done

for datei in Tabs/*.chopro; do
  # Den anderen Befehl mit der Datei als Parameter aufrufen
 sed '/----------------------------------------------------------------------/d' "$datei" | sed '/-----------------------------------------/d' > Tabs/Filtered/"$datei"   
done

zip ChordProTabs.zip Tabs/Filtered/Tabs/*.chopro
