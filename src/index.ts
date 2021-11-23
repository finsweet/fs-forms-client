import { payload } from './types';
// Starter example. Check the comments!
document.addEventListener('DOMContentLoaded', () => {

  // All dom nodes
  const forms = document.querySelectorAll<HTMLFormElement>('[fs-forms-appname]');
  // check if we have forms
  if (forms.length > 0) {

  forms.forEach(form => {
    let data:string = ''
    // get value of fs-forms-appname attribute
    let appname = form.getAttribute('fs-forms-appname');
    // get all elements with fs-form-appcolumn attribute from form
    let appcolumns = form.querySelectorAll<HTMLInputElement>('[fs-form-appcolumn]');
    // add data to hidden field
    appcolumns.forEach(appcolumn => {
      // get value of fs-form-appcolumn attribute
      let appcolumnName: string = appcolumn.getAttribute('fs-form-appcolumn') || "";
      // get data name of fs-form-appcolumn
      let appcolumnValue = appcolumn.getAttribute('data-name')  || '';
      data += appcolumnName+':'+appcolumnValue+';';
    })
    // check if appname is set on the form attribute
    if (appname){
      // add data and appname to payload
      let payload: payload = {
        appname: appname,
        values: data
      }
      // add data to hidden field
      let input: HTMLInputElement = document.createElement("input");
      input.type = "hidden";
      input.name = "map";
      input.value = JSON.stringify(payload);
      form.appendChild(input);
    }
  });
}
});