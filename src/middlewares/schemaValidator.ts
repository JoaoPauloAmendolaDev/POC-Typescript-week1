import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";


export function validateSchema(schema: ObjectSchema){
    return (req : Request, res : Response, next : NextFunction) => {
        const { error } = schema.validate(req.body, {abortEarly : false});
        if(!error){
        next();
    } else {
        res.status(400).send(error.details.map((d) => d.message))
    }
}
}