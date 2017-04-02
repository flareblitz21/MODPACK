if (FML.isModLoaded("ThermalExpansion") && ThermalExpansion_enabled) {
    NEI.override("ThermalExpansion:florb", [0, 1]);
    NEI.hide("ThermalExpansion", "meter");
	NEI.hide("ThermalFoundation", "lexicon");
}


	NEI.override("ThermalExpansion", "capacitor", [1, 2, 3, 4, 5]);
	NEI.override("ThermalExpansion", "Cell", [1, 2, 3, 4]);
	NEI.override("ThermalExpansion", "Tank", [1, 2, 3, 4]);
	NEI.override("simplyjetpacks", "fluxpacks", [1, 2, 3, 4, 102, 103, 104]);
	NEI.override("ThermalExpansion", "Strongbox", [1, 2, 3, 4]);
	NEI.override("ThermalExpansion", "Sponge", [1, 2]);
	NEI.override("ThermalExpansion", "Workbench", [1, 2, 3, 4]);
