class TelemesureStation {
  constructor(station, capteur) {
    this.station = station;
    this.capteur = capteur;
  }
}

class TelemesureSensor {
  constructor(station, capteur, date, heure, valeur) {
    this.station = station;
    this.capteur = capteur;
    this.date = date;
    this.heure = heure;
    this.valeur = valeur;
  }
}
