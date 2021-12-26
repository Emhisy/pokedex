const Consigne = () => (
    <div>
        <div>
            <p>Consigne</p><br/>
            <h1>Partiel ReactJS IPSSI Paris<br/>
                -<br/>
                EISI 23.1 AW</h1>
            <p>
                <span style={{fontWeight: 'bold'}}>Sujet :</span> Construire une application ReactJS qui appelle une API et af che un ensemble
                de données.
            </p><br/>
            <p style={{fontWeight: 'bold'}}>
                Deadline : Lundi 27 Décembre 2021 - au soir, mi-nuit
            </p><br/>
            <p>
                Développement d’un Pokédex.<br/>
                L’API que vous utiliserez : https://pokeapi.co/<br/>
            </p><br/>
            <p style={{fontWeight: 'bold'}}>
                Spécificités:
            </p><br/>
            <p>
                Un container liste qui af chera le nom et l’image de face de chaque Pokémon.
                Ce container sera en coordination avec la barre de ltre. La barre de ltre doit quand à
                elle modi er l’URL de la page pour permettre le partage et inversement récupérer la
                valeur au moment du chargement (exemple : my-app?search=pika devra générer le
                ltre avec la valeur pika et la liste à jour).
            </p><br/>
            <p>
                L’application devra également prendre en compte la valeur de l’URL (exemple : my-
                app/pikachu/ af chera automatiquement les données de détails de pikachu) l’envoie
                de la requête se fera avec l’évènement submit, il ne faut pas d’ID de Pokémon mais un
                slug dans l’url, ça correspond à rien pour un utilisateur.
            </p><br/>
            <p>
                Un container de détail qui af chera, le nom et l’image de face, le poids, la taille, les 3
                première capacités, les statistiques et le type dans un style particulier (.cf image). Si
                vous désirez en faire plus, libre à vous.
            </p><br/>
            <p>
                Un loader visuel CSS doit être mis en place pour le chargement ou rechargement des
                composants, pensez aux changements de status liés à l’application.
            </p><br/>
            <p>
                Un système de stockage en favoris devra être mis en place avec une page dédiée avec
                une persistence si on recharge le navigateur.
            </p><br/>
            <p>
                Une autre page de liste par type sera à développer, avec une autre vue qui liste les
                pokémons en fonction du type choisis au préalable. Prévoyez également un menu pour
                permettre de retourner à l’accueil.
            </p><br/>
            <p>
                Une modale avec un formulaire intégré est à développer pour pouvoir vous contacter
                en envoyant un mail à votre adresse étudiante pour vous remercier de votre travail.
            </p><br/>
            <p>
                Au minimum, deux calls d’API sont requis pour ce test, sera testé l’optimisation de
                l’application sur les appels.
            </p><br/>
            <p style={{fontWeight: 'bold'}}>
                Particularités :
            </p><br/>
            <p>
                <ul>
                    <li>
                        L’utilisation de librairies JavaScript est autorisé.
                    </li>
                    <li>
                        - Axios est autorisé pour les calls avec l’API et les gestions d’erreurs.</li>
                    <li>
                        - L’utilisation de Next.js est autorisée.</li>
                    <li>
                        - L’utilisation de jQuery est proscrite.</li>
                    <li>
                        - Une intégration SCSS/SASS avec ou sans framework css est obligatoire (je veux une
                        app agréable visuellement, libre à vous pour le framework). Les utilisations de
                        librairies de composants sont autorisés.</li>
                </ul>
            </p><br/>
            <p style={{fontWeight: 'bold'}}>
                Seront noté :
            </p><br/>
            <p>
                <ul>
                    <li>
                        - Le bon fonctionnement de votre application avec la prise en compte de l’ensemble
                        des possibilités avec l’UI (chargement/rechargement)</li>
                    <li>
                        - Les bonnes pratiques avec :
                        <ul>
                            <li>
                                - L’indentation
                            </li>
                            <li>
                                - L’utilisation des syntaxes de composants optimales
                            </li>
                            <li>
                                - L’organisation des dossiers/découpage des composants
                            </li>
                            <li>
                                - L’optimisation des imports
                            </li>
                        </ul></li>
                    <li>
                        - La stabilité de l’application avec les erreurs af chées dans la console de
                        développement du navigateur.
                    </li>
                    <li>
                        - L’utilisation de git est obligatoire.
                    </li>
                </ul>
            </p><br/>
            <p style={{fontWeight: 'bold'}}>
                Une attention particulière sera accordée à :
            </p><br/>
            <p>
                <ul>
                    <li>
                        - L’utilisation de git et l’outils GitHub avec l’historique des commits, tous projets
                        rendu en dehors du cadre de Github seront refusés.
                    </li>
                </ul>
            </p><br/>
            <p>
                Comme expliqué pendant le cours, je vous conseil grandement de procéder de façon
                itérative pour construire votre projet. L’organisation du fonctionnement du code est
                également libre (tu peux créer uniquement des fonctions ou les combiner avec des
                classes)
            </p><br/>
            <p style={{fontWeight: 'bold'}}>
                L’utilisation de tutoriels est formellement proscrite, toutes correspondances
                entrainera des sanctions. C’est un projet par personne et toute recopie ou code
                similaire seront également pénalisés.
            </p><br/>
            <p style={{fontWeight: 'bold'}}>
                Tout retard entrainera une soustraction de 5 points par jours de retard.
            </p><br/>
            <p>
                <span style={{fontWeight: 'bold'}}>Le rendu devra se faire sous forme de dépôt Github privé avec uniquement toi en
            tant que modi cateur/éditeur autorisé.</span>
                Cela permet de limiter toute copie entre élève
                et d’avoir le code stocké en ligne en cas de panne d’ordinateur (toutes excuses d’ordre
                technique seront donc refusées).
            </p>
        </div>
    </div>);

export default Consigne;