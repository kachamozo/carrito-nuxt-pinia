import { ref } from "vue";

export const productos = ref([]);

fetch("http://localhost:3001/product", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcmxvc0BjYXJsb3MuY29tIiwiaWF0IjoxNzA2Mjc1MDYwLCJleHAiOjE3MDYzMTEwNjB9.vahWpg0aANo7nbLNziQcqe-JQja9LvtF_F8yjH3S-T8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    productos.value = data.productos;
  });
