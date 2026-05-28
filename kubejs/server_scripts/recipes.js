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
    })
    event.shaped("kubejs:electric_motor", [
        " S ",
        "WWW",
        "RIR"
    ], {
        S: "create:shaft",
        W: Ingredient.of("#forge:wires/copper"),
        R: "minecraft:redstone",
        I: "minecraft:iron_ingot"
    })
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
    })
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
    })
    event.shaped("kubejs:advanced_processor", [
        "DDD",
        "RPR",
        "GNG"
    ], {
        D: "minecraft:diamond",
        G: "minecraft:gold_ingot",
        N: "createdeco:netherite_nugget",
        P: "kubejs:processor_chip",
        R: "minecraft:redstone"
    })
    event.shaped("kubejs:hdd_platter", [
        "III",
        "ISI",
        "III"
    ], {
        I: "create:iron_sheet",
        S: "create:shaft"
    })
    event.shapeless("kubejs:wire", [Ingredient.of("#forge:wires/copper"), "minecraft:dried_kelp"])
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
    })
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
    })
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
    })
    event.recipes.create.sequenced_assembly(
    [
        Item.of("kubejs:ddr5").withChance(1)
    ],
    "minecraft:gold_ingot",
    [
        event.recipes.create.deploying("kubejs:incomplete_ddr5", ["kubejs:incomplete_ddr5", "minecraft:redstone"]),
        event.recipes.create.deploying("kubejs:incomplete_ddr5", ["kubejs:incomplete_ddr5", "kubejs:ram_memory_chip"]),
        event.recipes.create.deploying("kubejs:incomplete_ddr5", ["kubejs:incomplete_ddr5", "minecraft:diamond"]),
        event.recipes.create.pressing("kubejs:incomplete_ddr5", "kubejs:incomplete_ddr5")
    ]).transitionalItem("kubejs:incomplete_ddr5")
    .loops(4)
    event.recipes.create.sequenced_assembly(
    [
        Item.of("kubejs:ssd").withChance(1)
    ],
    "kubejs:processor_chip",
    [
        event.recipes.create.deploying("kubejs:incomplete_ssd", ["kubejs:incomplete_ssd", "create:iron_sheet"]),
        event.recipes.create.deploying("kubejs:incomplete_ssd", ["kubejs:incomplete_ssd", "kubejs:ssd_memory_chip"]),
        event.recipes.create.deploying("kubejs:incomplete_ssd", ["kubejs:incomplete_ssd", "minecraft:gold_ingot"]),
        event.recipes.create.pressing("kubejs:incomplete_ssd", "kubejs:incomplete_ssd")
    ]).transitionalItem("kubejs:incomplete_ssd")
    .loops(4)
    event.recipes.create.sequenced_assembly(
    [
        Item.of("kubejs:pcb").withChance(1)
    ],
    "minecraft:terracotta",
    [
        event.recipes.create.deploying("kubejs:incomplete_pcb", ["kubejs:incomplete_pcb", "create:copper_sheet"]),
        event.recipes.create.filling("kubejs:incomplete_pcb", ["kubejs:incomplete_pcb", Fluid.of("kubejs:liquid_copper", 100)]),
        event.recipes.create.deploying("kubejs:incomplete_pcb", ["kubejs:incomplete_pcb", "minecraft:redstone"]),
        event.recipes.create.pressing("kubejs:incomplete_pcb", "kubejs:incomplete_pcb")
    ]).transitionalItem("kubejs:incomplete_pcb")
    .loops(4)
    event.custom({
        type: "createbigcannons:melting",
        ingredients: [
            {
                item: "minecraft:copper_ingot"
            }
        ],
        results: [
            {
                fluid: "kubejs:liquid_copper",
                amount: 90
            }
        ],
        processingTime: 180,
        heatRequirement: "heated"
    })
    event.custom({
        type: "createbigcannons:melting",
        ingredients: [
            {
                item: "minecraft:copper_block"
            }
        ],
        results: [
            {
                fluid: "kubejs:liquid_copper",
                amount: 810
            }
        ],
        processingTime: 360,
        heatRequirement: "heated"
    })
    event.custom({
        type: "createbigcannons:melting",
        ingredients: [
            {
                tag: "forge:nuggets/copper"
            }
        ],
        results: [
            {
                fluid: "kubejs:liquid_copper",
                amount: 10
            }
        ],
        processingTime: 20,
        heatRequirement: "heated"
    })
})