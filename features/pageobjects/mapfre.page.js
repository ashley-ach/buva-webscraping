const { $ } = require ('@wdio/globals')
const Page = require ('./page.js');

class MapfrePage extends Page{

    get selectCarBrand() {
        return $('#VehicleMake_Control');
    }
    get selectCarYear() {
        return $('#VehicleYear_Control');
    }
    get selectCarModel() {
        return $('#VehicleModel_Control');
    }
    /* get selectCarVersion() {
        return $('#VehicleVersion_Control');
    } */
    //Info Personal
    get selectBornDay() {
        return $('#DriverBirthDate_Day');
    }
    get selectBornMonth() {
        return $('#DriverBirthDate_Month');
    }
    get selectBornYear() {
        return $('#DriverBirthDate_Year');
    }
    get selectGender() {
        return $('#DriverGender_Control');
    }
    get inputCp() {
        return $('#driverzipcode');
    }
    get inputName() {
        return $('#Name');
    }
    get inputMail() {
        return $('#EmailId');
    }
    get inputNumber() {
        return $('#Telephone');
    }
    //Terminos y condiciones
    get selectTerm() {
        return $('#TermAndCondition');
    }
   
    get btnContinue() {
        return $('#btnSubmitForm');
    }
    get btnDetails(){
        return $('#CoverLink1_QP_MapfreDirectoLimited');
    }

     //Comportamiento
    async selectCarBrandBy(text) {
        await this.selectCarBrand.waitForExist({ timeout: 5000 });
        await this.selectCarBrand.selectByVisibleText(text);
    }
    
    async selectCarYearBy(year) {
        await this.selectCarYear.selectByVisibleText(year);
    }
    async selectCarModelBy(model) {
        await this.selectCarModel.selectByVisibleText(model);
    }
    async fillPersonalInfo(day, month, year, gender) {
        await this.selectBornDay.waitForExist({ timeout: 5000 });
        await this.selectBornDay.selectByVisibleText('10');
        await this.selectBornMonth.selectByVisibleText('enero');
        await this.selectBornMonth.selectByVisibleText('1977');
        await this.selectGender.waitForExist({ timeout: 5000 });
        await this.selectGender.selectByVisibleText('conductor');
        await this.inputCp.setValue('06140');
        await this.inputName.setValue('Jose');
        await this.inputMail.setValue('prueba@gmail.com');
        await this.inputNumber.setValue('555555554');
        await this.btnContinue.click();

    }
    async acceptTerm() {
        await this.selectTerm.waitForExist({ timeout: 5000 });
        await this.selectTerm.click();
        await this.btnContinue.click();

    }
    open() {
        return super.openMapfre();
    }

}

module.exports =new MapfrePage();