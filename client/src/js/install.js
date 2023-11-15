const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt=event
    butInstall.classList.toggle("hidden", false)

});
// hidden doesn't exist in CSS its weird
// Event handler
butInstall.addEventListener('click', async () => {
    const ePrompt= window.deferredPrompt
    if (!ePrompt){
        return
    }
    ePrompt.prompt()
    window.deferredPrompt= null
    butInstall.classList.toggle("hidden", true)
});

// TODO: handler for instalation
window.addEventListener('appinstalled', (event) => {window.deferredPrompt=null});
