require("plusj/libs/rng")
require(`plusj/settings`)

require("plusj/campaign-warning")
require("plusj/autoupdate")
require("plusj/libs/shaders")

require("plusj/planets")
require("plusj/items")
require("plusj/units/damagegroups")
require("plusj/status-effects")
// require("plusj/liquids")
require("plusj/blocks/environment")

require('plusj/blocks/cores');
require('plusj/blocks/distribution');
// require("plusj/blocks/vanadium-extractor")
// require("plusj/blocks/vanadium-megaextractor")
require("plusj/blocks/aerial-drill")
// require("plusj/units/air/drones")
// require("plusj/units/air/core-units")
// require("plusj/blocks/zincite-extractor")
// require("plusj/blocks/titaniumseperator")
require("plusj/units/refreshconstruct")
// require('plusj/blocks/purifier');
// require('plusj/blocks/sterilizer');
// require('plusj/blocks/cobalt-twister');
// require('plusj/blocks/ionizer');
// require('plusj/overtower');
// require('plusj/blocks/recoverer');
require('plusj/blocks/frozen-wall');
require('plusj/blocks/puncture');
require('plusj/blocks/shieldlayer');
require('plusj/blocks/instant');
require('plusj/blocks/delay');
require('plusj/blocks/subturrets');
require('plusj/blocks/spore-clumps');
require('plusj/blocks/pelt');
require('plusj/blocks/bolt');
require('plusj/blocks/cinnabar-aqueduct');
require('plusj/blocks/fieros-production');

// unit stuff
// serpulo
// ground
// shotgunner line
require("plusj/units/ground/shotgunner/shotgunner")
require("plusj/units/ground/shotgunner/pounder")
require("plusj/units/ground/shotgunner/slugger")
require("plusj/units/ground/shotgunner/rocketeer")
require("plusj/units/ground/shotgunner/blitz")

// air
// swarmer line
require("plusj/units/air/flocker/flocker")
require("plusj/units/air/flocker/bee")
require("plusj/units/air/flocker/hornet")
require("plusj/units/air/flocker/messenger")
require("plusj/units/air/flocker/tundra")

// naval
// mycena line
require("plusj/units/naval/mycena/mycena")
require("plusj/units/naval/mycena/panaeolus")
require("plusj/units/naval/mycena/agaricus")
require("plusj/units/naval/mycena/macrocybe")
require("plusj/units/naval/mycena/armillaria")

// bosses
require("plusj/units/bosses/havoc")
require("plusj/units/bosses/crusher")

// fieros
// ground
// jeri line
require("plusj/units/ground/jeri/jeri")

// donjon line
require("plusj/units/ground/donjon/donjon")

// misc
require("plusj/units/air/drones")
require("plusj/units/air/core-units")

// this needs to load after everything else
require('plusj/vanilla-changes');

// experimental
// require("plusj/experimental/experimental")
