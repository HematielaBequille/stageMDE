export interface Sensor {
  id_capteur: string;
  libelle_capteur: string;
  unite_capteur: string;
}

export class MareegrapheSensor implements Sensor {
  id_capteur: string;
  libelle_capteur: string;
  unite_capteur: string;

  constructor(
    id_capteur: string,
    libelle_capteur: string,
    unite_capteur: string
  ) {
    this.id_capteur = id_capteur;
    this.libelle_capteur = libelle_capteur;
    this.unite_capteur = unite_capteur;
  }
}

export class MeteorologieSensor implements Sensor {
  id_capteur: string;
  libelle_capteur: string;
  unite_capteur: string;

  constructor(
    id_capteur: string,
    libelle_capteur: string,
    unite_capteur: string
  ) {
    this.id_capteur = id_capteur;
    this.libelle_capteur = libelle_capteur;
    this.unite_capteur = unite_capteur;
  }
}
