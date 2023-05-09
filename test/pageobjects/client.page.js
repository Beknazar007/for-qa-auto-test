const Page = require('./page');

class ClientPage extends Page {
  
  get saveButton () {
    return $('button[name=\'save\']');
  }
  
  get searchField () {
    return $('input[placeholder=\'Все пользователи\']');
  }

  get ageFilter() {
    return $('div.options-select.age:nth-child(1)');
  }

  get ageFilterFrom24To31() {
    return $('div.option.age.identified:nth-child(3)');
  }

  get genderFilter() {
    return $('app-client-sex-filter div.options-container:nth-child(1) div.options-select.gender:nth-child(1)');
  }

  get genderFilterMale() {
    return $('app-client-sex-filter div.option.gender:nth-child(2)');
  }

  get registrationChannelFilter() {
    return $('app-client-registration-channel-filter div.options-select');
  }

  get registrationChannelFilterCRM() {
    return $('app-client-registration-channel-filter div.option:nth-child(2)');
  }

  get searchButton() {
    return $('button.bold:nth-child(1) span.mat-button-wrapper:nth-child(1)');
  }

  get resetButton() {
    return $('button.mat-button:nth-child(3)');
  }

  async checkAgeFilter() {
    await this.searchField.click();
    await browser.pause(5000);

    await expect(this.ageFilter).toExist();
    await this.ageFilter.click();
    await browser.pause(1000);
    await expect(this.ageFilterFrom24To31).toExist();
    await this.ageFilterFrom24To31.click();
    await browser.pause(2000);

    await expect(this.searchButton).toExist();
    await this.searchButton.click();
    await browser.pause(3000);
  }

  async checkGenderFilter() {
    await this.searchField.click();
    await browser.pause(4000);

    await expect(this.genderFilter).toExist();
    await this.genderFilter.click();
    await browser.pause(2000);

    await expect(this.genderFilterMale).toExist();
    await this.genderFilterMale.click();
    await this.searchButton.click();
    await browser.pause(3000);
  }

  async checkRegistrationChannelFilter() {
    await this.searchField.click();
    await browser.pause(3000);

    await expect(this.registrationChannelFilter).toExist();
    await this.registrationChannelFilter.click();

    await expect(this.registrationChannelFilterCRM).toExist();
    await this.registrationChannelFilterCRM.click();

    await browser.pause(3000);
  }

  async checkResetFilters() {
    await this.checkAgeFilter();
    await this.checkGenderFilter();

    await this.searchField.click();
    await browser.pause(3000);

    await expect(this.resetButton).toExist();
    await this.resetButton.click();
    await browser.pause(3000);
  }
}

module.exports = new ClientPage();
