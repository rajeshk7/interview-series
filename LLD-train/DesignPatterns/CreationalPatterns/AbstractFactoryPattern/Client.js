"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactoryProducer_1 = require("./AbstractFactoryProducer");
var luxuryLactoryProducer = AbstractFactoryProducer_1.default.getFactory("Luxury");
luxuryLactoryProducer.getInstance(10000).getCarName();
var economicFactoryProducer = AbstractFactoryProducer_1.default.getFactory("Economic");
economicFactoryProducer.getInstance(10000).getCarName();
