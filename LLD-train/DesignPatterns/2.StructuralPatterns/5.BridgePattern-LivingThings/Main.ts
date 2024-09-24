import Tree from "./Tree";
import TreeBreatheImplementor from "./TreeBreatheImplementor";
import Dog from "./Dog";
import DogBreatheImplementor from "./LandBreatheImplementor";
import Fish from "./Fish";
import FishBreatheImplementor from "./WaterBreatheImplementor";

const tree = new Tree(new TreeBreatheImplementor());
tree.breatheProcess();

const dog = new Dog(new DogBreatheImplementor());
dog.breatheProcess();

const fish = new Fish(new FishBreatheImplementor());
fish.breatheProcess();