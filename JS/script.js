//Partie qui gère le loading page
const loaderVideo = document.getElementById("loader-video");
const loader = document.getElementById('loader')

loaderVideo.addEventListener("ended", function() {
  setTimeout(function() {
    loaderVideo.style.opacity = 0;
    setTimeout(function() {
      loaderVideo.style.display = "none";
      document.body.classList.remove("loading");
      loader.style.zIndex = -9999
    }, 1000); // temps en millisecondes pour la transition de la vidéo
  }, 1000); // temps en millisecondes pour la disparition progressive de la vidéo
});
//Fin de la partie loading page

//Tableau qui comporte tous les projets
const Project = [
  {
   "webProject": [
     {
       "title" : "Kasa",
       "image": "../Media/kasa.png",
       "link": "https://abrivard-dwain-kasa.netlify.app/"       
     },
     {
       "title":"Oh my food",
       "image": "../Media/ohmyfood.png",
       "link": "https://abrivard-dwain-ohmyfood.netlify.app/"
     },
     {
       "title":"La chouette",
       "image": "../Media/lachouette.png",
       "link": "https://abrivard-dwain-lachouette.netlify.app/"
     },
     {
       "title":"Afpa",
       "image": "../Media/afpa.png",
       "link": "https://abrivard-dwain-afpa.netlify.app/"
     }
   ],
   "littleProject": [
     {
         "title":"Profil carte",
         "image": "../Media/profilCard.png",
         "link": "https://abrivard-dwain-profilcard.netlify.app/"
       },
     {
         "title":"Whatsapp",
         "image": "../Media/whatsapp.png",
         "link": "https://abrivard-dwain-whatsapp.netlify.app/"
       }
   ]
 }
]
//Fin du tableau

//Tableau qui comporte les musiques
const songs = [
"../Media/Future-LifeIsGood(OfficialMusicVideo)ft.Drake.mp4",
"../Media/Pop Smoke - For The Night (Audio) ft. Lil Baby, DaBaby.mp4"
]
//Fin du tableau
  
//Partie qui gère la lecture de la video de fond
let video = document.getElementById('video')
let contentVideo = document.getElementById('content')

function playAndPause(){

    window.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
          event.preventDefault(); // empêcher le défilement de la page avec la barre d'espace
          if (video.paused) {
            video.play();
            contentVideo.style.display="none"
          } else {
            video.pause();
            contentVideo.style.display="flex"
          }
        }
      });
}
playAndPause()
//Fin de la partie lecture 

//Partie qui gère les musiques
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const play = document.querySelector('.play')

indexMusic = 0
video.src = songs[indexMusic]

arrowRight.addEventListener('click', () =>{
  indexMusic++

  if(indexMusic == songs.length){
    indexMusic = 0
  }

  video.src = songs[indexMusic]
  video.play()
})

arrowLeft.addEventListener('click', () => {
  indexMusic--
   
  if(indexMusic < 0){
    indexMusic = songs.length -1
  }
  video.src = songs[indexMusic]
  video.play()
})

play.addEventListener('click', () =>{
  if (video.paused) {
    video.play();
    contentVideo.style.display="none"
  } else {
    video.pause();
    contentVideo.style.display="flex"
  }
})


//Fin de la partie qui gère les musique

//Partie qui gère l'ouverture de la section de gauche
function openAndClose() {
  const skillPercent = document.querySelectorAll('.skill > div')
  const skillDot = document.querySelectorAll('.skill > div > div')
  const numberInfo = document.querySelectorAll('.number-info')

  

  const section = [
    document.getElementById('project'),
    document.getElementById('little-project'),
    document.getElementById('skills'),
    document.getElementById('about-me')
  ];

  let nodeListItem = document.querySelectorAll('.menu-item');
  const menuItem = Array.from(nodeListItem);
  menuItem.splice(2, 1);

  for (let i = 0; i < menuItem.length; i++) {

    menuItem[i].addEventListener('click', () => {

      for (let j = 0; j < section.length; j++) {
        if (section[j].classList.contains('open') && j !== i) {
          section[j].classList.remove('open');
        }
      }

      section[i].classList.toggle('open');

      if (section[2].classList.contains('open')) {
        skillPercent.forEach(div => div.classList.add('percent'));
        skillDot.forEach(div => div.classList.add('dot'))
        numberInfo.forEach(classList.add('number'))
      } else {
        skillPercent.forEach(div => div.classList.remove('percent'));
        skillDot.forEach(div => div.classList.remove('dot'))
        numberInfo.forEach(classList.remove('number'))
      }

    });
  }

}
openAndClose();
//Fin de l'ouverture de la section de gauche

//Partie qui permet d'afficher les projets
function showProject(){

  const webProject = Project[0].webProject
  const littleProject = Project[0].littleProject
  const project = document.getElementById('project')
  const littleProjectDiv = document.getElementById('little-project')
 
  webProject.forEach(item => {
    let div = document.createElement('div')
    div.classList.add('link-project')
    let link = document.createElement('a')
    link.href = item.link
    div.appendChild(link)
    let img = document.createElement('img')
    img.src = item.image
    let title = document.createElement('h3')
    title.innerHTML = item.title
    link.appendChild(img, title)
    project.appendChild(div)
  });

  littleProject.forEach(item =>{
    let div = document.createElement('div')
    div.classList.add('link-project')
    let shadow = document.createElement('div')
    shadow.classList.add('link-shadow')
    let link = document.createElement('a')
    link.href = item.link
    div.appendChild(link)
    let img = document.createElement('img')
    img.src = item.image
    let title = document.createElement('h3')
    title.innerHTML = item.title
    link.appendChild(img, title)
    link.appendChild(shadow)
    littleProjectDiv.appendChild(div)
  })


}
showProject()
//Fin de la partie affiche de projet


