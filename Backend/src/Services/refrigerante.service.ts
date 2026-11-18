import { refrigeranteRepository } from "../Repository/refrigerantes.repository.js";
import { CreateRefrigerante } from "../Types/refrigerante.types.js";

class RefrigeranteService{
    async create(refrigerante: CreateRefrigerante) {
        return await refrigeranteRepository.create(refrigerante)
    }
    async getAll() {
        return await refrigeranteRepository.getAll()
    }
    async getById(id: string) {
        return await refrigeranteRepository.getById(id)
    }
    async update(id: string, dados: CreateRefrigerante) {
        return await refrigeranteRepository.update(id, dados)
    }
    async delete(id: string) {
        return await refrigeranteRepository.delete(id)
    } 
}

export const refrigeranteService = new RefrigeranteService