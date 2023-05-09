const LoginPage = require('../pageobjects/login.page');
const ClientPage = require('../pageobjects/client.page');

describe("Client tests", () => {
  
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi');
  });
  
  afterEach(async () => {
    await browser.reloadSession();
  })

  it('Check Age filter', async () => {
    await ClientPage.checkAgeFilter();
  })

  it('Check gender filter', async () => {
    await ClientPage.checkGenderFilter();
  })

  it('Check registration channel filter', async () => {
    await ClientPage.checkRegistrationChannelFilter();
  })

  it('Check reset filters', async () => {
    await ClientPage.checkResetFilters();
  })
})
