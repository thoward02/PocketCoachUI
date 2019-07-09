//https://d1u1mce87gyfbn.cloudfront.net/hero/genji/hero-select-portrait.png

window.Data = {

    "Guides" : {
      "Maps"  : {
        "Path"     : "/Api/Guides/Maps",
        "MapTypes" : {
          "Hybrid"       : {
            "Description" : "Hybrid is a hybrid game type between control point (CP) and payload. You must first capture the control point, then push the payload to the end of the map.",
            "Image" : "https://static.playoverwatch.com/img/pages/maps/images/kings-row.jpg",
            "Maps"   : {
              "Blizzard_World" : {
                "Description" : "A hybrid game mode map set within a fake Blizzard theme park, hosting elements from other blizzard games.",
                "Image" : "./Resources/OWMaps/MapPictures/blizzard-world.jpg",
              },
              "Eichenwalde" : {
                "Description" : "A hybrid game mode map set within an old German castle, once defended by Reinhardt himself",
                "Image" : "./Resources/OWMaps/MapPictures/eichenwalde.jpg",
              },
              "Hollywood" : {
                "Description" : "A hybrid game mode map set in Hollywood, USA.",
                "Image" : "./Resources/OWMaps/MapPictures/hollywood.jpg",
              },
              "Kings_Row" : {
                "Description" : "A hybrid game mode map set in the late future of London, where Omnics fight daily for their rights.",
                "Image" : "./Resources/OWMaps/MapPictures/kings-row.jpg",

              },
              "Numbani" : {
                "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
                "Image" : "./Resources/OWMaps/MapPictures/numbani.jpg",
              }

            }
          },
          "Payload"      : {
            "Description" : "Payload is all about pushing the cart from one end of the map to the other, by pushing it to three points. Players must either push the payload or stop other players from doing so.",
            "Image" : "./Resources/OWMaps/MapPictures/route-66.jpg",
            "Maps"   : {
              "Dorado" : {
                "Description" : "A payload game map where you push a cart through the town of Dorado and into the big Power Plant located at the end of the map.",
                "Image" : "./Resources/OWMaps/MapPictures/dorado.jpg"
              },
              "Havana" : {
                "Description" : "A payload game mode map set within Havana, Cuba, just days after a large hurricane.",
                "Image" : "./Resources/OWMaps/MapPictures/havana.jpg"
              },
              "Junkertown" : {
                "Description" : "A payload game mode map set in the outback of Australia, where laws and rules have ceased to exist",
                "Image" : "./Resources/OWMaps/MapPictures/junkertown.jpg"
              },
              "Rialto" : {
                "Description" : "A payload game mode map set within Rialto, Italy; home to some of the most elite Talon villans.",
                "Image" : "./Resources/OWMaps/MapPictures/rialto.jpg"
              },
              "Route_66" : {
                "Description" : "A payload game mode map set right after Ashe's attempt to steal the valuable cargo of a passing train.",
                "Image" : "./Resources/OWMaps/MapPictures/route-66.jpg"
              },
              "Watchpoint_Gibraltar" : {
                "Description" : "A hybrid game mode map set within the now empty Overwatch base located in Gibraltar.",
                "Image" : "./Resources/OWMaps/MapPictures/watchpoint-gibraltar.jpg"
              },
            }

          },
          "CP" : {
            "Description" : "Control point is akin to King of the Hill, where two teams battle to control the center point. The first team to win 2 out of the three maps wins the game.",
            "Image" : "./Resources/OWMaps/MapPictures/nepal.jpg",
            "Maps" : {
              "Busan" : {
                "Description" : "A CP game mode map set in D.va's home, Busan, Korea.",
                "Image" : "./Resources/OWMaps/MapPictures/busan.jpg",
              },
              "Ilios" : {
                "Description" : "A CP game mode map set in Illios, where Talon has apparently found an important artifact",
                "Image" : "./Resources/OWMaps/MapPictures/ilios.jpg",
              },
              "Lijiang_Tower" :{
                "Description" : "A CP game mode map set in the busy nighttime streets of China, where players can observe the empty vendor stalls cast in pale moonlight",
                "Image" : "./Resources/OWMaps/MapPictures/lijiang-tower.jpg",
              },
              "Nepal" : {
                "Description" : "A CP game mode map set in the ancient Omnic santuary of Nepal, where Omnics gather to consider the world into which they were born, something only thought possible for humans to do",
                "Image" : "./Resources/OWMaps/MapPictures/nepal.jpg",
              },
              "Oasis" :{
                "Description" : "A CP game mode map set in the jewel of Southern Iraq, Oasis, where scientists gather from all four corners of the",
                "Image" : "./Resources/OWMaps/MapPictures/oasis.jpg",
              }
            }

          },
          "CP2"          : {
            "Description" : "2 CP is where teams must defend or attack two control points. If the attacking team manages to take the first point, the defending team must rotate back to the second point and defend.",
            "Image" : "https://steamuserimages-a.akamaihd.net/ugc/92729171400080787/7B699835AA5D4FADBA98A644A8B6FFB66B37CF3E/",
            "Maps" : {
              "Horizon_Lunar_Colony" : {
                "Description" : "A 2CP game mode map set on the moon, where Winston grew up.",
                "Image" : "./Resources/OWMaps/MapPictures/horizon-lunar-colony.jpg",
              },
              "Paris" :{
                "Description" : "A 2CP game mode map set in Paris, just meters away from the bustling main roads.",
                "Image" : "./Resources/OWMaps/MapPictures/paris.jpg",
              },
              "Temple_of_Anubis" : {
                "Description" : "A 2CP game mode map set in Egypt, where Ana currently is holding her base of operations",
                "Image" : "./Resources/OWMaps/MapPictures/temple-of-anubis.jpg",
              },
              "Volskaya_Industries" : {
                "Description" : "A 2CP game mode map set in the deep winter of Russia, where Zarya's people are fighting hard to build mechs to defeat the omnics",
                "Image" : "./Resources/OWMaps/MapPictures/volskaya-industries.jpg",
              },
            }
          }

        },
        "MapList" : {
          "Maps" :  {
            "Blizzard_World" : {
              "Description" : "A hybrid game mode map set within a fake Blizzard theme park, hosting elements from other blizzard games.",
              "Image" : "./Resources/OWMaps/MapPictures/blizzard-world.jpg",
              "GuideData" : {
                "Header" : "Data",
                "Body"   : [
                  ["Img", "./Resources/OWMaps/TopDownViews/BWFirstPoint.png", "Map"],
                  ["Header" , "Defense - First Point"],
                  ["Text"   , "As a sniper oriented comp, it is valuable that you keep the enemy between point and choke (Really you want to keep them behind choke), this way you dominate the open space, and can deny any pushes. Getting early picks at Griffin, the top left high ground from a defender's view, can decide a fight easily, so abusing that position can be valuable; however, the area is very open, and its retreation paths are very tight and narrow, implying that a dive or 3-3 comp could easily push onto Griffin and trap your team mid retreation in a choke. "],
                  ["Text"   , "Right side of point, next between crates and point, is the safer option to hold in most cases. Not only does it provide wide sight lines onto choke and Griffin, but it also provides several safer retreation paths, and the ability to hold the enemy in a new choke; the left side of point below Griffin. Holding crates in a Ashe Rein Zarya Comp could bode well, for you can control the front side of map through the pressure being exerted by your Ashe, and once the enemy finally rotates into either the left side of point into the choke, or onto crates, Dynamite can easily provide pressure to either stagger the enemy push, or open up an opportunity for a counter push"],
                  ["Text"   , "When you boil it down, Blizzard World is about controlling the statue sight lines, and punishing grouped up enemies in chokes points"],
                  ["Header" , "Defense - First Point - Comps"],
                  ["SubHeader", "COMP: Orisa Dva bunker, Ashe Widow, Ana Zen"],
                  ["Text"   , "Orisa will provide steady cover on crates for the Ashe, Ana and Zen, while the Widow looks for off angles to get early picks on squishies out of position. D.va will provide peel to the Widow as she searches for picks, as well as keep Orisa's shield up time as high as possible. The Ashe and Widow can both retreat to different high ground (through Coach Gun and grapple) to exert pressure on the enemy once they finally get onto the point, while the core team stays on point with Orisa blowing cooldowns to keep pressure on the point while waiting for the optimal ult economy // opening picks to occur. Ana's Nano will allow key targets being pressured to stay alive during team fights, along with the transcendence from Zen to keep the team alive. Ashe's BOB will be used to pressure supports into the sightlines of either ADS hero, and supercharger and bomb will be used to counter incoming pressure."],
                  ["SubHeader", "COMP: Rein Zarya, Hanzo Widow, Ana Zen"],
                  ["Text"   , "This comp is all about abusing the choke points around the point, while still exerting heavy pressure with the sniper duo. The Rein and Zarya combo allows for easy ult rotation, and ability synergy. For example, once the enemies group up in the small corridor, Rein can swing into them while being bubbled to both generate ult charge and feed Zarya energy, while also exerting heavy pressure onto the enemy front lines. This energy farm would leave Zarya with at least 40 Energy, allowing her to exert heavy pressure through right clicks into the backline(Note at higher levels this type of bold energy farming in chokes can be punished if done incorrectly, enemies could capitalize on the lack of a bubble from Zarya and hard pressure the Rein) Hanzo's brawl potential with storm arrow in combination with zen's discord allows for heavy single target burst. In terms of ults, Rein and Zarya already have a great rotation going on, with the Hanzo joining in to provide grav dragon. The ana's nano will be dedicated to either saving a single target, or allowing one of the tanks to exert more pressure // gain more ult charge during a fight, and the trance will be saved for the saving the core members"]
                ]

              }
            },
            "Eichenwalde" : {
              "Description" : "A hybrid game mode map set within an old German castle, once defended by Reinhardt himself",
              "Image" : "./Resources/OWMaps/MapPictures/eichenwalde.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Hollywood" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/hollywood.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Kings_Row" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/kings-row.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Numbani" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/numbani.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Dorado" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/dorado.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Havana" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/havana.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Junkertown" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/junkertown.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Rialto" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/rialto.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Route_66" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/route-66.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Watchpoint_Gibraltar" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/watchpoint-gibraltar.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Horizon_Lunar_Colony" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/horizon-lunar-colony.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Paris" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/paris.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Temple_of_Anubis" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/temple-of-anubis.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Volskaya_Industries" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/volskaya-industries.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Busan" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/busan.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Ilios" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/ilios.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Lijiang_Tower" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/lijiang-tower.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Nepal" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/nepal.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            },
            "Oasis" : {
              "Description" : "",
              "Image" : "./Resources/OWMaps/MapPictures/oasis.jpg",
              "GuideData" : {
                "Header" : "",
                "Body"   : {
                  "Header" : "",
                  "Text"   : ""
                }
              }
            }
          }
        }

      },

      "Heroes"    : {
        "HeroTypes" : {
          "MainSupport" : {
            "Description" : "Main supports are your healers, in charge of keeping the entire team alive",
            "Image" : "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png",
            "Heroes" : {

                "Ana" : {
                  "Description": "Ana is a long ranged support with ADS capability, with high single target healing capability, and an ult that can save a teammates life mid fight",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png"
                },
                "Baptiste" : {
                  "Description": "Baptiste is a long range AOE healer, with ease access to the high ground and a 16 second death denying ability",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/baptiste/icon-portrait.png"
                },
                "Brigitte" : {
                  "Description": "Brig is a melee only passive AOE healer, specializing in giving Armour packs to her teammates during combat, and providing general defense against flankers",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/icon-portrait.png"
                },
                "Lucio" : {
                  "Description": "Lucio is a passive AOE healer, who can increase the speed of his teammates and provide a large shield buff through his ult for a short time.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/icon-portrait.png"
                },
                "Mercy" : {
                  "Description": "Mercy is a single target healer, who can switch between healing and damage boosting, making her perfect for pocketing DPS so that they may exert more pressure",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/icon-portrait.png"
                },
                "Moira" : {
                  "Description": "Moira is a AOE healer who has a large HPS but low healing resources, along with a fast charging AOE healing ult",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/moira/icon-portrait.png"
                },
                "Zenyatta" : {
                  "Description": "Zenyatta provides single target healing, and single target damage amplification through his discord, along with an anti wipe ultimate",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/icon-portrait.png"
                }


            }
          },
          "OffSupport"  : {
            "Description" : "Offsupports exist to keep the main healer alive, and provide utility to the team",
            "Image" : "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/icon-portrait.png",
          } ,
          "MainTank"    : {
            "Description" : "Main tanks take space for the team and provide a front line for the team to stand behind",
            "Image" : "https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/icon-portrait.png",
          },
          "OffTank"     : {
            "Description" : "Off tanks keep the team alive through peels, and provide support to the Main Tank in taking space",
            "Image" : "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png",
          },
          "DPS"          : {
            "Description" : "These Heroes are the primary damage dealing heroes within Overwatch",
            "Image" : "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png",
            "Heroes" : {
                "Ashe": {
                  "Description": "Ashe is the ambitious and calculating leader of the Deadlock Gang and a respected figure in the criminal underworld.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/icon-portrait.png"
                },
                "Bastion": {
                  "Description": "Once a frontline combatant in the devastating Omnic Crisis, this curious Bastion unit now explores the world, fascinated by nature but wary of a fearful humanity.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/icon-portrait.png"
                },
                "Doomfist": {
                  "Description": "Recently freed from imprisonment, Doomfist is determined to plunge the world into a new conflict that he believes will make humanity stronger.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/icon-portrait.png"
                },
                "Genji": {
                  "Description": "The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png"
                },
                "Hanzo": {
                  "Description": "Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png"
                },
                "Junkrat": {
                  "Description": "Junkrat is an explosives-obsessed freak who lives to cause chaos and destruction.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png"
                },
                "McCree": {
                  "Description": "Armed with his Peacekeeper revolver, the outlaw Jesse McCree doles out justice on his own terms.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png"
                },
                "Mei": {
                  "Description": "Mei is a scientist who has taken the fight to preserve the environment into her own hands.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png"
                },
                "Pharah": {
                  "Description": "Fareeha Amari's commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/icon-portrait.png"
                },
                "Reaper": {
                  "Description": "Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/icon-portrait.png"
                },
                "Soldier-76": {
                  "Description": "Currently the target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/icon-portrait.png"
                },
                "Sombra": {
                  "Description": "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/icon-portrait.png"
                },
                "Symmetra": {
                  "Description": "Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/icon-portrait.png"
                },
                "Torbjorn": {
                  "Description": "At its height, Overwatch possessed one of the most advanced armaments on the planet, which could be traced to the workshop of an ingenious engineer named Torbjörn Lindholm.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/icon-portrait.png"
                },
                "Tracer": {
                  "Description": "The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png"
                },
                "Widowmaker": {
                  "Description": "Widowmaker is the perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse.",
                  "Image": "https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png"
                }
              }
          }
        },
        "HeroList"  : {

          "Ana" : {
              "Description" : "Ana is a long range support character, who provides single target healing from the backline.",
              "Image" : "./Resources/Heroes/ana.png",
              "GuideData" : {
                "Header" : "",
                "Body"   : [
                  ["Header" , "KIT"],
                  ["Text"   , "Primary Fire - bang"]
                ]

              }
          }

        }
      },

      "TeamComps" : {
        "Comps"     : {
          "2-2-2"       : {
            "Description" : "2-2-2 comps are team comps that hold 2 tanks, 2 dps and 2 healers. They are the standard comp type run in games all over.",
            "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHqNJBnBfb9t4f1O-P3Ep_cJeJktU4rX7wegBwGhMXkTMCm5Gzw",
            "GuideData" : {
              "Standard Dive" : {
                "Header" : "Standard Dive",
                "Image" : "./Resources/Heroes/winston.png",
                "Description"   : "Standard Winston D.va, Genji tracer, Ana Zen dive.",
                "Body"   : [
                  ["Img", "./Resources/Heroes/winston.png", "Misc"],
                  ["Header" , "HEADER"],
                  ["Text"   , "QmQ"],

                ]
              },
              "Comp2" : {
                "Header" : "Double Sniper",
                "Image" : "./Resources/Heroes/widowmaker.png",
                "Description"  : "Interchangeable tank set (usually high mobility), boasting a pair of snipers and a long range healer with a utility based secondary support ",
                "Body"   : {
                  "Header" : "header2",
                  "Text"   : "body text~"
                }
              },
              "Comp3" : {
                "Header" : "Default Rein Zarya",
                "Image" : "./Resources/Heroes/zarya.png",
                "Description"   : "Rein Zarya, one long range dps and one anti flanker dps, and whichever healers are in meta rotation at the moment. ",
                "Body"   : {
                  "Header" : "header2",
                  "Text"   : "body text~"
                }
              }
            }
          },
          "3-3"       : {
            "Description" : "3-3 is a comp type involving 3 tanks and 3 healers, with the most prominant form known as GOATs.",
            "Image" : "",
            "GuideData" : {
              "Comp1" : {
                "Header" : "header1",
                "Description"   : "a desc",
                "Body"   : {
                  "Header" : "header2",
                  "Text"   : "body text~"
                }
              },
              "Comp2" : {
                "Header" : "header1",
                "Description"  : "a desc",
                "Body"   : {
                  "Header" : "header2",
                  "Text"   : "body text~"
                }
              },
              "Comp3" : {
                "Header" : "header1",
                "Description"   : "a desc",
                "Body"   : {
                  "Header" : "header2",
                  "Text"   : "body text~"
                }
              }
            }

          },
          "OffMeta"   : {
            "Description" : "This category is for what could be considered as off meta, or cheese comps",
            "Image" : "",
            "GuideData" : {
              "Header" : "header1",
              "Body"   : {
                "Header" : "header2",
                "Text"   : "body text"
              }
            }
          }
        }
      }
    },

    "Quizzes" : {
      "Easy"   : {
        /*"Description" : "These are the easier quizzes that lower ranked players should be able to get right",
        "Image" : "",
        "Content" : {}, */
        "Quiz 1" : {
          "Description" : "quizzzz the first",
          "Image" : "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          "Content" : {
            "Video" : "",
            "Answer1" : ""
          }
        },
        "Quiz 2" : {
          "Description" : "quizzzz the second",
          "Image" : "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          "Content" : {}
        },
        "Quiz 3" : {
          "Description" : "quizzzz the third",
          "Image" : "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          "Content" : {}
        }
      },
      "Medium" : {
        /*"Description" : "These are medium ranked quizzes that mid tier players should be able to get right",
        "Image" : "",
        "Content" : {} */
        "Quiz 1" : {

        },
        "Quiz 2" : {

        },
        "Quiz 3" : {

        }
      },
      "Hard"   : {
        /*"Description" : "These are harder quizzes that high level players should be able to get right",
        "Image" : "",
        "Content" : {}*/
        "Quiz 1" : {

        },
        "Quiz 2" : {

        },
        "Quiz 3" :  {

        }
      }
    },

    "Coaching" : {
      "Requests" : {
        "Description" : "",
        "Image" : "",
        "Data" : {}
      },

      "Vods" : {
        "Description" : "",
        "Image" : "",
        "Data" : {}

      }

    },

    "OWLVods" : {

      "RawVod" : {
        "Description" : "",
        "Image" : "",
        "Data" : {}
      },
      "CommentatedVod" : {
        "Description" : "",
        "Image" : "",
        "Data" : {}
      }
    }


}
