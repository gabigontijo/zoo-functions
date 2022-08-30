const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    expect(getOpeningHours()).toEqual({ Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 },
    });
  });

  it('Para os argumentos `Monday` e `09:00-AM` deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('Para os argumentos `Tuesday` e `09:00-AM` deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });

  it('Para os argumentos `Wednesday` e `09:00-PM` deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });

  it(' Para os argumentos `Thu` e `09:00-AM` deve lançar uma exceção com a mensagem: The day must be valid. Example: Monday', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toThrow(Error('The day must be valid. Example: Monday'));
  });

  it('Para os argumentos `Friday` e `09:00-ZM` deve lançar uma exceção com a mensagem: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrow(Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Para os argumentos `Saturday` e `C9:00-AM` deve lançar uma exceção com a mensagem: The hour should represent a number', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error('The hour should represent a number'));
  });

  it('Para os argumentos `Monday` e `13:00-AM` deve lançar uma exceção com a mensagem: The hour must be between 0 and 12', () => {
    expect(getOpeningHours('Monday', '13:00-AM')).toThrow(Error('The hour must be between 0 and 12'));
  });

  it('Para os argumentos `Tuesday` e `09:60-AM` deve lançar uma exceção com a mensagem: The minutes must be between 0 and 59', () => {
    expect(getOpeningHours('Tuesday', '09:60-AM')).toThrow(Error('The minutes must be between 0 and 59'));
  });
});
