test("classificação + notificação", () => {
constalerta = classificarAlerta(90);
constresultado = enviarNotificacao(alerta);
expect(resultado).toBe("Notificação enviada: Crítico");
});