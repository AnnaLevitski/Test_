let value = 0;
function Person(name, email, password, RePassword, sex) {
    function id() {
        value += 1;
        return value;
    }
    console.log('Test' +id());
    this.name = name;
    this.email = email;
    this.password = password;
    this.RePassword = RePassword;
    this.sex = sex; 
    
    document.querySelector('input[name="name"]').value=this.name;
    document.querySelector('input[name="email"]').value=this.email;
    document.querySelector('input[name="password"]').value=this.password;
    document.querySelector('input[name="RePassword"]').value=this.RePassword;
    if (sex != 0) document.getElementById(this.sex).click();
    document.querySelector('.forTest').click();  
    
    let containerRBTN1 =  document.getElementById('containerRBTN1');   // like refresh input 
    let containerRBTN2 =  document.getElementById('containerRBTN2');
    let rBtn1 = document.getElementById('male');
    let rBtn2 = document.getElementById('female');
    if (rBtn1.checked == true){
        rBtn1.remove();
        containerRBTN1.insertAdjacentHTML('afterbegin', '<input type="radio" name="state" id="male" value="Male" />'); 
    };
    if (rBtn2.checked == true){
        rBtn2.remove();
        containerRBTN2.insertAdjacentHTML('afterbegin', '<input type="radio" name="state" id="female" value="Female" />'); 
    };
};


// Create test     let test# = new Person('name', 'email', 'password', 'RePassword', 'female' || 'male');

let test1 = new Person('Diana', 'diana@gmail.com', '123', '123', 'female');
let test2 = new Person('Lorem ipsum', '123@gmail.com', '123', '12#', ' '); 
let test3 = new Person('Lorem ipsum', '123@gmail.com', '123', '123', '');
let test4 = new Person('<b>Lorem</b>', '123@gmailcom', '123', '123', 'male');
let test5 = new Person('<b>Lorem</b>', '123@gmail.com', '123', '123', 'male');



