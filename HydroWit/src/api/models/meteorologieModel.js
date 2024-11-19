class MeteorologieStation {
  constructor(source_schema, station, libelle_station) {
    this.source_schema = source_schema;
    this.station = station;
    this.libelle_station = libelle_station;
  }
}

class MeteorologieSensor {
  constructor(id_capteur, unite_capteur, libelle_capteur) {
    this.id_capteur = id_capteur;
    this.unite_capteur = unite_capteur;
    this.libelle_capteur = libelle_capteur;
  }
}

module.exports = MeteorologieStation;
module.exports = MeteorologieSensor;
