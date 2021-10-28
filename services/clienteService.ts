import Clientes, { ClienteInterface } from '../models/clientes';
import Enderecos from '../models/endereco';
import Telefones from '../models/telefones';
import logger from '../logger';

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
            logger.log('info', 'Clientes consultados')
            return todosClientes;
        } catch (err) {
            return "erro400";
        }
    }

    static async getClientesPorData(dataIni: any, dataFim: any) {
        try {
            const todosClientes = await Clientes.find({ data_nasc: { $gte: dataIni, $lte: dataFim } }).populate([{
                path: 'enderecos',
                model: 'Enderecos'
            }, {
                path: 'telefones',
                model: 'Telefones'
            }]);
            logger.log('info', 'Clientes consultados por data de nascimento')
            return todosClientes;
        } catch (err) {
            return "erro400";
        }
    }

    static async createCliente(requisicao: ClienteInterface) {
        try {
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
            logger.log('info', 'Cliente inserido', cliente._id);
            return cliente;
        }
        catch(err){
            logger.log('error', 'Erro ao inserir cliente');
            return new Error();
        }
    }

    static async patchClientes(requisicao: ClienteInterface, id: String) {
        try {
            let cliente = await Clientes.findByIdAndUpdate(id, requisicao);
            logger.log('info', 'Cliente atualizado: ', id);
            return cliente;
        } catch (err) {
            return "erro400";
        }
    }

    static async deleteCliente(id: String) {
        try {
            await Clientes.findByIdAndDelete(id);
            logger.log('info', 'Cliente deletado: ', id);
            return "deletado";
        } catch (err) {
            return "erro400";
        }
    }
}

export default clienteService;