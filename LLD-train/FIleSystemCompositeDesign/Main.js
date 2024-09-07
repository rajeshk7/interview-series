"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directory_1 = require("./Models/Directory");
var File_1 = require("./Models/File");
var movies = new Directory_1.default("Movies");
var action = new Directory_1.default("Action");
var comedy = new Directory_1.default("Comedy");
var drama = new Directory_1.default("Drama");
action.add(new File_1.default("The Dark Knight"));
action.add(new File_1.default("Inception"));
comedy.add(new File_1.default("The Hangover"));
comedy.add(new File_1.default("Superbad"));
drama.add(new File_1.default("The Shawshank Redemption"));
drama.add(new Directory_1.default("The Godfather"));
movies.add(action);
movies.add(comedy);
movies.add(drama);
movies.ls();
