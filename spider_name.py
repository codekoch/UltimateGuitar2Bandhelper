# Importieren Sie die Scrapy-Bibliothek
import scrapy

# Definieren Sie eine Klasse für Ihren Spider
class NummernSpider(scrapy.Spider):
  # Geben Sie einen Namen für Ihren Spider an
  name = "nummern_spider"
  # Geben Sie eine Liste von URLs an, die der Spider anfordern soll
  start_urls = ["https://tabs.ultimate-guitar.com/tab/thjim/"]

  # Definieren Sie eine Methode, die aufgerufen wird, wenn der Spider eine Antwort erhält
  def parse(self, response):
    # Extrahieren Sie alle Links mit dem Muster "https://tabs.ultimate-guitar.com/tab/thjim/40-millionen-minuten-chords-"
    links = response.xpath("//a[starts-with(@href,'https://tabs.ultimate-guitar.com/tab/thjim/')]")
    # Iterieren Sie über die Links
    for link in links:
      # Extrahieren Sie die URL des Links als String
      url = link.xpath("@href").get()
      # Extrahieren Sie die Nummer am Ende der URL mit einem regulären Ausdruck
      nummer = url.split("-")[-1]
      # Geben Sie die Nummer als ein Dictionary zurück
      yield {"nummer": nummer}
