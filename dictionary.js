
const dictionary = {
    "tea": "A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water.",
    "coffee": "A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.",
    "water": "A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.",
    "burger": "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
    "milkshake": "A cold, sweet beverage made from milk, ice cream, and flavorings or syrups.",
    "milk": "An opaque white fluid rich in fat and protein, secreted by female mammals for the nourishment of their young.",
    "chocolate milk": "A sweetened chocolate-flavored version of milk.",
    "warm milk": "Milk that has been heated to a warm temperature, often consumed before bedtime for its calming effects.",
    "account" :"an arrangement with a bank to keep your money there and allow you to take it out when you need to.",
    "air ": "the mixture of gases that surrounds the Earth and that we breathe",
    "amount ": "a collection or mass, especially of something that cannot be counted.",
   "animal" : "something that lives and moves, but is not a human, bird, insect or fish.",
    "answer" : "the receipt and response to a letter, question or phone call.",
   "approval" : "the feeling of having a positive opinion of someone or something.",
   "art" : "the activity of making objects, drawings, music, paintings, sculptures etc that are beautiful or that express feelings.",
   "attack ": "to try to hurt or defeat (mainly referred to physical violence but can also be used to describe verbal or emotional outbursts).",
   "attention" : "notice, thought or interest.",
   "back" : "(adverb) in return, into, towards a previous place or condition, or an earlier time; (noun) the part of your body that is opposite to the front, from your shoulder to your bottom.",
   "base" : "the bottom part of an object, on which it rests, or the lowest part of something.",
 "behavior" : "the way that someone behaves.",
  "belief" : "the feeling of being certain that something exists or is true, something that you believe."  ,
   "birth" :"the time when a young baby, or young animal comes out of its mother’s body.",
   "blood" :"the red liquid that is sent around the body by the heart.",
   "blow " : " to move and make currents of air, or to make a sound by forcing air out of your mouth.",
   "body" : "the whole physical structure that forms a person or animal.",
  "bread" : "a food made from flour, water and usually yeast, mixed together and baked.",
   "breath": "the air that goes into and out of your lungs.",
"cloth" : "a type of woven material, usually used in cleaning to remove dirt, dust or liquid.",
"color/colour" : "red, blue, green, yellow, red, orange etc.",
"comfort" : "a pleasant feeling of being relaxed and free from pain.",
"decision" : "a choice that you make about something after thinking about all the possible options.",
"detail ": "a single piece of information or fact about something.",
"development" : "the process in which someone or something grows or changes and becomes more advanced",
"example" : "a way of helping someone to understand something by showing them how it is used.",
"experience" : "(the process of getting) knowledge or skill from doing, seeing or feeling things, or something that happens to you which affects how you feel.",
"expert" : "a person with a high level of knowledge or skill relating to a particular subject or activity.",
"fact" : "something that is known to have happened or to exist, especially something for which proof exists.",
"fall" : "to suddenly go down onto the ground or towards the ground without intending to, or by accident.",
"family " : "a group of people who are related to each other such as a mother, father and their children.",
"glass" : "a hard transparent material used to make windows bottles and other objects.",
"gold " : "a chemical element that is a valuable, shiny, yellow metal used to make coins and jewellery.",
"government" : "the group of people that officially control a country.",
"hole" : "to want something to happen or to be true, and usually have a good reason to think that it might.",
"hour" : "a period of 60 minutes.",
"ice ": "water that has frozen and become solid, or pieces of this.",
"idea" :"a suggestion or plan for doing something.",
"increase" :"to (make something) become larger in amount or size.",
"join" : "to connect or fasten things together.",
"journey" : "the act of travelling from one place to another, especially in a vehicle.",
"jump" : "to push yourself suddenly off the ground and into the air using your legs.",
"kick": "to hit someone or something with the foot, or to move the feet and legs suddenly and violently.",
"kiss " : "to touch another person’s cheek or hand with your lips, especially as a greeting, or to press your mouth onto another person’s mouth in a sexual way.",
"knowledge" : "understanding of, or information about, a subject that you get by experience or study.",
"land " : "the surface of the Earth that is not covered by water.",
"language" : "a system of communication consisting of sounds, words and grammar.",
"laugh ":"to smile when making sounds with your voice that show you think something is funny or that you are happy."
};
function searchDictionary() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const resultList = document.getElementById("result-list");
    resultList.innerHTML = ""; // Clear previous results

    if (input.trim() !== "") {
        for (const word in dictionary) {
            if (word.includes(input)) {
                const listItem = document.createElement("li");
                listItem.textContent = `${word}: ${dictionary[word]}`;
                resultList.appendChild(listItem);
            }
        }
    } else {
        resultList.innerHTML = "<li>No results found</li>";
    }
}


document.getElementById("search-input").addEventListener("input", searchDictionary);
