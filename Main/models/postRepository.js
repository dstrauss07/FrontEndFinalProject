const fs = require('fs'),
    path = require('path'),
    filePath = path.join( __dirname, "data"),
    fileName = path.join(filePath, "gameData.json");

let gameList = [];

let loadChars = () => {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error("error loading data file: " + err.message);
            throw err;
        }
        else {
            let characterArr = JSON.parse(data);
            if (characterArr.length > 0) {
                gameList = characterArr;
                newChar = characterArr.pop;
            }
        }
    });
}

let saveChars = () => {
    fs.writeFile(fileName, JSON.stringify(gameList), (err) => {
        if (err) {
            console.error("error writing the file. " + err.message);
            throw err;
        }
        console.log("the JSON file has been saved.");
    });
};

loadChars();


let repo = {
    startGame: (character) => {
        gameList.push(character);
        saveChars();
    },
    getChars: () =>{
        return gameList;
    },
    newCharacter:() =>{
        return newChar;
    }
};

module.exports = repo;