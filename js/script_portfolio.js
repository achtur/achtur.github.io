document.addEventListener("DOMContentLoaded", function () {

  /* bouton portfolio_accordeon01 */
  function btn_active(btn_state, btn_selector) {
    if(btn_state === 1) {
      btn_selector.classList.add("btn_active")
    }
    else {
      btn_selector.classList.remove("btn_active")
    }
  }


  /* projpers */
  const projpers_btn = document.querySelector(".projpers");
  const projpers_files = document.getElementsByClassName("projpers_files");
  let projpers_btn_state = 0;

  projpers_btn.addEventListener("click", () => {
    // Toggle the state
    projpers_btn_state = projpers_btn_state === 0 ? 1 : 0;

    for (let files of projpers_files) {
      if (projpers_btn_state >= 1) {
        files.classList.remove("showed");
        files.classList.add("mvUp");
        setTimeout(() => {
          files.classList.remove("mvUp");
          files.classList.add("hidden");
        }, 500); // 1000 millisecondes = 1 seconde

      }
      else {
        files.classList.remove("hidden")
        files.classList.add("mvDwn");
        setTimeout(() => {
          files.classList.remove("mvDwn");
          files.classList.add("showed");
        }, 500); // 1000 millisecondes = 1 seconde
      }
    }
    // Li btn change
    btn_active(projpers_btn_state, projpers_btn)
    // Log the current state
    console.log(projpers_btn_state);
  });
  
  
  /* projprof */
  
  
  const projprof_btn = document.querySelector(".projprof");
  const projprof_files = document.getElementsByClassName("projprof_files");
  let projprof_btn_state = 0;
  
  projprof_btn.addEventListener("click", () => {
    // Toggle the state
    projprof_btn_state = projprof_btn_state === 0 ? 1 : 0;
    
    for (let files of projprof_files) {
      if (projprof_btn_state >= 1) {
        files.classList.remove("showed");
        files.classList.add("mvUp");
        setTimeout(() => {
          files.classList.remove("mvUp");
          files.classList.add("hidden");
        }, 500); // 1000 millisecondes = 1 seconde
        
      }
      else {
        files.classList.remove("hidden")
        files.classList.add("mvDwn");
        
        
        setTimeout(() => {
          files.classList.remove("mvDwn");
          files.classList.add("showed");
        }, 500); // 1000 millisecondes = 1 seconde
      }
    }
    // Li btn change
    btn_active(projprof_btn_state, projprof_btn)
    // Log the current state
    console.log(projprof_btn);
  });
  
});
