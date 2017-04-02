var vanilla_blocks = ["portal", "end_portal", "fire", "water", "lava", "mob_spawner"];
if (vanilla_enabled) {
    for each(block in vanilla_blocks){
        // Vanilla items and blocks have special handlers.
        NEI.hide("minecraft", block);
    }
 

}    
	
	NEI.override("minecraft:spawn_egg", [90,91,92,93,99,100]);
    NEI.hide("Natura:natura.spawnegg");
    NEI.hide("Thaumcraft:ItemSpawnerEgg");
    NEI.hide("headcrumbs:egg");
    NEI.hide("minecraft", "lit_furnace");
    NEI.hide("minecraft", "command_block");
	NEI.hide("minecraft", "bedrock");