Reflektioner kring kursmoment 1
-------------------------------

Det här kursmomentet var mycket intressant och lärorikt, men det var samtidigt en stor utmaning. Jag jämförde de tre stora JS ramverken Angular, React samt Vue. Valet föll på React då min uppfattning var att det är populärt samt att det är enkelt att lära sig. När jag undersökte dessa tre JS ramverk, kom jag fram till följande information:

* React är det mest googlade i världen (2020-09-17), enligt *[Google Trends](https://trends.google.com/trends/explore?q=react,vue,angular)*
* Det finns flest jobbannonser inom React på Linkedin, indeed samt Platsbanken i Sverige, 2020-09-17
* React är det mest nedladdade npm paketet, enligt *[npm trends](https://www.npmtrends.com/vue-vs-angular-vs-react)*, 2020-09-17

Dokumentationen för React var svår att förstå. När det blev problem hittade jag inte ibland någon lösning i dokumentaionen, så jag sökte hjälp övervägande i forum. Jag tycker att de svåraste koncepten är events, lifecycle och klasser.

Då det blir mycket text i min me-sida, valde jag att skriva texten i markdown. För att inkludera en markdown-fil i React, hämtade jag modulen markdown-it och sparade i en variabel. Sedan hämtade jag markdown-filen med fetch, vilket konverterades med metoden text(). Resultatet renderades med markdownit. Slutligen tilldelades ett element med dangerouslySetInnerHTML det renderade resultatet, *[enligt dokumentationen](https://reactjs.org/docs/dom-elements.html)*.

Jag försökte inkludera README.md i vyn ”/reports/week/1”, men det fungerade inte eftersom filen befann sig i roten av projektet och det går endast att importera filer vilka befinner sig i src-mappen. Men efter en del eftersökningar i forum, lärde jag mig att man t ex kan skapa en alias för sökvägen från roten av projektet. Men denna lösning fungerade inte för mig. Så jag kopierade filen till src-mappen med modulen pandoc.

Forskningsfrågor
----------------

* RQ1: Hur arbetar utvecklare för att skapa en bättre användarupplevelse?
* RQ2: Vilka utmaningar och möjligheter innebär det arbetssätt utvecklare har?
