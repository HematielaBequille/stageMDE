class Station {
  constructor(
    id_atm,
    emplacement,
    secteur,
    activite,
    ref_alti,
    cote_cmh,
    type_atm,
    liste_atm,
    interventions_sur_atm
  ) {
    this.id_atm = id_atm;
    this.emplacement = emplacement;
    this.secteur = secteur;
    this.activite = activite;
    this.ref_alti = ref_alti;
    this.cote_cmh = cote_cmh;
    this.type_atm = type_atm;
    this.liste_atm = liste_atm;
    this.interventions_sur_atm = interventions_sur_atm;
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
