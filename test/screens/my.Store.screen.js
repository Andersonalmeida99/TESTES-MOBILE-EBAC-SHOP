class MyStoreScreen {
    get #myStoreLogo() {
        return $('~My Store')
    }

    get #myStoreName() {
        return $('id:toolbar_subtitle')
    }
  async myStoreLogoisDisplayed(){
    await this.#myStoreLogo.waitForExist()
    return await  this.#myStoreLogo.isDisplayed()
    
  }
}

module.exports = new MyStoreScreen()