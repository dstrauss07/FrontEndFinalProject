const fs = require('fs'),
    path = require('path'),
    filePath = path.join( __dirname, "data"),
    fileName = path.join(filePath, "gameData.json");

let gameList = [];

let loadPosts = () => {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error("error loading data file: " + err.message);
            throw err;
        }
        else {
            let newPostsArr = JSON.parse(data);
            if (newPostsArr.length > 0) {
                gameList = newPostsArr;
            }
        }
    });
}

let savePosts = () => {
    fs.writeFile(fileName, JSON.stringify(gameList), (err) => {
        if (err) {
            console.error("error writing the file. " + err.message);
            throw err;
        }
        console.log("the JSON file has been saved.");
    });
};

loadPosts();

let repo = {
    startGame: (character) => {
        gameList.push(character);
        savePosts();
    }
};

module.exports = repo;