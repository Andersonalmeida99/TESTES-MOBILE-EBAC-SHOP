const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../Screens/my.Store.Screen");
let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Acess Admin Panel', ()=> {
it('Shoud login with valid credentials', async   () => {
  await homeScreen.goToLogin()
  await loginScreen.setStoreAddress(urlLoja)
  await loginScreen.continue()
  await loginScreen.continueWithStoreCredentials()
  await loginScreen.login(usuario, senha)
  // await loginScreen.goToTwoFactorAuth
  // await loginScreen.twoFactorLogin(senha)
 
   
  

 
  expect(await myStoreScreen.myStoreLogo.IsDisplayed()).toBeTruthy()
  expect(await myStoreScreen.getStoreName()).toEqual('EBAC-Shop')
 
});
}) 
