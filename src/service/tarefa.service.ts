import tarefaSchema from "../schema/tarefa.schema";
import { ITarefa } from "../types/ITarefa";

class TarefaService {
    async create(tarefa: ITarefa) {
        return await tarefaSchema.create(tarefa);
    }

    async findAll() {
        return await tarefaSchema.find();
    }

    async findById(id: string) {
        return await tarefaSchema.findById(id);
    }

    async update(id: string, tarefa: ITarefa) {
        return await tarefaSchema.findByIdAndUpdate(id, tarefa, { new: true });
    }

    async delete(id: string) {
        return await tarefaSchema.findByIdAndDelete(id);
    }
}

export default new TarefaService();