Events.on(ClientLoadEvent, () => {
  if (Core.settings.getString("plusj-internal-settingsver") != "1") {
    switch (Core.settings.getString("plusj-internal-settingsver")) {
      case "1":
        // update this part of the code when adding a new setting
        // there is a simpler, naive way to do it but it'd reset your md settings anytime we add new ones
        // therefore instead we have a settings version system that only updates new settings
        break
      default:
        // if there is no valid internal settings version, assume first time install and set everything to default
        Core.settings.put("plusj-autoupdate", true)
        Core.settings.put("plusj-loadshaders", !Vars.mobile)
        Core.settings.put("plusj-forcecapturetoast", true)
        Core.settings.put("plusj-guardianwarn", true)
        break
    }
    Core.settings.put("plusj-internal-settingsver", "1")
  }
  Vars.ui.settings.addCategory(Core.bundle.get("setting.plusj-config-title"), Icon.turret, cons((t) => {
    // V1
    t.checkPref("plusj-autoupdate", true);
    t.checkPref("plusj-loadshaders", !Vars.mobile);
    t.checkPref("plusj-forcecapturetoast", true);
    t.checkPref("plusj-guardianwarn", true);
    // V2
    // N/A (add new settings here after public release)
  }));
})