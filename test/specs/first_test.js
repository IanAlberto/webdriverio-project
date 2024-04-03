const loginPage = require('../pageobjects/login.page')

describe('mi primera prueba', function(){
    it('esta es mi prueba 1', function(){        
        browser.url('/')
        loginPage.login()
    })
})