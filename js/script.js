/* charger la page a l'emplacement du scroll */

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
});

/*curseur rond*/

/*déplacements*/
const curseur_rond = document.getElementById('curseur-rond');
  document.addEventListener('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;
    curseur_rond.style.left = x-25 + "px";
    curseur_rond.style.top = y-25 + "px";
  });

/*montrer curseur*/
const cursor_visibilityset = document.body
const cursor_visibility = document.getElementById('icon');

cursor_visibility.onclick = function() {
  cursor_visibilityset.classList.toggle('cursor_active');
}


/*bouton de volume*/
const change_vol_icon = document.getElementsByClassName("sound-icon");
let vol_etape = 0;
const nb_vol_icon = change_vol_icon.length;
const vol_inc = document.querySelector(".sound-control-btns");
const bg_vid = document.getElementById("body-banner");
vol_etape[0] = bg_vid.volume = 0;

function removeActiveIcons() {
  for (let i = 0; i < nb_vol_icon; i++) {
    change_vol_icon[i].classList.remove("vcactive");
  }
}

vol_inc.addEventListener("click", function () {
  vol_etape++;
  if (vol_etape >= nb_vol_icon) {
    vol_etape = 0;
  }
  removeActiveIcons();
  change_vol_icon[vol_etape].classList.add("vcactive");
  console.log(vol_etape, 'clics son')
  bg_vid.volume = vol_etape / 3;
  console.log(bg_vid, 'volumeinc')
});