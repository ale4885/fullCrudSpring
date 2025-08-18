// js/services/productService.js
//const API_URL = 'localhost:8080/api/products'; //Local
const API_URL = 'http://10.10.0.97:8080/api/products'; //Remoto

export async function getProducts(page = 0, size = 10) {
  const res = await fetch(`${API_URL}/getAllProducts?page=${page}&size=${size}`);
  return res.json();
}

export async function createProduct(payload) {
  await fetch(`${API_URL}/newProduct`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function updateProduct(id, payload) {
  await fetch(`${API_URL}/updateProduct/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function deleteProduct(id) {
  await fetch(`${API_URL}/deleteProduct/${id}`, { method: 'DELETE' });
}