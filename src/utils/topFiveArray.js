export const topFiveArray = (dados, categoria) => {
    const contagem = dados.reduce((acc, item) => {
        const valor = item[categoria];
        acc[valor] = (acc[valor] || 0) + 1;
        return acc;
    }, {});
    
  const entries = Object.entries(contagem).sort((a, b) => b[1] - a[1]); // Ordena por frequência

  return (entries.sort.length > 5 ? entries.slice(0,5) :entries) // Pega os 5 primeiros
    .map(([id, value]) => ({ id, label: id, value }));
};