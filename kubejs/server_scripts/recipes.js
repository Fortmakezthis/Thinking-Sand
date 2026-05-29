ServerEvents.recipes(event => {
    event.recipes.create.filling("kubejs:coated_wafer", [
        "kubejs:undeveloped_wafer",
        Fluid.of("mekanism:sulfuric_acid", 100)
    ])

    event.recipes.create.deploying("kubejs:ram_mask", [
        "kubejs:undeveloped_wafer",
        "minecraft:redstone"
    ])

    event.recipes.create.deploying("kubejs:ssd_mask", [
        "kubejs:undeveloped_wafer",
        "minecraft:glowstone_dust"
    ])

    event.recipes.create.deploying("kubejs:processor_mask", [
        "kubejs:undeveloped_wafer",
        "minecraft:gold_nugget"
    ])

    event.recipes.create.milling([
    Item.of("kubejs:silicon_nugget").withChance(0.4),
    Item.of("minecraft:sand").withChance(0.5),
    Item.of("mekanism:dust_quartz").withChance(0.2)
    ], "minecraft:quartz")

    event.recipes.create.cutting([
    "4x kubejs:undeveloped_wafer",
    Item.of("kubejs:silicon_nugget").withChance(0.25)
    ], "kubejs:silicon_ingot")

    event.shaped("kubejs:silicon_ingot", [
        "NNN",
        "NNN",
        "NNN"
    ], {
        N: "kubejs:silicon_nugget"
    })

    event.shapeless("9x kubejs:silicon_nugget", "kubejs:silicon_ingot")

    event.shaped("kubejs:actuator_arm", [
        " I ",
        " W ",
        "RMR"
    ], {
        I: "minecraft:iron_ingot",
        W: "kubejs:wire",
        R: "minecraft:redstone",
        M: "kubejs:electric_motor"
    }).id("kubejs:actuator_arm_manual_only")

    event.shaped("kubejs:electric_motor", [
        " S ",
        "WWW",
        "RIR"
    ], {
        S: "create:shaft",
        W: Ingredient.of("#forge:wires/copper"),
        R: "minecraft:redstone",
        I: "minecraft:iron_ingot"
    }).id("kubejs:electric_motor_manual_only")

    event.custom({
        type: "create_optical:focusing",
        ingredients: [
            { item: "kubejs:coated_wafer" },
            { item: "kubejs:ram_mask" }
        ],
        results: [
            { item: "kubejs:ram_memory_chip" }
        ],
        duration: 40,
        required_beam_type: 3
    })

    event.custom({
        type: "create_optical:focusing",
        ingredients: [
            { item: "kubejs:coated_wafer" },
            { item: "kubejs:ssd_mask" }
        ],
        results: [
            { item: "kubejs:ssd_memory_chip" }
        ],
        duration: 40,
        required_beam_type: 3
    })

    event.custom({
        type: "create_optical:focusing",
        ingredients: [
            { item: "kubejs:coated_wafer" },
            { item: "kubejs:processor_mask" }
        ],
        results: [
            { item: "kubejs:processor_chip" }
        ],
        duration: 40,
        required_beam_type: 3
    })

    event.shaped("kubejs:ddr3", [
        "GGG",  
        "WWW",
        "RIW"
    ], {
        G: "minecraft:gold_nugget",
        W: "kubejs:ram_memory_chip",
        I: "minecraft:iron_ingot",
        R: "minecraft:redstone"
    }).id("kubejs:ddr3_manual_only")

    event.shaped("kubejs:basic_processor", [
        "GGG",
        "RPR",
        "ISI"
    ], {
        G: "minecraft:gold_nugget",
        I: "minecraft:iron_nugget",
        S: "create:iron_sheet",
        P: "kubejs:processor_chip",
        R: "minecraft:redstone"
    }).id("kubejs:basic_processor_manual_only")

    event.shaped("kubejs:advanced_processor", [
        "DDD",
        "RPR",
        "GNG"
    ], {
        D: "minecraft:diamond",
        G: "minecraft:gold_ingot",
        N: "minecraft:netherite_ingot",
        P: "kubejs:processor_chip",
        R: "minecraft:redstone"
    }).id("kubejs:advanced_processor_manual_only")

    event.shaped("kubejs:hdd_platter", [
        "III",
        "ISI",
        "III"
    ], {
        I: "create:iron_sheet",
        S: "create:shaft"
    }).id("kubejs:hdd_platter_manual_only")

    event.stonecutting("4x kubejs:wire", "minecraft:copper_ingot")

    event.shaped("kubejs:hdd", [
        "III",
        "WMP",
        "APW"
    ], {
        I: "minecraft:iron_ingot",
        A: "kubejs:actuator_arm",
        P: "kubejs:hdd_platter",
        M: "kubejs:electric_motor",
        W: "kubejs:wire"
    }).id("kubejs:hdd_manual_only")

    event.remove({id: "computercraft:computer_normal"})

    event.shaped("computercraft:computer_normal", [
        "SHR",
        "PMR",
        "WIW"
    ], {
        S: "computercraft:monitor_normal",
        H: "kubejs:hdd",
        P: "kubejs:basic_processor",
        M: "kubejs:basic_motherboard",
        R: "kubejs:ddr3",
        W: "kubejs:wire",
        I: "minecraft:iron_block"
    }).id("kubejs:computer_normal_manual_only")

    event.remove({id: "computercraft:computer_advanced"})

    event.remove({id: "computercraft:computer_advanced_upgrade"})

    event.shaped("computercraft:computer_advanced", [
        "SDR",
        "PMR",
        "WGW"
    ], {
        S: "computercraft:monitor_advanced",
        R: "kubejs:ddr5",
        D: "kubejs:ssd",
        P: "kubejs:advanced_processor",
        M: "kubejs:advanced_motherboard",
        W: "kubejs:wire",
        G: "minecraft:gold_block"
    }).id("kubejs:computer_advanced_manual_only")

    event.shaped("kubejs:ddr5", [
        "DDD",
        "WWW",
        "RGW"
    ], {
        D: "minecraft:diamond",
        W: "kubejs:ram_memory_chip",
        R: "minecraft:redstone",
        G: "minecraft:gold_ingot"
    }).id("kubejs:ddr5_manual_only")

    event.shaped("kubejs:ssd", [
        "IIG",
        "WWG",
        "PWG"
    ], {
        P: "kubejs:processor_chip",
        I: "create:iron_sheet",
        G: "minecraft:gold_ingot",
        W: "kubejs:ssd_memory_chip"
    }).id("kubejs:ssd_manual_only")
    
    event.shaped("kubejs:pcb", [
        "RRR",
        "CCC",
        "TTT"
    ], {
        T: "minecraft:terracotta",
        C: "create:copper_sheet",
        R: "minecraft:redstone"
    }).id("kubejs:pcb_manual_only")
})