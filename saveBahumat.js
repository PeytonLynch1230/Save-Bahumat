

var playing = true;
var second = false;
var poison = false;
function start(){
    println("To play this game, please toggle CAPS LOCK to on for the duration of the game. Thank you!");
    println("Welcome knight of Bahumat! The kingdom has slowly been dying due to the evil king Bahu slowly stealing all of the life energy to save him. Alas, you are just a knight forced to serve him...");
    println("You wake up in a tavern you frequent. Another blackout. Being a knight of Bahumat has become a joke, defending a king who is a coward afraid of death.");
    println("Janie: Hey! Knight! Wake up! It's past closing.");
    println("Janie is the owner of the bar. Always loud. Annoying.");
    var leaveOrStay = readLine("Do you leave or stay?: ");
    if(leaveOrStay == "LEAVE"){
        firstPath();
    }else{
        second = true;
        firstPath();
    }
}
function firstPath(){
    if(second = true){
        println("You: C'mon! At least let me get something for the road!");
        println("Janie: Here. Take this and leave already.");
        println("Janie hands you a bottle with a skull on it. Poison. Jerk.");
        poison = true;
    }
    println("You leave the bar, and see the city is thrown into madness. Black vines twist onto the ground, sprawling.");
    println("A vine touches a citizen next to you, and they pass out. It may be your imagination, but the vine seems to grow greener.");
    println("Bahu has really done it this time. This is the worse you've ever seen the kingdom.");
    println("You see a knight chopping at the vines, smaller than you, suddenly get his leg grasped by a vine.");
    println("???: Help! Please!");
    var victor = readLine("Do you help or ignore?");
    if(victor == "HELP"){
        victor = true;
        println("You chop a vine, freeing the knight from the vine.");
        println("???: Thanks for the help! Name's Victor!");
        println("Victor: Looks like the king has really done it now...");
        println("You: Yeah. Well, after all, it is our duty to calm him down.");
        println("Victor: Indeed! Let's head to the castle!");
    }else{
        println("Saving the knight would be a distraction. You need to get to the castle and calm down Bahu.");
    }
    println("You walk to the castle, seeing it covered in those vile vines.");
    println("Suddenly, a vine begins to twist towards you.");
    var firstVine = readLine("Do you cut it or run?");
    if(firstVine == "RUN"){
        println("While you try to evade the vine, it ensnares you. Many other vines drag you down to the ground.");
        println("You: This can't be the end?! Can it?");
        println("You feel vision slowly dim.");
        if(victor == true){
            println("You see Victor begin to cut down the vines, freeing you.");
            println("Victor: We can't die yet! We need to get to Bahu!");
            println("As you stand up, you see a vine slither to Victor. As you exclaim, it impales him through the chest.");
            println("Victor: Get to Bahu... calm him down... please...");
            println("You rush into the castle, unable to look at Victor anymore.");
            victor = false;
        }else{
            println("Everything goes dark as your life force drains to Bamu. You die.");
            gameOver();   
        }
    }else{
        println("You slice cleanly through the vine. The others don't seem to notice you yet.");
        if(victor == true){
            println("Victor: I think if we jump over them, they won't be able to sense us! I think they can only see when they touch a living thing!");
            println("You: True. Or we could just run through it to stop us from being vulnerable.");
        }else{
            println("You: Maybe these things can feel living things? I should jump over them then.");
            println("You: But, if I'm wrong, it would leave me vulnerable. Maybe I should just run through?");
        }
         var runOrJump = readLine("Do you run or jump over the vines?");
        if(runOrJump == "JUMP"){
            println("You leap over the vines, just barely landing into the entrance of the castle.");
            if(victor == true){
                println("Victor lands beside you, almost falling into the vines.");
                println("Victor: Looks like my theory was right!");
            }else{
                println("You: Heh. Guess my theory was right.");
            }
        }else{
            println("You run across the vines, but the first step you take makes the vines shift.");
            if(victor == true){
                println("You quickly leap to the entrance of the castle as the vines whip at you.");
                println("You see Victor wrapped and impaled by the vines, looking at you.");
                println("Victor: Get to Bahu... calm him down... please...");
                println("You rush into the castle, unable to look at Victor anymore.");
                victor = false;
            }else{
                println("While you try to evade the vines, they ensnares you. They drag you down to the ground.");
                println("You: This can't be the end?! Can it?");
                println("You feel vision slowly dim.");
                gameOver(); 
            }
        } 
    }
    if(playing == true){
        println("You walk into the castle, and the place is dimly lit.");
        println("You see a strange bottle on a table.");
        if(victor == true){
            println("Victor: Whoa. That looks like a potion. Maybe it would help?");    
            }
        var potion = readLine("Do you take the bottle? (YES or NO): ");
        if(potion == "YES"){
            potion = true;
            }else{
                println("You: I don't trust that thing. We don't need it.");
                potion = false;
        }
        println("You begin to walk up the staircase. You know this leads to King Bahu.");
        println("You walk to the door of King Bahu's chambers. You can see vines creeping under the door.");
        if(victor == true){
            println("Victor: Hold it! Maybe charging into the room isn't the best idea?");
            println("You: The only other thing we could do is try and climb out that window.");
            println("You: It would lead to his chambers, but falling would mean death.")
            println("Victor: Maybe we split up then? Could maximize our chances.");
            var splitUp = readLine("Do you split up or stick together?: ");
            if(splitUp == "SPLIT UP"){
                println("You: Good idea. I'll take the door, you take the window.");
                println("Victor: I gotta get the window?! Ugh, fine... If you don't see me again, I fell.");
                println("Victor begins to crawl out the window, and you prepare to open the door.");
                victor = "dead";
            }else{
                println("You: Splitting up would do us no good. We both need to fight this.");
                println("Victor: Well, when you say it like that...");
                println("You and Victor prepare to open the door.");
            }
            }else{
                println("You: Maybe charging in isn't the best idea. Maybe I could try and crawl out that window.");
                println("I'm sure that window could lead me to Bahu, but falling would mean death.");
                var chargeOrClimb = readLine("Do you charge in or climb?: ");
                if(chargeOrClimb == "CLIMB"){
                    println("You begin to crawl out the window. But suddenly, you notice vines hanging out Bahu's window.");
                    println("You try to carefully climb into Bahu's window, but you foot brushes a vine.");
                    println("The vines dart at you, stabbing you through the stomach as you lose your grip.");
                    println("You fall to the ground, and everything goes black.");
                    gameOver();
                }else{
                    println("You: Too risky.");
                    println("You prepare to enter the door.");
                }
            }
            if(playing == true){
                println("You enter the room, and you see Bahu being help up by dozens of vine, life oozing into him.");
            println("Bahu: Ah. Knights. I should have known these vines wouldn't get everyone.");
            println("You: Why would you do this Bahu?! You promised to be an eternal king, but killing your own people...");
            println("Bahu: Shhhh. Why so narrow minded? Only a fool cannot see that great fortune comes at a cost.");
            println("Bahu begins to descend down, standing only a dozen feet away from you.");
            println("You: You are far beyond saving. This ends, now.");  
            if(victor == true){
                println("Bahu: Hm. Maybe you are right. However, your determination is not reciprocated.");
                println("Bahu turns to the trembling Victor.");
                println("Bahu: I know you have a younger sister Victor. She isn't dead yet, y'know?");
                println("Victor: Why are you telling me this?!?!");
                println("Bahu: I am willing to give both you and your sister immortality.");
                println("Victor grits his teeth and looks down.");
                println("You: Victor... if we kill him now, she doesn't have to die!");
                println("Bahu: I will kill her. I know exactly where she is. I can kill her.");
                println("Victor: what do you want me to do?...");
                println("Bahu: Kill this pest.");
                println("Victor turns to you, with a sadness in his eyes.");
                println("Victor: I'm sorry. Truly.");
                println("Victor stabs you through the stomach and you fall to the ground.");
                println("You vision darkens as you slowly bleed out.");
                if(poison == true){
                    println("The poison Janie gave you falls out of your pocket and shatters on the vines.");
                    println("The vines recoil in pain as King Bahu falls to the ground.");
                    println("The poison spills onto you as well.");
                    println("You fall to the ground, your vision darkening.");
                    println("You see Bahu's dead body, but then you see Victor, kneeling down to you.");
                    println("Victor: I'm sorry friend. I shouldn't have done that... you are a hero.");
                    println("Victor: I won't be a coward anymore. I will honor your death, friend.");
                    println("You smile as you black out. You've died a noble death.");
                    victorEnding();
                }else{
                    gameOver();
                }
            }
            if(playing == true){
                println("You charge at Bahu as vines begin to crawl towards you.");
                if(potion == true){
                    var leapOrPotion = readLine("Do you leap towards Bahu or do you use your potion? (LEAP or POTION): ");
                    if(leapOrPotion == "POTION"){
                    println("You throw your potions against the vines as they curl and writhe in pain.");
                    println("Bahu falls to the ground, screaming.");
                    println("You slowly approach Bahu, blade drawn.");
                    println("Bahu: Wait! Please! I'll share my immortallity with you! Just don't kill me!");
                    var redeemOrKill = readLine("Do you accept Bahu's offer or kill him? (ACCEPT or KILL): ");
                    if(redeemOrKill == "ACCEPT"){
                        println("You: Fine. I accept.");
                        println("Bahu: Thank you! Come here so I can grant you some of my lifespan.");
                        println("You crouch down to Bahu, who seems to be gaining his color back after the potion.");
                        println("Bahu begins to pour his lifespan into you, filling you with practical immortality.");
                        badEnding();
                    }else{
                        println("You: Get real.");
                        println("You slice Bahu's head clean off with one blow.");
                        println("The vines sag to the ground, proving that Bahu is now dead.");
                        gameWon();
                    }
                }else{
                    var leapOrThrow = readLine("Do you leap at Bahu or throw your sword at him? (LEAP or THROW): ");
                    if(leapOrThrow == "THROW"){
                        println("You throw your sword at Bahu as the vines pierce your stomach.");
                        println("However, as your vision begins to fade, you see the sword pierce Bahu in the chest.");
                        println("Bahu falls to the ground and the vines go limp, proving that he is dead.");
                        println("You fall to the ground as well, dead.");
                        heroicEnding();
                    }else{
                        println("You attempt to leap over the vines, but they grab your leg.");
                        if(poison == true){
                            println("The poison bottle Janie gave you falls from your pocket and shatters on the vines.");
                            println("They recoil in pain as the poison takes event, and King Bahu crumbles onto the ground.");
                            println("Bahu: It burns! Burns!");
                            println("You look down at your leg and see the poison has touched you too.");
                            println("You feel faint as you fall to the ground.");
                            println("King Bahu's dead body is the last thing you see as you die.");
                            heroicEnding();
                        }else{
                            println("The vines pull you down as you feel your life drain.");
                            println("Your vision blurs as you see King Bahu laugh.");
                            gameOver();
                        }
                    }
            }
    }    
}
}
}
}
    
    


function secondPath(){
    println("You: C'mon... just one drink more!");
    println("Janie: You knights have too much time on your hands!");
    println("???: Hey, leave the guy alone...");
    println("A women sitting a couple seats away from you turns to you.");
    println("???: My brother's a knight, y'know? Name's Victoria.");
}
function gameOver(){
    println("The kingdom went on to perish, as every form of life was drained to King Bahu.");
    println("Atleast you tried, right?");
    println("Bahu becomes known as the King Who Conquered Death.");
    println("The end.");
    playing = false;
}
function gameWon(){
    println("With Bahu defeated, you reconcile with the few suriviors of Bahumat.");
    if(victor == "dead"){
        println("You find out that Victor fell from the window. You ensure his death is never forgotten.");
    }
    println("While the damage done will always be apart of you, you help the kingdom grow.");
    println("Suprisingly, the people decide that you should be the next king! Wouldn't have been my choice...");
    println("You grow old watching over the kingdom and pass it down to your future children.");
    println("You die of old age, but you are known as the King Who Smiles at Death.");
    println("The end.");
}
function badEnding(){
    println("You and Bahu rampage other cities, sapping more and more life.");
    println("You lifespan neared infinity. But, Bahu eventually turns on you as he assassinates you.");
    println("You become known as the King Who Feared Death.");
    println("The end.");
}
function heroicEnding(){
    println("Your death was not forgotten. The remaining people of Bahumat rebuilt the kingdom.");
    println("The day of Bahu's attack became a holiday known as Hero's Day, to celebrate the hero who saved them all.");
    println("You become know as the Hero Who Conquered Evil.");
    println("The end.");
}
function victorEnding(){
    println("Victor went on to be a fine king, ensuring that tyranny never touched Bahumat again.");
    println("He established trade routes with various kingdoms, but he was never afraid to stop outrageous demands.");
    println("Victor lived every day trying to repair Bahumat from Bahu's tyranny.");
    println("Although the kingdom never forgot, Victor was able to rebuild the kingdom.");
    println("He became known as Victor the Brave.");
    println("The end.");
}