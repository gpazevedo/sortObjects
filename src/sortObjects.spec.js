const { ordena } = require("./sortObjects");

describe("Ordena um array segundo outro", () => {
  it("ordena entrada vazia", () => {
    const order = [1, 2];
    const input = [];
    const expected = [];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena ordenação vazia", () => {
    const order = [];
    const input = [
      { id: 1, info: "any" },
      { id: 2, info: "any" },
    ];
    const expected = [];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena arrays originais", () => {
    const order = [2, 1, 4, 3, 9, 6];
    const input = [
      { id: 2, info: "any" },
      { id: 3, info: "any" },
      { id: 1, info: "any" },
      { id: 3, info: "any" },
      { id: 2, info: "any" },
      { id: 4, info: "any" },
      { id: 6, info: "any" },
      { id: 9, info: "any" },
      { id: 2, info: "any" },
    ];
    const expected = [
      { id: 2, info: "any" },
      { id: 2, info: "any" },
      { id: 2, info: "any" },
      { id: 1, info: "any" },
      { id: 4, info: "any" },
      { id: 3, info: "any" },
      { id: 3, info: "any" },
      { id: 9, info: "any" },
      { id: 6, info: "any" },
    ];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena com entradas ausentes", () => {
    const order = [2, 1, 4, 3, 9, 6];
    const input = [
      { id: 2, info: "any" },
      { id: 3, info: "any" },
      { id: 1, info: "any" },
      { id: 3, info: "any" },
      { id: 2, info: "any" },
      { id: 6, info: "any" },
      { id: 9, info: "any" },
      { id: 2, info: "any" },
    ];
    const expected = [
      { id: 2, info: "any" },
      { id: 2, info: "any" },
      { id: 2, info: "any" },
      { id: 1, info: "any" },
      { id: 3, info: "any" },
      { id: 3, info: "any" },
      { id: 9, info: "any" },
      { id: 6, info: "any" },
    ];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena com ordens ausentes", () => {
    const order = [2, 1, 3, 9, 6];
    const input = [
      { id: 2, info: "any" },
      { id: 3, info: "any" },
      { id: 1, info: "any" },
      { id: 3, info: "any" },
      { id: 2, info: "any" },
      { id: 4, info: "any" },
      { id: 6, info: "any" },
      { id: 9, info: "any" },
      { id: 2, info: "any" },
    ];
    const expected = [
      { id: 2, info: "any" },
      { id: 2, info: "any" },
      { id: 2, info: "any" },
      { id: 1, info: "any" },
      { id: 3, info: "any" },
      { id: 3, info: "any" },
      { id: 9, info: "any" },
      { id: 6, info: "any" },
    ];

    expect(ordena(order, input)).toEqual(expected);
  });
});
