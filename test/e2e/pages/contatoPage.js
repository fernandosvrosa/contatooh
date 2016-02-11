var contatoPage = function(){

    this.visita =  function(){
    browser.get('http://localhost:3000/#/contato');  
    };

    this.digitaNome = function(nome){
    element(by.model('contato.nome')).sendKeys(nome);
    };

    this.digitaEmail = function(email){
        element(by.model('contato.email')).sendKeys(email);
    };

    this.salva = function(){
        element(by.css('.btn-primary')).click();  
    };

    this.obterMensagem = function(){
        return element(by.binding('mensagem.texto')).getText();
    };

    this.selecionarPrimeiraEmergenciaDaTela = function(){
        element(by.css('option[value="0"]')).click();
    };
}
module.exports = contatoPage;