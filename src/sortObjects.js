function ordena(ordem, entrada) {
  if (
    entrada &&
    entrada instanceof Array &&
    entrada.length > 0 &&
    ordem &&
    ordem instanceof Array &&
    ordem.length > 0
  ) {
    const mapa = entrada.reduce((mapa, e) => {
      let outros = mapa.get(e.id) || [];
      outros.push(e);
      mapa.set(e.id, outros);
      return mapa;
    }, new Map());

    return ordem.reduce(
      (ordenado, o) => (mapa.get(o) ? ordenado.concat(mapa.get(o)) : ordenado),
      []
    );
  } else return [];
}
module.exports = { ordena };
