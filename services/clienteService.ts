import Clientes, { ClienteInterface } from '../models/clientes';
import Enderecos from '../models/endereco';
import Telefones from '../models/telefones';

class clienteService {

    static async getClientes() {
        try {
            const todosClientes = await Clientes.find().populate([{
                path: 'enderecos',
                model: 'Enderecos'
            }, {
                path: 'telefones',
                model: 'Telefones'
            }]);
            return todosClientes;
        } catch (err) {
            return "erro400";
        }
    }

    static async createCliente(requisicao: ClienteInterface) {
        const { nome_cliente, data_nasc, enderecos: [{ rua, cidade, bairro, uf }], telefones: [{ numero, ddd, tipo_telefone }] } = requisicao;

        const cliente = await Clientes.create({
            nome_cliente,
            data_nasc,
        });
        const enderecos = await Enderecos.create({
            rua,
            cidade,
            bairro,
            uf
        })
        const telefones = await Telefones.create({
            numero,
            ddd,
            tipo_telefone
        })

        await enderecos.save();
        await telefones.save();
        await cliente.enderecos.push(enderecos._id);
        await cliente.telefones.push(telefones._id);

        await cliente.save();

        return cliente;
    }

    static async patchClientes(requisicao: ClienteInterface, id: String){
        try{
            let cliente = await Clientes.findByIdAndUpdate(id, requisicao);
            return cliente;
        }catch(err){
            return "erro400";
        }
    }

    static async deleteCliente(id: String){
        try{
            await Clientes.findByIdAndDelete(id);
            return "deletado";
        }catch(err){
            return "erro400";
        }
    }
}

export default clienteService;