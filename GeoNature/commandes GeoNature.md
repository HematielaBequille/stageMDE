# Liste générales de commandes GeoNature

## Concernant les API
+ `systemctl start geonature` : Démarrer GeoNature
+ `systemctl stop geonature` : Arrêter GeoNature
+ `systemctl reload geonature` : Recharger GeoNature
+ `systemctl restart geonature` : Redémarrer GeoNature
+ `systemctl status geonature` : Vérifier l’état de GeoNature
---

## Concernant l'environnement virtuel Python (nécessaire pour les commandes concernant les modules)
+ `source backend/venv/bin/activate` : Passer en environnement virtuel Python
---

## Concernant les modules
+ `dev-back` : Lance le backend en mode développement
+ `install-gn-module CODE_DU_MODULE` : Installe un gn_module
+ `activate-gn-module` : Active un gn_module installé (Possibilité d’activer seulement le backend ou le frontend)
+ `deactivate-gn-module` : Désactive gn_un module activé (Possibilté de désactiver seulement le backend ou le frontend)
+ `generate-frontend-module-route` : Génère ou regénère le fichier de routing du frontend en incluant les gn_module installés (Fait automatiquement lors de l’installation d’un module)
---

## Mise en maintenance
+ Désactiver la configuration Apache de GeoNature et activer la configuration du mode maintenance :
```bash
sudo a2dissite geonature
sudo a2ensite geonature_maintenance
sudo apachectl restart
```
+ Désactiver la configuration Apache du mode maintenance et activer la configuration de Geonature :
```bash
sudo a2dissite geonature_maintenance
sudo a2ensite geonature
sudo apachectl restart
```
---

## Concernant le SGBD
+ `service postgresql restart` : Redémarrer PostGreSQL
+ Dans ce cas, il faut redémarrer les API de GeoNature et TaxHub :
```bash
systemctl restart geonature
systemctl restart taxhub
```
---