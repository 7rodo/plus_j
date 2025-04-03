const SwarmerT5 = extend(UnitType, "communicator-ship", {});
SwarmerT5.constructor = () => extend(UnitEntity, {});

Blocks.tetrativeReconstructor.addUpgrade(
  Vars.content.getByName(ContentType.unit, "plusj-messenger-ship"),
  Vars.content.getByName(ContentType.unit, "plusj-communicator-ship")
)
SwarmerT5.abilities.add(new UnitSpawnAbility(Vars.content.getByName(ContentType.unit, "plusj-hornet-ship"), 60*65, 0, 26));
SwarmerT5.abilities.add(new UnitSpawnAbility(Vars.content.getByName(ContentType.unit, "plusj-bee-ship"), 60*25, 13, -16));
SwarmerT5.abilities.add(new UnitSpawnAbility(Vars.content.getByName(ContentType.unit, "plusj-bee-ship"), 60*25, -13, -16));
