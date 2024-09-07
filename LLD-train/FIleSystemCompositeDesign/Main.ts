import Directory from "./Models/Directory";
import File from "./Models/File";

const movies = new Directory("Movies");

const action = new Directory("Action");
const comedy = new Directory("Comedy");
const drama = new Directory("Drama");

action.add(new File("The Dark Knight"));
action.add(new File("Inception"));

comedy.add(new File("The Hangover"));
comedy.add(new File("Superbad"));

drama.add(new File("The Shawshank Redemption"));
drama.add(new Directory("The Godfather"));

movies.add(action);
movies.add(comedy);
movies.add(drama);

movies.ls();

