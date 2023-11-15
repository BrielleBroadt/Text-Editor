const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt=event
    butInstall.classList.toggle("hidden", false)

});
// hidden doesn't exist in CSS its weird
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const ePrompt= window.deferredPrompt
    if (!ePrompt){
        return
    }
    ePrompt.prompt()
    window.deferredPrompt= null
    butInstall.classList.toggle("hidden", true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {window.deferredPrompt=null});
