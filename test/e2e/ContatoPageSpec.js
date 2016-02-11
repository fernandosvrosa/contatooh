var ContatoPage = new require('./pages/contatoPage');

describe('Cadastro de contatos', function(){
    
   var pagina = new ContatoPage();
   
   beforeEach(function(){
      pagina.visita(); 
   }); 
    
   it('Deve cadastrar um contato', function(){
      var aleatorio = Math.floor((Math.random() * 10000000) + 1);
      var nome = 'teste' + aleatorio;
      var email = 'teste@email' + aleatorio;
      pagina.digitaNome(nome);
      pagina.digitaEmail(email);
      pagina.selecionarPrimeiraEmergenciaDaTela();
      pagina.salva();
      expect(pagina.obterMensagem()).toContain('sucesso'); 
   }); 
    
});