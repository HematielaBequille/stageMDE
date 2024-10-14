# Installation d'un module GeoNature


## Installation automatisée

### **Résumé des étapes**
1. Cloner le repository du module concerné au même niveau que le répertoire GeoNature
2. Passer en environnement virtuel Python
3. Lancer la commande d'installation automatique `install-gn-module`
4. Donner les permisions adéquates
5. Relancer GeoNature et le worker


### **Déroulé des étapes**  
*Exemple avec le module Import* 

[Dépôt Github du SI des PNF pour trouver le modulé GeoNature souhaité](https://github.com/PnX-SI)

+ Cloner le repository de module d'import  
  `git clone https://github.com/PnX-SI/gn_module_import.git`

+ Passer en environnement virtuel Python  
  `source <dossier GeoNature>/backend/venv/bin/activate`  
  ```bash
  source ~/geonature/backend/venv/bin/activate
  ```

+ Lancer la commande d'installation automatique  
  `geonature install-gn-module <dossier GeoNature> <code du module>`  
  ```bash
  geonature install-gn-module ~/gn_module_import/ IMPORT
  ```

+ Donner les permissions adéquates (ici administrateurs)  
  *changer "Grp_Admin" par le nom de votre groupe d'administrateur si vous l'avez changé* 
  ```bash
  geonature permissions supergrant --group --nom "Grp_admin"
  ```

+ Quitter l'environnement virtuel Python
  ```bash
  deactivate
  ```

+ Relancer Geonature et son worker  
  ```bash
  sudo systemctl restart geonature
  sudo systemctl restart geonature-worker
  ```
   
**Si erreur 404 :** `systemctl reload apache2`   
**Si erreur 503 :** `sudo reboot`

---

## Installation manuelle
TODO

---

### Liste des modules GeoNature avec `code du module`
+ [Import](https://github.com/PnX-SI/gn_module_import) `IMPORT`
+ [Export](https://github.com/PnX-SI/gn_module_export) `EXPORTS`
+ [Monitoring](https://github.com/PnX-SI/gn_module_monitoring) `MONITORINGS`
+ [Suivi Flore Territoire](https://github.com/PnX-SI/gn_module_suivi_flore_territoire) ``
+ [Suivi Habitation Territoire](https://github.com/PnX-SI/gn_module_suivi_habitat_territoire) ``
+ [Suivi Habitat Station](https://github.com/PnX-SI/gn_module_monitoring_habitat_station) ``
+ [Bilan Stationnel Flore](https://github.com/PnX-SI/gn_module_flore_prioritaire) ``
+ [Zones Humides](https://github.com/PnX-SI/gn_module_ZH) `ZONES_HUMIDES`
+ [Modulator](https://github.com/PnX-SI/gn_modulator) `MODULATOR`
+ [Dashboard](https://github.com/PnX-SI/gn_module_dashboard) `DASHBOARD`

---

### Sous-modules du module Monitoring
+ [Liste des sous-modules](https://github.com/PnX-SI/protocoles_suivi)

#### Installation
+ Cloner le repository des protocoles de suivis (lien ci-dessus) `git clone`

+ Déplacer le dossier du sous-module souhaité au chemin suivant de son installaton du module Monitoring
```bash
mv ~/protocoles_suivi/DOSSIER DU SOUS-MODULE ~/gn_module_monitoring/contrib
```
+ Créer un lien symbolique vers le dossierdu sous-module dans le dossier Media de GeoNature
```bash
ln -s ~/gn_module_monitoring/contrib/DOSSIER DU SOUS-MODULE ~/geonature/backend/media/monitorings/DOSSIER DU SOUS-MODULE
```
+ Lancer la commande d'installation
```bash
geonature monitorings install CODE OU NOM DU MODULE
```
+ Donner les permissions adéquates (comme pour un module GeoNature)
+ Configurer le sous-module (via l'interface graphique directement dans le module Monitoring)
