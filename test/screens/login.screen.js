class LoginScreen {
    get #StoreAddress() { return $('android.widget.EditText') }

    get #continue() { return $('id:bottom_button') }

    get #continueWithStoreCredentials() { return $('id:login_site_creds')}

    get #username() { return $ ('android=new UiSelector().text("Username")')}

    get #password() { return $ ('android=new UiSelector().text("Password")')}

    get #twoFactorPasswordBtn() { return $("id:login_enter_password")}
    
    async setStoreAddress(url) {
      await this.#StoreAddress.setValue(url)
    }

async continue () {
   await this.#continue.click()
}

async continue () {
    await this.#continueWithStoreCredentials.waitForExist().click()
}

async login (username,password){
    await this.#username.setValue(username)
    await this.#password.setValue(password)
    await this.#continue.click()
    
}

async goToFactorAuth () {
    await this.#twoFactorPasswordBtn.click()
    }
async twoFactorLogin(Password){
    await this.#password.setValue(password)
await this.#continue.click()

}

}
module.exports = new LoginScreen()