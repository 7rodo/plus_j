const ShotT2 = extend(UnitType, "pounder-mech", {});
ShotT2.constructor = () => extend(LegsUnit, {});

Blocks.additiveReconstructor.addUpgrade(
  Vars.content.getByName(ContentType.unit, "plusj-shotgunner-mech"),
  Vars.content.getByName(ContentType.unit, "plusj-pounder-mech")
)
