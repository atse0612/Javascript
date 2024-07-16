async function loadConfig(){
    const themeModule = await import("./theme.mjs"); //import the theme settings
    const currentHour = new Date().getHours(); //getting the current hour

    if (currentHour < 18){ //if less than 6pm
        themeModule.setLightTheme(); 
    }
    else{
        themeModule.setDarkTheme(); //greater than 6pm
    }
}