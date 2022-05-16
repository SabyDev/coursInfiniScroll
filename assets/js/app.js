// on defini le container qu'on va stocker dans une variable container
const container = document.querySelector(".container");

// window avec un w miniscule indique la fenetre

// scroll Event.
// on va chercher dans le window car c elle qui contient le scroll et pas le container

window.addEventListener('scroll', () => {
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = document.documentElement;
    // scrollheight est la hauteur de la page total , scrollTop est le scroll en haut de page, clientHeight est la hauteur du contenu visible
    console.log('scrollTop: ' + scrollTop);
    console.log('clientHeight: ' + clientHeight);
    console.log('scrollHeight:' + scrollHeight);
    console.log('scrollHeight + clientHeight' + (scrollTop + clientHeight));

    //     let title = document.createElement("h2");
    //     let divText = document.createElement('p')
    //    title.innerText = 'lorem 5 mots';
    //    divText.innerText = ' blablablabla';
    //    div1.appendChild('title');
    //    div1.appendChild('divText');

    function createPost() {
        //   /Dans cette fonction createPost on crée une div class text(comme dans le html avec un h2 et un p et on le met enfant de la div container)
        let div1 = document.createElement("div");
        //  rajouter une class comme dans le html
        div1.className = 'text';
        //  on y met le contenu
        div1.innerHTML = `<h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum? Amet accusamus ab, eveniet iste vero nulla facilis laboriosam dolores illo pariatur soluta provident perspiciatis, distinctio illum magni asperiores, recusandae eius aperiam. Illo nobis voluptas quisquam, quo ipsa repellat sit accusamus, minus quasi excepturi distinctio culpa neque mollitia odit esse.</p> `
        // l'accrocher à son parent
        container.appendChild(div1);  
    }

    if (scrollTop + clientHeight > scrollHeight - 5) {
        createCard();
    }

    createCard = () => {
        // Création div principale
        let card = document.createElement('div');
        // je la stylise en appelant les class correspondante
        card.className = 'cardStyle card h2 p';
        // je dis que container est son parent
        container.appendChild(card);

        // création div img
        let divImg = document.createElement('div');
        // je la stylise en appelant la class correspondante
        divImg.className = 'imgCard';
        // je dis que card est son parent
        card.appendChild(divImg); 

        // je crée un div text
        let divTexte = document.createElement('div');  
        //j'injecte le html   
        divTexte.innerHTML = `<h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum? Amet accusamus ab, eveniet iste vero nulla facilis laboriosam dolores illo pariatur soluta provident perspiciatis, distinctio illum magni asperiores, recusandae eius aperiam. Illo nobis voluptas quisquam, quo ipsa repellat sit accusamus, minus quasi excepturi distinctio culpa neque mollitia odit esse.</p> `
        // Je dis que card est son parent
        card.appendChild(divTexte);


    }
});