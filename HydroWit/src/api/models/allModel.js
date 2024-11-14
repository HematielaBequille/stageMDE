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

class Sensor {}

module.exports = Station;
module.exports = Sensor;
