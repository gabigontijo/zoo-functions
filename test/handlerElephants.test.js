const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função computeData com o parametro count retorna a quantidade de elefantes ', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Testa se a função computeData com o parametro names retorna um array com a relação dos nomes de todos os elefantes ', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Testa se a função computeData com o parametro averageAge retorna a média de idade dos elefantes ', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Testa se a função computeData com o parametro location retorna a localização dos elefantes dentro do Zoológic', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Testa se a função computeData com o parametro popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Testa se a função computeData com o parametro availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Testa se a função computeData  Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Testa se a função computeData  Passando por argumento um objeto vazio (`{}`) deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toContain('Parâmetro inválido, é necessário uma string');
  });

  it('Testa se a função computeData Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('ola')).toBeNull();
  });
});
