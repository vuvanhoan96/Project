// === form === 

// Đối tượng `Validator`
function Validator(options){

  let selectorRules = {};
    // Hàm thực hiện validate
      function validate (inputElement, rule){
        let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        let errorMessage;

        // Lấy ra các rules của selector 
        let rules = selectorRules[rule.selector];
        // Lặp qua từng rules & kiểm tra
        // Nếu có lỗi thì dừng kiểm tra
        for(let i=0; i<rules.length; ++i){
          errorMessage = rules[i](inputElement.value);
          if(errorMessage) break;
        }
              
              if(errorMessage){
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid');
              }else{
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
              }
      }
      // Lấy element của form cần validate
      let formElement = document.querySelector(options.form);
      if(formElement){

        // let btn = document.querySelector('.form__submit');
        // btn.onsubmit = function () {
        //   options.rules.forEach(function (rule) {
        //     let inputElement = formElement.querySelector(rule.selector);
        //     validate(inputElement, rule);
        //   })
        // }
        formElement.onsubmit = function(e) {
          
          // Lặp qua từng rules và validate
          options.rules.forEach(function (rule) {
            let inputElement = formElement.querySelector(rule.selector);
            validate(inputElement, rule);
          });
        }
        // Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule){

          // Lưu lại cái rules cho mỗi input
          if(Array.isArray(selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test);
          }else{
            selectorRules[rule.selector] = [rule.test];
          }

          let inputElement = formElement.querySelector(rule.selector);
          
          if(inputElement){
            // Xử lý trường hợp blur khỏi input
            inputElement.onblur = function () {
              validate(inputElement, rule);
            }
    //    Xử lý mỗi khi người dùng nhập vào input
            inputElement.oninput = function () {
        let errorElement = inputElement.parentElement.querySelector('.form__message');
              errorElement.innerText = '';
              inputElement.parentElement.classList.remove('invalid');
            }
          }
        });

      }
    }
    
    // Định nghĩa rules
    // Nguyên tắc của các rules:
    // 1. Khi có lỗi => Trả ra message lỗi
    // 2. Khi hợp lệ => Không trả ra gì cả (undefined)
    Validator.isRequired = function(selector, message){
      return {
        selector: selector,
        test: function(value){
          return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
        }
      };
    }
    
    Validator.isEmail = function(selector, message){
      return {
        selector: selector,
        test: function(value){
          let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
      };
    }
    
    Validator.isPhone = function(selector, min, message){
      return {
        selector: selector,
        test: function(value){
          return value.length === min ? undefined : message || 'Vui lòng nhập đủ số';
        }
      };
    }

    Validator({
      form: '#form',
      errorSelector: '.form__message',
      rules: [
          Validator.isRequired('#name', 'Vui lòng nhập tên đầy đủ'),
          Validator.isRequired('#email' ),
          Validator.isEmail('#email', 'Vui lòng nhập email'),
          Validator.isPhone('#phone', 10, 'Vui lòng nhập số điện thoại'),
      ]
    });
    Validator({
      form: '#form-1',
      errorSelector: '.form__message',
      rules: [
          Validator.isEmail('#email-1', 'Vui lòng nhập email'),
      ]
    });