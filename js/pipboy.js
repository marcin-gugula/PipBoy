$(document).ready(function () {

        const weapons=[ {
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
        
        $(".item-list a").on("click", function(event){
            $(".item-list a").removeClass("active");
            $(event.currentTarget).addClass("active")
        })



        $(".item-list a").on("mouseover", function (event) {
                let currentItem=($(event.currentTarget).attr("class"));

                for (item in weapons) {
                    if (weapons[item].name==currentItem) {

                        
                        $(".damage").html(weapons[item].damage)
                        $(".ammo").html(weapons[item].ammo)
                        $(".fire_rate").html(weapons[item].fire_rate)
                        $(".range").html(weapons[item].range)
                        $(".accuracy").html(weapons[item].accuracy)
                        $(".weight").html(weapons[item].weight)
                        $(".value").html(weapons[item].value)
                    }
                        
                }

            }

        )
    }

)