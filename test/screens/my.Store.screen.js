class MyStoreScreen {
  get #myStoreLogo() {
      return $('~My store')
  }

  get #myStoreName() {
      return $('id:toolbar_subtitle')
  }

  async myStoreLogoIsDisplayed(){
    await this.#myStoreLogo.waitForExist({ timeout: 50000 }) 
    return await this.#myStoreLogo.isDisplayed() 
  }
  
  async myStoreNameText(){
    return await this.#myStoreName.getText()
  }
}

module.exports = new MyStoreScreen()