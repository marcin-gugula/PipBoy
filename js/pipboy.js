$(document).ready(function () {

    const weapons = [{
            "name": "44_pistol",
            "damage": 48,
            "ammo": 21,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        }

        ,
        {
            "name": "10mm_pistol",
            "damage": 18,
            "ammo": 93,
            "fire_rate": 46,
            "range": 83,
            "accuracy": 60,
            "weight": 3.5,
            "value": 50
        }

        ,
        {
            "name": "assalut_rifle",
            "damage": 30,
            "ammo": 103,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        }

        ,
        {
            "name": "pipe_gun",
            "damage": 13,
            "ammo": 52,
            "fire_rate": 55,
            "range": 83,
            "accuracy": 57,
            "weight": 2.3,
            "value": 20
        }

        ,
        {
            "name": "minigun",
            "damage": 8,
            "ammo": 505,
            "fire_rate": 272,
            "range": 131,
            "accuracy": 35,
            "weight": 27.4,
            "value": 382
        }

    ]


    const armors = [{
            "name": "metal_helmet",
            "damage_res": 9,
            "damage_res_en": 4,
            "weight": 3,
            "value": 15
        }

        ,
        {
            "name": "leather_chest",
            "damage_res": 3,
            "damage_res_en": 10,
            "weight": 5,
            "value": 25
        }

        ,
        {
            "name": "leather_leg",
            "damage_res": 2,
            "damage_res_en": 5,
            "weight": 2,
            "value": 10
        }

        ,
        {
            "name": "trapper-leg",
            "damage_res": 9,
            "damage_res_en": 9,
            "weight": 7,
            "value": 12
        }


    ]

    const specialDescription = [{
            name: "strength",
            description: "A measure of your raw physical power. It affects how much you can carry and the damage of all melee attacks."
        },
        {
            name: "perception",
            description: "Perception is a measurement of your environmental and situational awareness. It directly affects weapon accuracy in V.A.T.S. (Vault-Tec Assisted Targeting System), lock-picking skills, and successful attempts at stealing items."
        },
        {
            name: "endurance",
            description: "A measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting."
        },
        {
            name: "charism",
            description: "	Your ability to charm and convince others. It affects your success to persuade in dialogue, prices when you barter, and the maximum number of settlers in settlements."
        },
        {
            name: "intelligence",
            description: "	A measure of your overall mental acuity. It affects the number of Experience Points earned and reduces the number of dud words when hacking terminals."
        },
        {
            name: "agility",
            description: "A measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak."
        },
        {
            name: "luck",
            description: "	A measure of your general good fortune and affects the recharge rate of critical hits."
        },
    ]


    const perksDescription = [{
            name: "big_leagues",
            description: "Swing for the fences! Do 20% more melee weapon damage."
        },
        {
            name: "heavy_gunner",
            description: "Thanks to practice and conditioning, heavy guns do 20% more damage."
        },
        {
            name: "awareness",
            description: "To defeat your enemies, know their weaknesses! You can view a target's specific damage resistances in V.A.T.S."
        },
        {
            name: "cap_collector",
            description: "You've mastered the art of the deal! Buying and selling prices at vendors are better."
        },
        {
            name: "medic",
            description: "Is there a doctor in the house? Stimpaks restore 40% of lost Health, and RadAway removes 40% of radiation.	"
        },
        {
            name: "mysterious_stranger",
            description: "Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency..."
        },
    ]




    $(".item-list a").on("click", function (event) {

        if ($(event.currentTarget).hasClass("active")) {
            $(event.currentTarget).removeClass("active");
        } else {
            $(".item-list a").removeClass("active");
            $(event.currentTarget).addClass("active")
        }
    })

    $(".armor-list a.head").on("click", function (event) {
        if ($(event.currentTarget).hasClass("active")) {
            $(event.currentTarget).removeClass("active");
        } else {
            $(".armor-list a.head").removeClass("active");
            $(event.currentTarget).addClass("active")
        }
    })

    $(".armor-list a.chest").on("click", function (event) {
        if ($(event.currentTarget).hasClass("active")) {
            $(event.currentTarget).removeClass("active");
        } else {
            $(".armor-list a.chest").removeClass("active");
            $(event.currentTarget).addClass("active")
        }
    })

    $(".armor-list a.leg").on("click", function (event) {
        if ($(event.currentTarget).hasClass("active")) {
            $(event.currentTarget).removeClass("active");
        } else {
            $(".armor-list a.leg").removeClass("active");
            $(event.currentTarget).addClass("active")
        }
    })



    $(".item-list a").on("mouseover", function (event) {
        let currentItem = ($(event.currentTarget).attr("class"));

        for (item in weapons) {
            if (weapons[item].name == currentItem) {

                $(".damage").html(weapons[item].damage)
                $(".ammo").html(weapons[item].ammo)
                $(".fire_rate").html(weapons[item].fire_rate)
                $(".range").html(weapons[item].range)
                $(".accuracy").html(weapons[item].accuracy)
                $(".weight").html(weapons[item].weight)
                $(".value").html(weapons[item].value)
            }

        }

    })


    $(".armors-list a").on("mouseover", function (event) {
        let currentItem = ($(event.currentTarget).attr("class"));

        for (item in armors) {
            if (armors[item].name == currentItem) {

                $(".damage_res").html(armors[item].damage_res)
                $(".damage_res_en").html(armors[item].damage_res_en)
                $(".armor_weight").html(armors[item].weight)
                $(".armor_value").html(armors[item].value)
            }

        }

    })

    $(".special-list div").on("mouseover", function (event) {
        currentImage = ($(event.currentTarget).attr("name"));

        if (currentImage !== undefined) {
            $(".special-img").attr("src", "images/" + currentImage + ".png")

            for (item in specialDescription) {
                if (specialDescription[item].name == currentImage) {
                    $(".description").html(specialDescription[item].description)
                }
            }
        }


    })


    $(".perk-list div").on("mouseover", function (event) {
        currentImage = ($(event.currentTarget).attr("name"));

        if (currentImage !== undefined) {
            $(".perk-img").attr("src", "images/" + currentImage + ".png")

            for (item in perkDescription) {
                if (perkDescription[item].name == currentImage) {
                    $(".description").html(perkDescription[item].description)
                }
            }
        }


    })


})