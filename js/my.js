function convertMoney() {
    let money = document.getElementById('input').value;
    let to = document.getElementById('to').value;
    let from = document.getElementById('from').value;
    result = money * to / from;
    document.getElementById('result').innerHTML = result;

}




