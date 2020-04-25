var terranUnits = [
    "Banshee",
    "Battlecruiser",
    "Cyclone",
    "Ghost",
    "Hellion/Hellbat",
    "Marauder",
    "Marine",
    "Raven",
    "Reaper",
    "Seige Tank",
    "Thor",
    "Viking",
];

var zergUnits = [
    "Baneling",
    "Brood Lord",
    "Corruptor",
    "Hydralisk",
    "Lurker",
    "Mutalisk",
    "Queen",
    "Ravager",
    "Roach",
    "Swarm Host",
    "Ultralisk",
    "Zergling",
];

var protossUnits = [
    "Adept",
    "Archon",
    "Carrier",
    "Colossus",
    "Dark Templar",
    "High Templar",
    "Immortal",
    "Oracle",
    "Sentry",
    "Stalker",
    "Tempest",
    "Void Ray",
    "Zealot",
];

function genrateUnits() {
    let t = Math.floor(Math.random() * terranUnits.length);
    let z = Math.floor(Math.random() * zergUnits.length);
    let p = Math.floor(Math.random() * protossUnits.length);
    document.getElementById("terran").textContent = terranUnits[t];
    document.getElementById("zerg").textContent = zergUnits[z];
    document.getElementById("protoss").textContent = protossUnits[p];
}
