class Station {
  constructor(source_schema, station, libelle_station) {
    this.source_schema = source_schema;
    this.station = station;
    this.libelle_station = libelle_station;
  }
}

class Sensor {
  constructor(
    id_capteur,
    nom_capteur,
    unite_capteur,
    desc_capteur,
    libelle_capteur,
    nom_capteur_data,
    type_station
  ) {
    this.id_capteur = id_capteur;
    this.nom_capteur = nom_capteur;
    this.unite_capteur = unite_capteur;
    this.desc_capteur = desc_capteur;
    this.libelle_capteur = libelle_capteur;
    this.nom_capteur_data = nom_capteur_data;
    this.type_station = type_station;
  }
}

module.exports = Station;
module.exports = Sensor;
