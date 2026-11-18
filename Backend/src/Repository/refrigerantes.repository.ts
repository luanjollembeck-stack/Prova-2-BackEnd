import knex from "knex";
import { CreateRefrigerante } from "../Types/refrigerante.types";

class RefrigeranteRepository{
  async create(dados: CreateRefrigerante) {
        const [refrigerantes] = await knex('Refrigerantes').insert(dados).returning("*")
        return refrigerantes
    }
    async getAll() {
        const refrigerantes = await knex('Refrigerantes').select("*").returning("*")
        return refrigerantes
    }
    async getById(id: string) {
        const [refrigerantes] = await knex('Refrigerantes').where({ id }).select("*").returning("*")
        return refrigerantes
    }
    async update(id: string, dados: CreateRefrigerante) {
        const [refrigerantesAtualizado] = await knex('Refrigerantes').where({ id }).update(dados).returning("*")
        return refrigerantesAtualizado
    }
    async delete(id: string) {
        const [refrigeranteDeletado] = await knex('Refrigerantes').where({ id }).del().returning("*")
        return {
            carro_deletado: {
                status: 'Ok',
                message: "refrigerante deletado com sucesso",
                refrigeranteDeletado
            }
        }
    }
}

export const refrigeranteRepository = new RefrigeranteRepository