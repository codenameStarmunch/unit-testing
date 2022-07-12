
function panicExceptAtLizards(text) {
    if (text == "Lizard") {
        return true;
    } else { 
        throw "ERROR - must be a lizard"
    }
}

console.log(panicExceptAtLizards("Capybara"))



try {
    throw "A terrible problem has occured."
    null.toString();
    console.log("Try!");

} catch (error) {
    console.log(error);

}

console.log("Hi!");

