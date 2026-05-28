StartupEvents.registry("fluid", event => {
    // Register Molten/Liquid Copper
    event.create("liquid_copper")
        .thickTexture(0xE67E22)
        .bucketColor(0xE67E22)
        .displayName("Liquid Copper")
        .stillTexture("minecraft:block/water_still")
        .flowingTexture("minecraft:block/water_flow")
        .luminosity(10)
        .temperature(1085)
        .viscosity(2500)
})