import { Router } from "express";
import { refrigeranteController } from "../Controller/refrigerantes.controller";

export const refrigeranteRouter = Router()

refrigeranteRouter.post("/", refrigeranteController.create)
refrigeranteRouter.get("/", refrigeranteController.getAll)
refrigeranteRouter.get("/:id", refrigeranteController.getById)
refrigeranteRouter.patch("/:id", refrigeranteController.update)
refrigeranteRouter.delete("/:id", refrigeranteController.delete) 