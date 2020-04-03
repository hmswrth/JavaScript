function User(name,address,mobileNumber,email){
    this.name=name;
    this.address=address;
    this.mobileNumber=mobileNumber;
    this.email=email;
}
function validate() {
    let check = true;
    let name = document.getElementById("name").value;
    if (name.length === 0) {
        document.getElementById("nameWarning").innerText = "Please Enter the name";
        check = false;
    } else {
        document.getElementById("nameWarning").innerText = "";
        check = true;
    }
    let mobileNumber = document.getElementById("mobile").value;
    if (mobileNumber.length === 0) {
        document.getElementById("mobileWarning").innerText = "Please Enter the mobile number";
        check = false;
    } else if (mobileNumber.length > 0 && mobileNumber.length < 10) {
        document.getElementById('mobileWarning').innerText = 'Invalid MobileNumber';
        check = false;
    } else {
        document.getElementById("mobileWarning").innerText = "";
        check = true;
    }

    //email section
    let email = document.getElementById("email").value;
    if (email.length === 0) {
        document.getElementById("emailWarning").innerText = "Please enter the E-mail";
        check = false;
    } else {
        document.getElementById('emailWarning').innerText='';
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       // console.log(emailPattern.test(email));
        if(emailPattern.test(email)===true){
            document.getElementById('emailWarning').innerText='';
            check=true;
        }
        else{
            document.getElementById('emailWarning').innerText='Invalid Email';
            check=false;
        }
    }

    if (check === true) {
        bindValues();
    }
    else{
        document.getElementById('result').innerText='';
    }
}


function bindValues() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let mobileNumber = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let data = new User(name,address,mobileNumber,email);
    //tableData = '<table><tr> <td>Name:'+dataArray[i].name+'</td></tr> <tr><td>Address:'+dataArray[i].address+'</td></tr> <tr><td>Mobile Number:'+dataArray[i].mobileNumber+'</td></tr> <tr><td>Email:'+dataArray[i].email+'</td></tr> </table>'
       //tableData += "Name:" + dataArray[i].name + "<br>Address:" + dataArray[i].address + "<br>Mobile Number:" + dataArray[i].mobileNumber + "<br>Email:" + dataArray[i].email  ;
    let tableData = '<br>Name:'+data.name+'<br>Address:'+data.address+'<br>Mobile Number:'+data.mobileNumber+'<br>Email:'+data.email;
    document.getElementById("result").innerHTML = tableData;
    document.getElementById('name').value='';
    document.getElementById('address').value='';
    document.getElementById('mobile').value='';
    document.getElementById('email').value='';

}