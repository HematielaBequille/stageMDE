"""""
print("j'apprends python")
print (17+35*2)

nom = "Dupont"
prenom = "Jean"
age = 30

print(f"Bonjour, je m'appelle {prenom} {nom} et j'ai {age} ans.")

fruits = ["pomme", "banane", "orange"]
print(fruits)
fruits.append('kiwi')
print(fruits)
fruits[2] = 'ananas'
print(fruits)
len(fruits)
fruits.sort()
print(fruits)
"""

fruits = {
    'pomme': 'rouge',
    'banane': 'jaune',
    'orange': 'orange'
}
print(fruits.items())
fruits['kiwi'] = 'vert'
print(fruits.items())
couleur_banane = fruits.get('banane')
print(couleur_banane)
fruits['pomme'] = 'vert'
print(fruits.items())
del fruits['banane']
print(fruits.items())