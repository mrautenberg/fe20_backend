# Labb 1

## Krav för G

- Sätta upp en webbserver med node.js och ytterligare ett bibliotek
- Serva filer som ligger i undermapp public/
- Kort dokumentation med källor och kommentarer

## Krav för VG

- Litet backend med följande endpoint
  - GET/api/random -- returnera ett JSON-objekt i formatet {"number": tal} där tal är mellan 0 och 1023
  - GET/api/custom_random/num -- returnera ett slumpmässigt tal mellan + och num enligt samma princip som ovan
  - Skapa ytterligare en enpoint, gärna POST som hanterar data och ger tillbaks information, t ex antal vokaler
