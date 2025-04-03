const FlockT2 = extend(UnitType, "bee-ship", {});
FlockT2.constructor = () => extend(UnitEntity, {});

Blocks.additiveReconstructor.addUpgrade(
  Vars.content.getByName(ContentType.unit, "plusj-flocker-ship"),
  Vars.content.getByName(ContentType.unit, "plusj-bee-ship")
)