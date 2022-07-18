class MyStoreScreen {
    get #myStoreLogo() {
        return $('~My store')
    }

    get #myStoreName() {
        return $('id:toolbar_subtitle')
    }

    async myStoreLogoIsDisplayed(){
      await this.#myStoreLogo.waitForExist({ timeout: 20000 }) 
      return await  this.#myStoreLogo.IsDisplayed()    
    }
  }

module.exports = new MyStoreScreen()