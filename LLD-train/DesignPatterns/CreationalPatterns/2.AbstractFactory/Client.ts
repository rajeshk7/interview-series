import AbstractFactoryProducer from "./AbstractFactoryProducer";

const luxuryLactoryProducer = AbstractFactoryProducer.getFactory("Luxury");
luxuryLactoryProducer.getInstance(10000).getCarName();

const economicFactoryProducer = AbstractFactoryProducer.getFactory("Economic");
economicFactoryProducer.getInstance(10000).getCarName();