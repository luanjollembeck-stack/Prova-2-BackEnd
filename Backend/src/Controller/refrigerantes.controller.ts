import { type Request, type Response } from "express";
import { CreateRefrigerante } from "../Types/refrigerante.types";
import { refrigeranteService } from "../Services/refrigerante.service";

class RefrigeranteController {
    async create(req: Request<CreateRefrigerante>, res: Response) {
        try {
            const refrigerante = await refrigeranteService.create(req.body)
            return res.json(refrigerante)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async getAll(req: Request, res: Response) {
        try {
            const refrigerante = await refrigeranteService.getAll()
            return res.json(refrigerante)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async getById(req: Request<{ id: string }>, res: Response) {
        try {
            const refrigerante = await refrigeranteService.getById(req.params.id)
            return res.json(refrigerante)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async update(req: Request<{ id: string }, CreateRefrigerante>, res: Response) {
        try {
            const refrigeranteExcluido = await refrigeranteService.update(req.params.id, req.body)
            return res.json(refrigeranteExcluido)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    async delete(req: Request<{ id: string }>, res: Response) {
        try {
            const refrigeranteExcluido = await refrigeranteService.delete(req.params.id)
            return res.json(refrigeranteExcluido)
        } catch (error) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor" })
        }

    }
    
    
}

export const refrigeranteController = new RefrigeranteController