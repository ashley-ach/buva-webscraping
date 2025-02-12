const { $ } = require('@wdio/globals')
const Page = require('./page');

class SantanderPage extends Page {

    // Definicion de elementos

    get inputyear() { 
        return $('#year'); //año
    }

    get inputmodel() {
        return $('#search > div > div > div.ng-input > input[type=text]'); //Modelo (busqueda de vehiculo)
    }

    get btnContinueOne() { //Botón continuar
        return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > div.row.justify-content-center > div.button-cotiza.row.col-12 > div:nth-child(2) > button');
    } 
    //get selectInsuranceType(){ //Tipo de seguro
      //  return $('/html/body/app-root/block-ui/div/div/ac-home/section/div[2]/div[2]/ac-vehicle-data/section/div/div[1]/div[2]/div/ng-select/div/div/div[3]');
    //}
   // get selectCarCondition(){ //condición de automóvil
      //  return $('#carCondition > div > div > div.ng-input');
    //}
    //get inputInvoiceValue(){//Valor factura
    //    return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-multiyear-data > section > form');
    //}
    //get selectFinancial (){ //Institución financiera
      //  return $('#financialInstitution > div > div > div.ng-input');

    //}
    //get selectStartDate(){ //Fecha de inicio de poliza
      //  return $('#policyStartDate');
    //}
    //get selectPolicyTerm(){ //Vigencia del seguro
      //  return $('#policyTerm > div > div > div.ng-input')
    //}
   // get btnContinueTwo(){
     //   return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-multiyear-data > section > form > div.button-cotiza.d-flex.justify-content-center > button');
    //}
    get btnGender (){ //Género masculino
        return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-quotation-data > section > form > div > div:nth-child(2) > div.btn-group.btn-group-toggle.radio-btn-sex > label.btn.gen.active-button.active');

    }
    get inputBornDate(){ 
        return $('#date');
    }
    get inputName(){
        return $('#name');
    }
    get inputCp(){
        return $('#cp');
    }
    get inputEmail(){
        return $('#email');
    }
    get inputPhone(){
        return $('#phone');
    }
    get btnCotizar(){
        return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-quotation-data > section > div > div.button-show-cotiza.d-flex.justify-content-center > button');
    }
    get btnFirstOption(){ //Ultima seccion, comparador aseguradoras
        return $('body > app-root > block-ui > div > div > ac-quotation > section.quotation > div:nth-child(5) > div.col-sm-12.col-md-12.col-lg-9.px-0.d-sm-flex.justify-content-sm-center.d-md-flex.justify-content-md-center > div.md-row.sm-row > div:nth-child(1) > div > div.row.position-top-main > div.col-md-2.col-sm-6.col-lg-4 > div > div > div');
    }
    get btnSecondOption(){
        return $('body > app-root > block-ui > div > div > ac-quotation > section.quotation > div:nth-child(5) > div.col-sm-12.col-md-12.col-lg-9.px-0.d-sm-flex.justify-content-sm-center.d-md-flex.justify-content-md-center > div.md-row.sm-row > div:nth-child(2) > div > div.row.position-top-main > div.col-md-2.col-sm-6.col-lg-4 > div > div > div');
    }
    get btnThirdOption(){
        return $('body > app-root > block-ui > div > div > ac-quotation > section.quotation > div:nth-child(5) > div.col-sm-12.col-md-12.col-lg-9.px-0.d-sm-flex.justify-content-sm-center.d-md-flex.justify-content-md-center > div.md-row.sm-row > div:nth-child(3) > div > div.row.position-top-main > div.col-md-2.col-sm-6.col-lg-4 > div > div > div');
    }
    get btnCompare(){
        return $('body > app-root > block-ui > div > div > ac-quotation > section.compare > div > div.col-sm-5.col-md-4.position-button-mobile.align-center-button > button');
    }

    //Definicion de comportamientos

    
     /* async fillInsuranceType (text){ //Tipo seguro
        await this.selectInsuranceType.waitForExist({ timeout: 5000 });
        await this.selectInsuranceType.selectByVisibleText(text);    
        
    } 
    async fillCarCondition(condition){ //condición de automóvil
        await this.selectCarCondition.selectByVisibleText(condition);
    } */
     
        async fillDataYear(year, validationClass = 'ng-valid', maxAttempts = 3, debug = false) {
            const inputYear = await this.inputyear;
            let attempts = 0;
            
            // Función helper para simular delay humano
            const humanDelay = async () => {
                const randomDelay = Math.floor(Math.random() * (300 - 100) + 100);
                await browser.pause(randomDelay);
            };
        
            // Función para simular escritura humana
            const typeHumanLike = async (element, text) => {
                await element.click();
                await humanDelay();
                await element.clearValue();
                await humanDelay();
                
                // Escribir cada número con un delay aleatorio
                for (let digit of text.toString()) {
                    await element.addValue(digit);
                    await humanDelay();
                }
            };
        
            while (attempts < maxAttempts) {
                try {
                    if (debug) {
                        console.log(`=== Intento ${attempts + 1}/${maxAttempts} ===`);
                    }
        
                    // Mover el mouse de forma natural hacia el elemento
                    await inputYear.scrollIntoView({ block: 'center' });
                    await browser.pause(500); // Pausa para el scroll
        
                    // Simular comportamiento más humano al escribir
                    await typeHumanLike(inputYear, year);
        
                    // Simular eventos del navegador de forma más natural
                    await browser.execute((el) => {
                        const createNaturalEvent = (eventType) => {
                            const event = new Event(eventType, {
                                bubbles: true,
                                cancelable: true,
                                composed: true
                            });
                            
                            // Añadir propiedades que normalmente están presentes en eventos reales
                            Object.defineProperty(event, 'isTrusted', {value: true});
                            return event;
                        };
        
                        // Simular secuencia natural de eventos
                        ['focus', 'input', 'change', 'blur'].forEach(eventType => {
                            const event = createNaturalEvent(eventType);
                            el.dispatchEvent(event);
                        });
        
                        // Añadir datos adicionales que algunos frameworks verifican
                        el.dataset.lastChanged = new Date().getTime().toString();
                        el.dataset.userModified = 'true';
                    }, inputYear);
        
                    // Simular movimiento natural del mouse fuera del campo
                    await browser.moveToElement('body', 0, 0);
                    
                    // Verificar la validación con retry pattern
                    await browser.waitUntil(async () => {
                        const classes = await inputYear.getAttribute('class');
                        const value = await inputYear.getValue();
                        
                        if (debug) {
                            console.log('Estado actual:', {
                                classes,
                                value,
                                timestamp: new Date().toISOString()
                            });
                        }
        
                        return classes.includes(validationClass) && value === year.toString();
                    }, {
                        timeout: 8000, // Tiempo aumentado para mayor tolerancia
                        interval: 1000,
                        timeoutMsg: `Validación fallida para el año: ${year}`
                    });
        
                    if (debug) {
                        console.log('✓ Validación exitosa');
                    }
                    return true;
        
                } catch (error) {
                    attempts++;
                    
                    if (debug) {
                        console.error('Error en el intento:', {
                            attempt: attempts,
                            error: error.message,
                            timestamp: new Date().toISOString()
                        });
                    }
        
                    if (attempts === maxAttempts) {
                        throw new Error(`Falló la validación después de ${maxAttempts} intentos: ${error.message}`);
                    }
        
                    // Pausa más larga entre intentos
                    await browser.pause(2000);
                }
            }
        }
    /* async fillDataBrand(model) { //Modelo (busqueda de vehiculo)
        await this.inputmodel.setValue(model);
        await this.btnContinueOne.click();
    }
    async fillInvoiceValue(value){ //Valor factura
        await this.inputInvoiceValue.setValue(value);    
        
    }
    async selectFinancial(name){ //Institucion Fianciera
        await this.selectFinancial.waitForExist({ timeout: 5000 });
        await this.selectFinancial.setValue(name);    
        
    }
    async selectStartDate(date){ //Fecha de inicio de poliza
        await this.selectStartDate.waitForExist({ timeout: 5000 });
        await this.selectStartDate.selectByVisibleText(date);    
        
    }
    async selectPolicyTermByVisibleText(months){ //vigencia del seguro
        await this.selectPolicyTerm.waitForExist({ timeout: 5000 });
        await this.selectPolicyTerm.selectByVisibleText(months);  
        await this.btnContinueTwo.click();  
        
    } */
    async fillPersonalInfo() {
        await this.btnGender.waitForExist({ timeout: 5000 });
        await this.btnGender.click();
        await this.inputBornDate.waitForExist({ timeout: 5000 });
        await this.inputBornDate.setValue('06/01/1977');
        await this.inputName.waitForExist({ timeout: 5000 });
        await this.inputName.setValue('Jonathan');
        await this.inputCp.setValue('06140');
        await this.inputEmail.setValue('webscraping@gmail.com');
        await this.inputPhone.setValue('5555555555');
        await this.btnCotizar.click();

    }
    async selectOptions() { //comparar
        await this.btnFirstOption.waitForExist({ timeout: 5000 });
        await this.btnFirstOption.click();
        await this.btnSecondOption.waitForExist({ timeout: 5000 });
        await this.btnSecondOption.click();
        await this.btnThirdOption.waitForExist({ timeout: 5000 });
        await this.btnThirdOption.click();
        await this.btnCompare.waitForExist({ timeout: 5000 });
        await this.btnCompare.click();
    }



    // async fillDataBrand(model) {
    //     const comboBox = await this.divmodel;
    //     const inputField = await this.inputmodel;
    
    //     // Espera que el campo esté interactuable
    //     await inputField.waitForClickable({ timeout: 5000 });
    
    //     // Haz clic en el combobox para desplegar opciones
    //     await comboBox.click();
    
    //     // Ingresa el nombre de la marca
    //     await inputField.setValue(model);
    
    //     // Dispara eventos adicionales si es necesario
    //     await browser.execute((el) => {
    //         el.dispatchEvent(new Event('input', { bubbles: true }));
    //         el.dispatchEvent(new Event('focus', { bubbles: true }));
    //     }, inputField);
    
    //     // Espera que las opciones estén visibles
    //     const dropdownOptions = await $(`#${await inputField.getAttribute('aria-controls')}`);
    //     await browser.waitUntil(async () => {
    //         return await dropdownOptions.isDisplayed();
    //     }, {
    //         timeout: 5000,
    //         timeoutMsg: 'Las opciones del combobox no cargaron.',
    //     });
    
    //     // Selecciona la opción deseada
    //     const optionToSelect = await dropdownOptions.$(`li*=${model}`);
    //     await optionToSelect.click();
    // }

    // async fillDataBrand(version) {
    //      // Selecciona el contenedor principal del ng-select
    // const ngSelect = await $('ng-select#search');
    // const inputField = await ngSelect.$('div.ng-input input'); // Encuentra el input

    // // Asegúrate de que el ng-select esté visible y clickeable
    // await ngSelect.waitForClickable({ timeout: 5000 });

    // // Haz clic para desplegar las opciones
    // await ngSelect.click();

    // // Escribe el texto de la versión del auto
    // await inputField.setValue(version);

    // // Dispara eventos necesarios para que carguen las opciones
    // await browser.execute((el) => {
    //     el.dispatchEvent(new Event('input', { bubbles: true }));
    //     el.dispatchEvent(new Event('focus', { bubbles: true }));
    // }, inputField);

    // // Verifica si el dropdown se despliega
    // await browser.waitUntil(async () => {
    //     const ariaExpanded = await ngSelect.$('div[role="combobox"]').getAttribute('aria-expanded');
    //     return ariaExpanded === 'true';
    // }, {
    //     timeout: 5000,
    //     timeoutMsg: 'El menú desplegable no se abrió.',
    // });

    // // Busca y selecciona la opción correcta
    // const dropdownOptions = await ngSelect.$$('div.ng-dropdown-panel div.ng-option');
    // for (const option of dropdownOptions) {
    //     const optionText = await option.getText();
    //     if (optionText.includes(version)) {
    //         await option.click(); // Haz clic en la opción
    //         return;
    //     }
    // }

    // throw new Error(`La versión "${version}" no se encontró en las opciones desplegables.`);
    // }

    // async fillDataYear(year) {
    //     await this.inputyear.setValue(year);
    //     await browser.keys('\uE007');
    //     await this.btnContinueOne.click();
    // }

    

    open () {
        return super.openAutocompara();
    }
}

module.exports = new SantanderPage();