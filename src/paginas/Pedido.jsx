import "./Pedido.css";
import axios from "axios";
import { useState, useEffect } from "react";



function Pedido() {

    const [pedido, setPedido] = useState(null);
    const [pedidos, setPedidos] = useState([]);

    function getPedidos() {
        axios.get("http://localhost:5271/pedido").then((resposta) => { setPedidos(resposta.data); });
    }

    function excluirPedido(id) {
        axios.delete("http://localhost:5271/pedido/" + id).then(() => {
            getPedidos();
        });
    }

    useEffect(getPedidos, []);

    function novoPedido() {
        setPedido({
            descricao: "",
            preco: ""
        });
    }

    function cancelar() {
        setPedido(null);
    }

    function refresh() {
        cancelar();
        getPedidos();
    }

    function onChangePedido(campo, valor, id) {
        pedido[campo] = valor;
        setPedido({
            ...pedido,
        });
    }

    function salvarPedido() {
        if (pedido.id) {
            axios.put("http://localhost:5271/pedido/" + pedido.id, pedido)
                .then(() => {
                    refresh();
                });
        } else {
            axios.post("http://localhost:5271/pedido", pedido)
                .then(() => {
                    refresh();
                });
        }
    }

    function getFormulario() {
        return (
            <form>
                <label for="descricao">Descricao</label>
                <input type="text" id="descricao" name="descricao" value={pedido.descricao}
                    onChange={(e) => {
                        onChangePedido(e.target.name, e.target.value, pedido.id);
                    }}
                />
                <br />
                <label for="preco">Preco</label>
                <input type="text" id="preco" name="preco" value={pedido.preco}
                    onChange={(e) => {
                        onChangePedido(e.target.name, e.target.value, pedido.id);
                    }} />
                <br />
                <button onClick={() => { cancelar(); }}>Cancelar</button>
                <button onClick={() => { salvarPedido(); }}>Salvar</button>
            </form>
        );
    }


    function editarPedido(pedido) {
        setPedido(pedido);
    }

    function getLinha(pedido) {
        return (
            <tr>
                <td>{pedido.id}</td>
                <td>{pedido.descricao}</td>
                <td>{pedido.preco}</td>
                <td>
                    <button onClick={() => { excluirPedido(pedido.id) }}>Excluir</button>
                    <button onClick={() => { editarPedido(pedido) }}>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        const linhasDaTabela = [];
        for (let i = 0; i < pedidos.length; i++) {
            const pedido = pedidos[i];
            linhasDaTabela[i] = getLinha(pedido);
        }
        return linhasDaTabela;

    }

    function getTabela() {
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Descricao</th>
                    <th>Preco</th>
                </tr>
                {getLinhas()}
            </table>
        );
    }

    function getConteudo() {
        if (pedido == null) {
            return (
                <>
                    <button onClick={() => { novoPedido(); }}>Novo</button>
                    {getTabela()}
                </>
            );
        } else {
            return getFormulario();
        }
    }

    return (
        <div className="background">
            <h1>Cadastro de pedidos</h1>
            {getConteudo()}
        </div>
    );
}

export default Pedido;
