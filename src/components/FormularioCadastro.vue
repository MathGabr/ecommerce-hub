<template>
    <div>
      <h1>Cadastro de Produto</h1>
      <form @submit.prevent="cadastrarProduto">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="produto.nome" required />
        </div>
        <div>
          <label for="descricao">Descrição:</label>
          <input type="text" id="descricao" v-model="produto.descricao" required />
        </div>
        <div>
          <label for="preco">Preço:</label>
          <input type="number" id="preco" v-model="produto.preco" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p v-if="mensagem">{{ mensagem }}</p>
    </div>
  </template>
  
  <script>
  import { cadastrarProdutoMercadoLivre, cadastrarProdutoAliExpress } from '../services/api';
  
  export default {
    data() {
      return {
        produto: {
          nome: '',
          descricao: '',
          preco: 0,
        },
        mensagem: '',
      };
    },
    methods: {
      async cadastrarProduto() {
        try {
          await cadastrarProdutoMercadoLivre(this.produto);
          await cadastrarProdutoAliExpress(this.produto);
          this.mensagem = 'Produto cadastrado com sucesso!';
        } catch (error) {
          this.mensagem = 'Erro ao cadastrar produto: ' + error.message;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>