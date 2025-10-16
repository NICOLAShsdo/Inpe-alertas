test("processamento completo de alerta crítico", () => {
const resultado = processarAlerta(90);
expect(resultado).toBe("Notificação enviada: Crítico");
});

const api = { enviar: jest.fn(() => "Simulado!") };

test("simulação de envio", () => {
const resposta = api.enviar();
expect(resposta).toBe("Simulado!");
});