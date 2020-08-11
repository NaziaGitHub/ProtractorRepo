describe('This is scenario',function()
{
    it('This is test',function()
    {
        browser.get('https://juliemr.github.io/protractor-demo/');
       browser.sleep(5000);

       element(by.model('first')).sendKeys('23');
       element(by.model('second')).sendKeys('231');
       element(by.css('[ng-click="doAddition()"]')).click();
       let a=element(by.cssContainingText('.ng-binding','254'));
       expect(a.getText()).toEqual('254')
       browser.sleep(5000);

       
    })
})