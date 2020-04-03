function Customer(name, address, number)
{
    this.name = name;
    this.address = address;
    this.number = number;
}
function display(){
    let name = document.getElementById('name').value;
    document.getElementById('name').value='';
    let address = document.getElementById('address').value;
    document.getElementById('address').value='';
    let number = document.getElementById('number').value;
    document.getElementById('number').value='';
    let data = new Customer(name,address,number);
    document.getElementById('result').innerHTML='Name :' + data.name +'<br> Address :'+data.address+'<br> Phone Number :'+data.number;

}