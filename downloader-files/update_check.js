//this is a update check for the app named "gvbvdxx game downloader" version check files can be modifed by simply changing the site data

confirmed = window.confirm ("do you want to check for updates (the app has loaded the update check file meaning that your online)")
if (confirmed)
 {
  window.alert ("version check will now be extucuted")
   if (appversion < 1)
   {
   confirmed2 = window.confirm ("you seem to have an outdated version of this app do you want to install it?")
    if (confirmed2)
    {
     window.alert ("the app will redirect you to the download page for this site")
     window.location.replace ("home.html")
    }
   }
 }
