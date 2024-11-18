import time
import pandas as pd
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Configuration des options du navigateur
chrome_options = Options()
chrome_options.add_argument("--headless")  # Exécuter Chrome en mode headless
chrome_options.add_argument("--disable-gpu")

# Démarrage du navigateur
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

# Accéder à la page web
url = 'https://maree.info/19'
driver.get(url)

# Attendre que la page se charge complètement
time.sleep(3)

# Liste pour stocker les données réorganisées
marées_data = []

# Extraire la date du mois
try:
    date_element = driver.find_element(By.XPATH, "//th[contains(text(), 'Date')]")
    date = date_element.find_element(By.XPATH, "following-sibling::th").text.strip()
except Exception as e:
    date = "Date non trouvée"
    print(f"Erreur lors de l'extraction de la date: {e}")

# Récupérer le tableau des marées
try:
    table = driver.find_element(By.ID, "MareeJours")
    rows = table.find_elements(By.TAG_NAME, "tr")  # Récupérer toutes les lignes du tableau

    # Initialisation des variables pour les valeurs précédentes
    previous_hour = None
    previous_height = None

    # Parcours des lignes du tableau
    for row in rows[1:]:
        cols = row.find_elements(By.TAG_NAME, "td")  # Récupérer les colonnes de chaque ligne
        if len(cols) == 3:
            heures = cols[0].text.split("\n")  # Séparer les heures
            hauteurs = cols[1].text.split("\n")  # Séparer les hauteurs
            coefficients = cols[2].text.split("\n")  # Séparer les coefficients

            # Remplir les données manquantes en associant chaque élément avec les précédents
            for i in range(len(heures)):
                h = heures[i].strip() if heures[i].strip() else previous_hour
                ha = hauteurs[i].strip() if hauteurs[i].strip() else previous_height
                c = coefficients[i].strip()

                # Ajouter la date correctement pour chaque ligne
                marées_data.append([date, h, ha, c])
                previous_hour = h
                previous_height = ha

except Exception as e:
    print(f"Erreur lors de l'extraction des données: {e}")

# Créer un DataFrame pandas avec les données réorganisées
df = pd.DataFrame(marées_data, columns=["Date", "Heure", "Hauteur", "Coefficient"])

# Sauvegarder le DataFrame dans un fichier Excel
df.to_excel("marees_reorganisees.xlsx", index=False, engine='openpyxl')

# Fermer le navigateur
driver.quit()

print("Le fichier Excel 'marees_reorganisees.xlsx' a été généré.")
