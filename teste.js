const da = [
  {
    id: 1,
    nome: "Rafael",
    sexo: "masculino",
  },
  {
    id: 2,
    nome: "Hudna",
    sexo: "feminino",
  },
  {
    id: 3,
    nome: "Mônica",
    sexo: "feminino",
  },
  {
    id: 4,
    nome: "Ana",
    sexo: "feminino",
  },
]
const escolhido = 3
const busca = da.find((item) => item.id === escolhido)

console.log(busca)
