

// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.
