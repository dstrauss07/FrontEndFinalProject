const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "data"),
    fileName = path.join(filePath, "gameData.json");

let gameList = [];

let updateJSON = () => {
    fs.writeFile(fileName, JSON.stringify(gameList), (err) => {
        if (err) {
            console.error("error writing the file. " + err.message);
            throw err;
        }
        console.log("the JSON file has been saved.");
    });
};

startGame: (character) => {
    gameList.push(character);
    updateJSON();
};