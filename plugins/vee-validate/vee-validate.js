import { configure, defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules/dist/vee-validate-rules";
export default defineNuxtPlugin((nuxtApp) => {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  
  configure({
   
    validateOnBlur: false,
    validateOnChange: false,
    validateOnInput: true,
  });

});
