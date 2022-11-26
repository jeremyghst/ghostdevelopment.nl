"use strict"

window.addEventListener("load", (event) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setProfession();
    setHobby();
    setSoftwareEngineringTrack();
    setAge();
    setSkills();
    
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000)
});