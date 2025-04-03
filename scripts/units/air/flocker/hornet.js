const FlockT3 = extend(UnitType, "hornet-ship", {});
FlockT3.constructor = () => extend(UnitEntity, {});

Blocks.multiplicativeReconstructor.addUpgrade(
  Vars.content.getByName(ContentType.unit, "plusj-bee-ship"),
  Vars.content.getByName(ContentType.unit, "plusj-hornet-ship")
)