const homeScreen = require("../screens/home.screen");

describe('Acess Admin Panel', ()=> {
it('Shoud login with valid credentials', async   () => {
  await homeScreen.goToLogin()
  });
}) 