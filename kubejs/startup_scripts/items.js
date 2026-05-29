Platform.mods.kubejs.name = "Thinking Sand"

StartupEvents.registry("item", event => {
    event.create("ddr5").texture("cc_item_recipes:item/ddr5").displayName("DDR5")
    event.create("ddr3").texture("cc_item_recipes:item/ddr3").displayName("DDR3")
    event.create("advanced_processor").texture("cc_item_recipes:item/acpu").displayName("Advanced Processor")
    event.create("basic_processor").texture("cc_item_recipes:item/bcpu").displayName("Basic Processor")
    event.create("silicon_ingot").texture("cc_item_recipes:item/silicon_ingot").displayName("Silicon Ingot")
    event.create("undeveloped_wafer").texture("cc_item_recipes:item/undeveloped_wafer").displayName("Undeveloped Silicon Wafer")
    event.create("coated_wafer").texture("cc_item_recipes:item/coated_wafer").displayName("Coated Silicon Wafer")
    event.create("silicon_nugget").texture("cc_item_recipes:item/silicon_nugget").displayName("Silicon Nugget")
    event.create("ssd_mask").texture("cc_item_recipes:item/ssd_mask").displayName("SSD Mask")
    event.create("ram_mask").texture("cc_item_recipes:item/ram_mask").displayName("RAM Mask")
    event.create("processor_mask").texture("cc_item_recipes:item/processor_mask").displayName("Processor Mask")
    event.create("ram_memory_chip").texture("cc_item_recipes:item/ram_memory_chip").displayName("RAM Memory Chip")
    event.create("ssd_memory_chip").texture("cc_item_recipes:item/ssd_memory_chip").displayName("SSD Memory Chip")
    event.create("processor_chip").texture("cc_item_recipes:item/processor_chip").displayName("Processor Chip")
    event.create("ssd").texture("cc_item_recipes:item/ssd").displayName("SSD")
    event.create("hdd").texture("cc_item_recipes:item/hdd").displayName("HDD")
    event.create("hdd_platter").texture("cc_item_recipes:item/hdd_platter").displayName("HDD Platter")
    event.create("actuator_arm").texture("cc_item_recipes:item/actuator_arm").displayName("Actuator Arm")
    event.create("electric_motor").texture("cc_item_recipes:item/electric_motor").displayName("Electric Motor")
    event.create("wire").texture("cc_item_recipes:item/wire").displayName("Copper Wires")
    event.create("computation_staff")
    .texture("cc_item_recipes:item/staff_of_computational_power")
    .displayName("Staff of Computational Power")
    .maxStackSize(1)
    event.create("basic_motherboard").texture("cc_item_recipes:item/bmobo").displayName("Basic Motherboard")
    event.create("advanced_motherboard").texture("cc_item_recipes:item/amobo").displayName("Advanced Motherboard")
    event.create("vrm").texture("cc_item_recipes:item/vrm").displayName("Voltage Regulator Module")
    event.create("pcb").texture("cc_item_recipes:item/pcb").displayName("Blank Circuit Board")
})

StartupEvents.registry("creative_mode_tab", event => {
  event.create("cc_items")
    .displayName("Thinking Sand")
    .icon(() => "kubejs:ddr5")
    .content(() => [
        "kubejs:silicon_nugget",
        "kubejs:silicon_ingot",
        "kubejs:undeveloped_wafer",
        "kubejs:coated_wafer",
        "kubejs:ssd_mask",
        "kubejs:ram_mask",
        "kubejs:processor_mask",
        "kubejs:ssd_memory_chip",
        "kubejs:ram_memory_chip",
        "kubejs:processor_chip",
        "kubejs:actuator_arm",
        "kubejs:hdd_platter",
        "kubejs:electric_motor",
        "kubejs:pcb",
        "kubejs:vrm",
        "kubejs:wire",
        "kubejs:hdd",
        "kubejs:ddr3",
        "kubejs:basic_processor",
        "kubejs:basic_motherboard",
        "kubejs:ssd",
        "kubejs:ddr5",
        "kubejs:advanced_processor",
        "kubejs:advanced_motherboard",
        "kubejs:dense_gold_block",
        "kubejs:computation_staff"
    ])
})