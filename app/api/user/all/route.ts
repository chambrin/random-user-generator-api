
            export async function GET(request: Request, res: Response) {
            const data = [{"id": 1, "name": "Claire Bertrand", "email": "robertbodin@example.com", "username": "ihamel", "job": "op\u00e9rateur de fabrication de produits alimentaires", "gender": "Femme", "phone_number": "+33 5 90 93 38 68", "website": "http://www.blanchet.com/", "address": "22, boulevard Claude L\u00e9v\u00eaque, 67421 Saint In\u00e8sVille", "birthdate": "1985-08-16", "age": 38, "interests": ["Cuisine", "Art", "Animaux", "Voyages", "Technologie", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_1.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 2, "name": "Manon Benard", "email": "bruneaulaurence@example.com", "username": "wmaury", "job": "pisteur secouriste", "gender": "Homme", "phone_number": "+33 (0)5 49 57 00 74", "website": "https://www.teixeira.com/", "address": "7, avenue Nicolas, 92875 AubertBourg", "birthdate": "1997-06-08", "age": 26, "interests": ["Animaux", "Lecture", "Cuisine", "Sport", "Musique", "Technologie"], "user_image_url": "/random_avatar/user_2.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 3, "name": "Bertrand Meunier", "email": "lerouxantoinette@example.org", "username": "allardfrancois", "job": "accessoiriste", "gender": "Homme", "phone_number": "04 32 09 04 41", "website": "http://lombard.net/", "address": "755, avenue de Renard, 54220 Sainte Marine", "birthdate": "1977-08-05", "age": 46, "interests": ["Art", "Technologie", "Lecture"], "user_image_url": "/random_avatar/user_3.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 4, "name": "Lucas Le Valentin", "email": "hervemichelle@example.org", "username": "mlecoq", "job": "ing\u00e9nieur \u00e9lectricien", "gender": "Homme", "phone_number": "0183899113", "website": "https://fouquet.fr/", "address": "67, rue de Lopes, 19841 Schmitt-sur-Pires", "birthdate": "1999-04-12", "age": 24, "interests": ["Sport", "Voyages", "Art", "Animaux", "Lecture", "Technologie"], "user_image_url": "/random_avatar/user_4.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 5, "name": "Sophie Schneider-Rodrigues", "email": "josephine79@example.org", "username": "marcellegimenez", "job": "chef d'exploitation d'usine d'incin\u00e9ration", "gender": "Femme", "phone_number": "+33 5 36 97 51 45", "website": "http://www.berthelot.fr/", "address": "54, chemin Breton, 71990 Hoareau", "birthdate": "1967-09-25", "age": 55, "interests": ["Lecture", "Photo", "Musique", "Sport", "Technologie"], "user_image_url": "/random_avatar/user_5.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 6, "name": "Jean Raymond du Lagarde", "email": "auroreschmitt@example.net", "username": "claudinebuisson", "job": "consultant", "gender": "Homme", "phone_number": "+33 (0)5 08 50 72 28", "website": "http://www.mace.fr/", "address": "7, chemin de Morel, 55457 MercierVille", "birthdate": "1978-07-20", "age": 45, "interests": ["Voyages", "Cuisine", "Animaux", "Lecture", "Art", "Sport", "Photo", "Cin\u00e9ma", "Technologie"], "user_image_url": "/random_avatar/user_6.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 7, "name": "Sylvie Martel", "email": "thibaultbouvet@example.com", "username": "laurentbousquet", "job": "m\u00e9canicien d'entretien d'avion", "gender": "Femme", "phone_number": "+33 3 39 37 82 39", "website": "http://petit.net/", "address": "761, avenue de Colas, 83980 Saint Isaac-la-For\u00eat", "birthdate": "1957-02-23", "age": 66, "interests": ["Lecture", "Voyages", "Sport", "Animaux", "Technologie", "Musique", "Cin\u00e9ma", "Cuisine", "Photo"], "user_image_url": "/random_avatar/user_7.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 8, "name": "Gr\u00e9goire Le Reynaud", "email": "maurice06@example.org", "username": "christophe06", "job": "ing\u00e9nieur r\u00e9servoir", "gender": "Homme", "phone_number": "0214716226", "website": "https://bertin.com/", "address": "77, rue Jourdan, 63196 Dumontnec", "birthdate": "1960-11-19", "age": 62, "interests": ["Musique", "Art", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_8.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 9, "name": "Nicolas David", "email": "adriennedumas@example.com", "username": "zrobert", "job": "d\u00e9veloppeur d'applications mobiles", "gender": "Femme", "phone_number": "+33 2 34 38 15 55", "website": "http://gregoire.fr/", "address": "55, rue de Lema\u00eetre, 18574 Sainte J\u00e9r\u00f4me-les-Bains", "birthdate": "1982-03-22", "age": 41, "interests": ["Technologie", "Animaux", "Lecture", "Photo"], "user_image_url": "/random_avatar/user_9.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 10, "name": "Marcelle Guillou", "email": "lebrungeorges@example.com", "username": "sylvie77", "job": "animateur nature nature", "gender": "Femme", "phone_number": "+33 (0)5 96 88 53 97", "website": "https://pascal.fr/", "address": "389, chemin Bodin, 34982 Chevallier", "birthdate": "1998-02-19", "age": 25, "interests": ["Cuisine", "Technologie", "Sport"], "user_image_url": "/random_avatar/user_10.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 11, "name": "Michel Lacombe-Muller", "email": "andreevasseur@example.com", "username": "mathilderaynaud", "job": "charg\u00e9 d'affaires en g\u00e9nie m\u00e9canique", "gender": "Homme", "phone_number": "04 38 42 61 00", "website": "http://www.perrot.net/", "address": "10, rue Christine Schneider, 68703 MarionBourg", "birthdate": "1967-07-14", "age": 56, "interests": ["Cin\u00e9ma", "Art", "Technologie", "Voyages", "Musique", "Lecture", "Sport", "Cuisine"], "user_image_url": "/random_avatar/user_11.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 12, "name": "Thierry Rodrigues", "email": "maggie06@example.com", "username": "anaistessier", "job": "concepteur designer packaging", "gender": "Homme", "phone_number": "0365424822", "website": "http://pascal.fr/", "address": "452, rue Eug\u00e8ne Girard, 26649 Grenier", "birthdate": "1993-09-05", "age": 30, "interests": ["Cuisine", "Sport", "Voyages", "Photo"], "user_image_url": "/random_avatar/user_12.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 13, "name": "J\u00e9r\u00f4me Chevalier-Samson", "email": "martineaujacques@example.org", "username": "manon83", "job": "agent de d\u00e9veloppement touristique", "gender": "Femme", "phone_number": "+33 (0)3 51 67 62 68", "website": "http://www.blin.com/", "address": "89, chemin Marchal, 67535 Godard", "birthdate": "1959-02-12", "age": 64, "interests": ["Art", "Musique", "Cuisine", "Sport", "Photo", "Technologie", "Animaux"], "user_image_url": "/random_avatar/user_13.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 14, "name": "Alex Pasquier", "email": "anais26@example.com", "username": "olivie24", "job": "horticulteur", "gender": "Homme", "phone_number": "+33 (0)2 36 09 65 71", "website": "http://www.bouchet.net/", "address": "38, chemin Meunier, 47263 Lemoinedan", "birthdate": "1953-02-15", "age": 70, "interests": ["Lecture", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_14.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 15, "name": "Agn\u00e8s Garnier", "email": "bertrand61@example.net", "username": "noemi26", "job": "anatomiste", "gender": "Femme", "phone_number": "+33 (0)3 57 55 44 14", "website": "http://aubry.fr/", "address": "avenue Duval, 32407 Joseph", "birthdate": "1968-12-20", "age": 54, "interests": ["Cin\u00e9ma", "Lecture", "Photo", "Animaux"], "user_image_url": "/random_avatar/user_15.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 16, "name": "Paul Adam", "email": "zbourgeois@example.com", "username": "caroline14", "job": "vendeur en animalerie", "gender": "Femme", "phone_number": "+33 2 34 09 89 44", "website": "https://www.didier.fr/", "address": "57, avenue de Gaillard, 91968 Barthelemy-la-For\u00eat", "birthdate": "1957-08-15", "age": 66, "interests": ["Technologie", "Voyages", "Cin\u00e9ma", "Animaux", "Lecture"], "user_image_url": "/random_avatar/user_16.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 17, "name": "\u00c9lise Charles", "email": "hubertelodie@example.org", "username": "laurentcharles", "job": "documentaliste", "gender": "Homme", "phone_number": "+33 (0)4 23 02 14 35", "website": "http://www.marechal.net/", "address": "3, rue Tristan Duhamel, 90147 Marin", "birthdate": "1961-09-03", "age": 62, "interests": ["Cin\u00e9ma", "Animaux", "Sport", "Cuisine", "Art", "Voyages", "Technologie", "Musique"], "user_image_url": "/random_avatar/user_17.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 18, "name": "Philippe Albert", "email": "llenoir@example.com", "username": "pasquierjacques", "job": "consultant SaaS", "gender": "Homme", "phone_number": "+33 (0)4 43 26 94 45", "website": "http://www.denis.org/", "address": "11, avenue de Tessier, 52330 Vallet", "birthdate": "1992-09-28", "age": 30, "interests": ["Sport", "Technologie", "Musique", "Art", "Voyages", "Photo", "Animaux", "Cuisine"], "user_image_url": "/random_avatar/user_18.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 19, "name": "Susan Martineau", "email": "jeannevasseur@example.org", "username": "hrodrigues", "job": "climatologue", "gender": "Femme", "phone_number": "+33 (0)4 74 75 53 88", "website": "https://www.gonzalez.com/", "address": "47, boulevard David, 63819 Sainte ThibaultVille", "birthdate": "1993-03-23", "age": 30, "interests": ["Lecture", "Photo", "Cuisine", "Sport", "Art", "Musique", "Voyages", "Technologie", "Animaux"], "user_image_url": "/random_avatar/user_19.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 20, "name": "Sylvie Bernier", "email": "margot88@example.org", "username": "merlefranck", "job": "architecte naval", "gender": "Femme", "phone_number": "0160003588", "website": "https://pottier.fr/", "address": "60, avenue de Olivier, 10137 Lebrun", "birthdate": "1953-05-01", "age": 70, "interests": ["Voyages", "Photo", "Sport", "Cuisine", "Art", "Musique", "Lecture"], "user_image_url": "/random_avatar/user_20.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 21, "name": "Yves Roux", "email": "augustinvoisin@example.org", "username": "madeleine65", "job": "administrateur de mission humanitaire", "gender": "Homme", "phone_number": "+33 5 79 72 45 64", "website": "https://www.barbe.com/", "address": "boulevard Chantal L\u00e9ger, 87484 Fournier", "birthdate": "1987-11-05", "age": 35, "interests": ["Art", "Animaux", "Technologie", "Photo", "Cin\u00e9ma", "Voyages", "Musique", "Sport", "Lecture", "Cuisine"], "user_image_url": "/random_avatar/user_21.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 22, "name": "Benjamin Lagarde-Leclercq", "email": "alexandrepascal@example.net", "username": "richardperret", "job": "barman", "gender": "Homme", "phone_number": "01 73 54 51 61", "website": "https://levy.fr/", "address": "44, boulevard Bonneau, 14354 Albert", "birthdate": "1990-02-18", "age": 33, "interests": ["Cuisine", "Photo", "Art", "Sport"], "user_image_url": "/random_avatar/user_22.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 23, "name": "Christiane Dufour", "email": "simone69@example.net", "username": "hherve", "job": "\u00e9ducateur sp\u00e9cialis\u00e9 sp\u00e9cialis\u00e9e", "gender": "Femme", "phone_number": "01 69 90 51 77", "website": "https://www.martineau.net/", "address": "15, boulevard de Merle, 53193 Merle-sur-Albert", "birthdate": "1969-03-05", "age": 54, "interests": ["Voyages", "Lecture"], "user_image_url": "/random_avatar/user_23.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 24, "name": "Astrid Le Lucas", "email": "riouchristelle@example.com", "username": "tprevost", "job": "charg\u00e9 d'affaires en g\u00e9nie m\u00e9canique", "gender": "Femme", "phone_number": "01 73 93 63 96", "website": "http://www.lefebvre.com/", "address": "696, rue de Pelletier, 41652 Saint Hortense", "birthdate": "1960-05-10", "age": 63, "interests": ["Art", "Technologie", "Lecture", "Sport", "Cin\u00e9ma", "Photo", "Musique"], "user_image_url": "/random_avatar/user_24.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 25, "name": "Astrid Monnier", "email": "stephaniegodard@example.com", "username": "thibautmaillet", "job": "c\u00e9ramiste", "gender": "Homme", "phone_number": "04 42 89 32 00", "website": "https://www.hardy.fr/", "address": "chemin Bigot, 76375 Voisin-les-Bains", "birthdate": "1971-11-25", "age": 51, "interests": ["Animaux", "Photo", "Musique", "Cuisine", "Voyages", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_25.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 26, "name": "Anne Didier", "email": "glecoq@example.org", "username": "alphonse32", "job": "costumier", "gender": "Femme", "phone_number": "0798747851", "website": "https://www.marques.fr/", "address": "54, rue Paris, 17447 Mahe-les-Bains", "birthdate": "1956-09-03", "age": 67, "interests": ["Art", "Animaux", "Cuisine", "Lecture"], "user_image_url": "/random_avatar/user_26.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 27, "name": "Marcelle Nguyen", "email": "michelle80@example.com", "username": "jacquotroland", "job": "chercheur en chimie", "gender": "Femme", "phone_number": "02 44 39 81 26", "website": "https://www.barbier.fr/", "address": "99, avenue Aim\u00e9e Faivre, 63928 Cordier", "birthdate": "1982-12-01", "age": 40, "interests": ["Cuisine", "Photo"], "user_image_url": "/random_avatar/user_27.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 28, "name": "Nathalie Le Bonneau", "email": "christiane25@example.net", "username": "jmarion", "job": "g\u00e9ochimiste", "gender": "Femme", "phone_number": "+33 (0)4 92 64 13 44", "website": "https://bruneau.com/", "address": "2, boulevard Ollivier, 11366 Sainte Gabrielle-sur-Mer", "birthdate": "1976-01-19", "age": 47, "interests": ["Cuisine", "Art", "Sport", "Technologie", "Musique"], "user_image_url": "/random_avatar/user_28.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 29, "name": "Richard Pichon", "email": "glopez@example.com", "username": "margaudbernard", "job": "conseiller p\u00e9nitentiaire d'insertion et de probation", "gender": "Femme", "phone_number": "+33 4 43 85 98 67", "website": "https://pasquier.net/", "address": "6, rue de Renaud, 25547 Navarro", "birthdate": "2002-07-08", "age": 21, "interests": ["Animaux", "Musique", "Cuisine", "Sport"], "user_image_url": "/random_avatar/user_29.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 30, "name": "Claudine Robert de la Guilbert", "email": "laurentle-gall@example.com", "username": "couturierthibault", "job": "juge des contentieux de la protection", "gender": "Femme", "phone_number": "0164355609", "website": "http://www.benard.net/", "address": "52, boulevard Jean Launay, 82543 Aubry", "birthdate": "1966-01-04", "age": 57, "interests": ["Art", "Technologie", "Cuisine", "Animaux", "Sport"], "user_image_url": "/random_avatar/user_30.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 31, "name": "Olivie Duhamel", "email": "anne88@example.com", "username": "erenault", "job": "gestionnaire de contrats d'assurance", "gender": "Homme", "phone_number": "+33 (0)4 42 33 90 58", "website": "http://guillon.com/", "address": "rue de Perrier, 68294 Sainte Capucine-sur-Mer", "birthdate": "1967-12-25", "age": 55, "interests": ["Lecture", "Technologie", "Musique", "Cuisine"], "user_image_url": "/random_avatar/user_31.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 32, "name": "Thibaut Regnier", "email": "lucas36@example.com", "username": "ilefort", "job": "entra\u00eeneur sportif sportive", "gender": "Homme", "phone_number": "0149327224", "website": "https://www.peron.com/", "address": "570, avenue Nicole Rousset, 62402 Mahe", "birthdate": "1997-10-01", "age": 25, "interests": ["Photo", "Art", "Musique", "Cuisine", "Technologie", "Sport", "Voyages", "Animaux", "Cin\u00e9ma", "Lecture"], "user_image_url": "/random_avatar/user_32.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 33, "name": "Thierry Blin", "email": "ybonneau@example.net", "username": "rlebrun", "job": "professeur dans l'enseignement agricole", "gender": "Homme", "phone_number": "0547280836", "website": "https://www.maillard.fr/", "address": "419, rue de Nguyen, 52775 Bonnin", "birthdate": "1970-07-27", "age": 53, "interests": ["Musique", "Art", "Voyages", "Cuisine", "Cin\u00e9ma", "Animaux"], "user_image_url": "/random_avatar/user_33.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 34, "name": "Tristan Valette", "email": "mailletnicole@example.net", "username": "dtecher", "job": "commissaire-priseur", "gender": "Femme", "phone_number": "+33 (0)4 42 17 14 78", "website": "https://lacroix.com/", "address": "722, chemin Ad\u00e8le Perret, 84245 Martineau", "birthdate": "2002-08-07", "age": 21, "interests": ["Lecture", "Musique"], "user_image_url": "/random_avatar/user_34.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 35, "name": "\u00c9douard Colin", "email": "nlaurent@example.org", "username": "lefevreconstance", "job": "administrateur judiciaire", "gender": "Homme", "phone_number": "+33 (0)3 80 36 03 09", "website": "https://www.dumont.fr/", "address": "8, rue Thomas, 43418 Sainte Philippine", "birthdate": "1988-12-19", "age": 34, "interests": ["Musique", "Lecture", "Photo", "Voyages", "Cuisine", "Technologie", "Sport", "Art", "Animaux", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_35.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 36, "name": "Brigitte Guillaume", "email": "suzannebecker@example.com", "username": "remy38", "job": "ing\u00e9nieur en \u00e9lectronique num\u00e9rique", "gender": "Femme", "phone_number": "+33 (0)3 72 40 79 07", "website": "http://www.aubry.fr/", "address": "65, avenue Louis Bailly, 27837 Leduc-la-For\u00eat", "birthdate": "1989-01-14", "age": 34, "interests": ["Art", "Technologie", "Lecture", "Sport", "Voyages", "Animaux", "Cuisine", "Musique", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_36.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 37, "name": "Alexandre Bouchet", "email": "dufouralfred@example.net", "username": "pblanc", "job": "p\u00e9diatre", "gender": "Homme", "phone_number": "+33 4 81 35 63 67", "website": "http://www.maillard.com/", "address": "360, chemin Oc\u00e9ane Cohen, 30592 HardyBourg", "birthdate": "1976-01-28", "age": 47, "interests": ["Animaux", "Cin\u00e9ma", "Lecture", "Cuisine", "Musique"], "user_image_url": "/random_avatar/user_37.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 38, "name": "Matthieu Maillot", "email": "lorraine69@example.org", "username": "michellelegros", "job": "\u00e9conomiste de la construction", "gender": "Homme", "phone_number": "03 87 12 29 92", "website": "https://bertin.com/", "address": "42, avenue de Bertrand, 19457 Chauveau-sur-Mer", "birthdate": "1977-02-27", "age": 46, "interests": ["Art", "Photo", "Lecture", "Sport", "Musique", "Technologie", "Animaux", "Cin\u00e9ma", "Voyages", "Cuisine"], "user_image_url": "/random_avatar/user_38.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 39, "name": "\u00c9douard Arnaud", "email": "anastasiecosta@example.org", "username": "joseph63", "job": "restaurateur d'oeuvres d'art", "gender": "Homme", "phone_number": "+33 1 41 75 43 41", "website": "http://lenoir.com/", "address": "713, avenue de Julien, 92456 Humbert", "birthdate": "1987-10-25", "age": 35, "interests": ["Cuisine", "Technologie", "Lecture", "Cin\u00e9ma", "Animaux", "Musique", "Sport", "Voyages", "Photo", "Art"], "user_image_url": "/random_avatar/user_39.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}, {"id": 40, "name": "Julien Bazin", "email": "victor81@example.com", "username": "spascal", "job": "manipulateur en \u00e9lectroradiologie m\u00e9dicale", "gender": "Homme", "phone_number": "0457761987", "website": "http://leblanc.org/", "address": "65, avenue de Boutin, 65437 Renarddan", "birthdate": "1985-12-20", "age": 37, "interests": ["Lecture", "Animaux", "Technologie", "Photo", "Sport", "Voyages", "Musique", "Cuisine", "Art"], "user_image_url": "/random_avatar/user_40.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"}];
            return new Response(JSON.stringify(data), {
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    },
                });
        }
            