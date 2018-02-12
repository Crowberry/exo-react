import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));


/* // TODO

///// ------------------ GLOBAL

    => penser aux élément quand ils ne sont pas encore reçus


// /////////// ABSTRACT, API CALL

    url: "https://api.github.com/repos/stadline/js-technical-test/issues/2",
    url: "https://api.github.com/repos/stadline/js-technical-test/issues/2/comments",

    fonction api call pour récupérer les données
    prend en argument l'url de l'api:
    soit celle de l'issue, soit celle des ses commentaires
    (cette deuxième est obtenue par l'appel de la première)

    données qui nous intéressent:
        Issue:
            response.data.id
            response.data.comments_url
            response.data.author_association
            response.data.title
            response.data.html_url
            response.data.number
            response.data.created_at
            response.data.

            response.data.user.id
            response.data.user.type
            response.data.userlogin
            response.data.user.avatar_url
            response.data.user.html_url

        Comment:
            response.data[i].id
            response.data[i].body
            response.data[i].author_association
            response.data[i].created_at

            response.data[i].user.id
            response.data[i].user.login
            response.data[i].user.avatar_url
            response.data[i].user.html_url


    // concernant l'user, doit pouvoir dire s'il est l'auteur de l'issue ou non (comparaison par id)


///////////--------------- STRUCTURE, CONTENU, ET BESOINS API ---------------------------


                                        // Assuming every value start by 'response.data'
    données utiles (abstract)
        id issue                        .id
        url api comments issues         .comments_url
        id user                         .user.id
        author_association              .author_association (ex: collaborator)


    header
        titre (lien)
            1 id (key)                  .user.id
            nom de l'issue              .title
            url issue github            .html_url
            numero de l'issue           .number

        date de création                .created_at

        (2eme wave) Input qui reçoit nouvel url

    main
        title
            "Conversation with" +
            auteur (lien)
                1 id (key)                  .user.id
                nom user                    .user.login
                img avatar (src)            .user.avatar_url
                url page github             .user.html_url
                author_association          .author_association (ex: collaborator)

        thread
            liste des commentaires

                Contenu de l'issue
                    avatar (lien)
                        1 id (key)                  .user.id
                        img avatar (src)            .user.avatar_url
                        url page github             .html_url

                    body                            .body

                    /////////////////////////////// ici on fait référence à l'api des commentaires
                    /////////////////////////////// tableau de N commentaires,  donc response.data[i]

                N commentaires, pour 1 =>
                    1 id (key)                      .id

                    Auteur
                        1 id (key)                  .user.id
                        nom user                    .user.login
                        img avatar (src)            .user.avatar_url
                        url page github             .user.html_url
                        author_association          .author_association

                    Contenu
                        texte commentaire           .body
                        date creation               .created_at


*/
