function logTwoValues(value1, value2){
    console.log('The two values are ${value1} and ${value2}.');
}

function introduction(name = "Aki"){
    return(`Hi, my name is ${name}.`)    
}

function introductionWithLanguage ( name = "Aki", language = "Ember.js"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional( name = "Aki", language = "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function sayHelloTo(fistName = "User"){
    return(`Hello, ${firstName}!`);
}
