import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { Server} from "typescript-rest";
import {ROUTES} from "./controllers";

createConnection(process.env.NODE_ENV).then(async (connection) => {

    const app = express();

    // Middlewares
    app.use(cors());
    app.use(bodyParser.json());

    // Routes
    Server.buildServices(app, ...ROUTES);
    Server.swagger(app, "./swagger.yaml", "/api-docs");

    // Run server
    app.listen(3000);
    console.log("Express application is up and running on port 3000");

}).catch((error) => console.log("TypeORM connection error: ", error));
