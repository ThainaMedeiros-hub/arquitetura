// Criando um array para armazenar os objetos de estilo
const estilosDeArquitectura = [
  // Estilos Minimalistas
  {
    nome: "Minimalismo Escandinavo",
    descrição: "Estilo clean e funcional, com foco em linhas simples e uso de materiais naturais.",
    materiais: ["madeira", "pedra natural", "vidro", "algodão"]
  },
  {
    nome: "Minimalismo Japonês",
    descrição: "Inspirado na natureza, com uso de espaços vazios e materiais naturais.",
    materiais: ["madeira", "papel de arroz", "pedra", "bambú"]
  },
  {
    nome: "Minimalismo Industrial",
    descrição: "Combina elementos industriais com design minimalista, com foco em materiais brutos.",
    materiais: ["tijolo aparente", "metal", "concreto", "madeira rústica"]
  },

  // Estilos Clássicos
  {
    nome: "Neoclássico",
    descrição: "Reinterpretação dos elementos da arquitetura clássica grega e romana.",
    materiais: ["mármore", "estuco", "madeira nobre", "bronze"]
  },
  {
    nome: "Rústico",
    descrição: "Estilo que valoriza materiais naturais e elementos rústicos.",
    materiais: ["pedra natural", "madeira maciça", "tijolo aparente", "ferro forjado"]
  },
  {
    nome: "Art Déco",
    descrição: "Estilo elegante e luxuoso, com linhas geométricas e materiais nobres.",
    materiais: "mármore, madeira exótica, metal cromado, vidro colorido"
  },

  // Estilos Industriais
  {
    nome: "Loft Industrial",
    descrição: "Estilo que transforma espaços industriais em residências, com foco em elementos originais.",
    materiais: ["tijolo aparente", "metal, tubulação exposta, concreto"
  },
  {
    nome: "Industrial Moderno",
    descrição: "Combinação de elementos industriais com design contemporâneo.",
    materiais: ["metal, vidro, concreto, madeira rústica"]
  },
  {
    nome: "Steampunk",
    descrição: "Estilo que mistura elementos industriais com estética vitoriana.",
    materiais: ["cobre, engrenagens, couro, madeira escura"]
  }
];

// Exibindo os estilos no console (para fins de teste)
estilosDeArquitectura.forEach(estilo => {
  console.log(estilo);
});