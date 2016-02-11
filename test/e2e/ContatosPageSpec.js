var ContatosPage = new require('./pages/contatosPage.js');

describe('Página principal', function(){
   
   var pagina = new ContatosPage();
    
    
   beforeEach(function(){
     pagina.visita(); 
   }); 
   
    it('Deve estar logado', function(){
        pagina.obterUsuarioLogado()
            .then(function(texto){
                expect(texto.trim().length).toBeGreaterThan(0);
            }) ;           
    }); 
    
    it('deve remover contato da lista', function(){
       var totalAntes = pagina.obterTotalDeItensDaLista();
       pagina.removerPrimeiroItemDaLista();
       var totalDepois = pagina.obterTotalDeItensDaLista();
       expect(totalDepois).toBeLessThan(totalAntes);
        
    });
  
});