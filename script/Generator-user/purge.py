import os
import glob
import shutil
from tqdm import tqdm

# Défini chemin des images
image_folder_path = "../../public/random_avatar/"

# Sélectionne ‘*.png’
files = glob.glob(image_folder_path + '/*.png')

# Ajoute le chemin du fichier user à la liste des fichiers à supprimer
user_file_path = "../../app/api/user/"
files.append(user_file_path)

# Crée une barre de progression
progress_bar = tqdm(total=len(files), desc="Deleting files")

for f in files:
    try:
        # Vérifie si f est un répertoire
        if os.path.isdir(f):
            # Supprime le répertoire
            shutil.rmtree(f)
        else:
            # Supprime le fichier
            os.remove(f)
        print(f'Un fichier a été supprimé : {f}')

        # Met à jour la barre de progression
        progress_bar.update(1)

    except OSError as e:
        print(f'Erreur : {f} : {e}')

# Ferme la barre de progression
progress_bar.close()
