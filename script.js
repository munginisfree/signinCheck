//id
let eleUsername = document.querySelector("#username");
eleUsername.value = `joyce`;
console.log(eleUsername.value);

let eleFailMessage = document.querySelector(".fail-message");
let eleSuccessMessage = document.querySelector(".success-message");

//password
// console.log(eleFailMessage.textContent);
// console.log(eleSuccessMessage.textContent);

//if id length over 4 return success(div)
//else return fail(div)

eleUsername.onkeyup = eventKeyUp;

function eventKeyUp(e) {

    let currentValue = e.target.value

    if (checkStringLength(currentValue)) {
        //over 4
        eleFailMessage.classList.add("hide"); // hide fail message
        eleSuccessMessage.classList.remove("hide");
    } else {
        eleFailMessage.classList.remove("hide");
        eleSuccessMessage.classList.add("hide");
    }
};

function checkStringLength(str) {
    return str.length >= 4;
}


/////////////////////////////////////////////////////////////////////



let pwArr = document.querySelectorAll(".pwInput");
let signerrorMessage = document.querySelector(".pw-signerror-message");
let elePwFailMessage = document.querySelector(".pw-fail-message");
let sign = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`];

for (let i = 0; i < pwArr.length; i++) {
    pwArr[i].onkeyup = checkPassword;
}

function checkPassword(e) {
    console.log(`event function implemented`);
    if (checkSign(pwArr[0].value)) {
        signerrorMessage.classList.add("hide");
        //elePwFailMessage.classList.add("hide");
    }
    if (pwArr[0].value === `` || pwArr[1].value === ``) {
        elePwFailMessage.classList.add("hide");
    }
    else if (pwArr[0].value === pwArr[1].value) {
        elePwFailMessage.classList.remove("hide");
    }  
    else {
        elePwFailMessage.classList.add("hide");
    }
}

function checkSign(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr).includes(sign[i])) {
            return false;
            //signerrorMessage.classList.remove("hide");
        } else {
            return true;
            //signerrorMessage.classList.add("hide");
        }
    }
}
// function isMatch(pw1, pw2){
//     if(pw1.length !== pw2.length){
//         elePwFailMessage.classList.add("hide");
//     }else{
//         for(let i = 0; i < pw1.length; i++){
//             if(pw1[i] === pw2[i]){
//                 elePwFailMessage.classList.remove("hide");
//             }else{
//                 elePwFailMessage.classList.add("hide");

//             }
//         }
//     }


/**

 * if(isMatch(pre, curr)){
 *      elePwFailMessage.classList.add("hide");
 * }else{
 *  ele.PwFailMessage.classList.remove("hide");
 * }
 */