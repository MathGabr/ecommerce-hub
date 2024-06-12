import axios from 'axios';

const MERCADO_LIVRE_API_URL = 'https://api.mercadolivre.com/...';
const ALI_EXPRESS_API_URL = 'https://api.aliexpress.com/...';

export async function cadastrarProdutoMercadoLivre(produto) {
  // Implemente a lógica de requisição para a API do Mercado Livre aqui
  const response = await axios.post(MERCADO_LIVRE_API_URL, produto);
  return response.data;
}

export async function cadastrarProdutoAliExpress(produto) {
  // Implemente a lógica de requisição para a API do AliExpress aqui
  const response = await axios.post(ALI_EXPRESS_API_URL, produto);
  return response.data;
}
