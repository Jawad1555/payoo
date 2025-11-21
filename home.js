const validPin = 2222
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const ammount = parseInt(document.getElementById('add-ammount').value)
    const pin = parseInt(document.getElementById('add-pin').value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    if (accountNumber.length < 11) {
        alert('plss probide valid number')
        return;
    }
    if (pin != validPin) {
        alert('plss provide valid pin number')
        return;
    }


    const totalNewAvailableBalance = availableBalance + ammount
    document.getElementById('available-balance').innerText = totalNewAvailableBalance
}
)


//cashout money feature

document.getElementById("withdraw-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const agentAmmount = parseInt(document.getElementById("agent-amount").value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const agentNumber = document.getElementById("agent-number").value
    const Pin = document.getElementById("agent-pin").value
    if(agentNumber.length < 11){
        alert('plss provide valid pin number')
        return;
    }
       if (Pin != validPin) {
        alert('plss provide valid pin number')
        return;
    }
    const totalNewAvailableBalance = availableBalance - agentAmmount

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})















//toggling feature

document.getElementById("add-money-click").addEventListener("click",
    function () {
        document.getElementById("cash-out-parent").style.display = "none"
        document.getElementById("add-money-parent").style.display = "block"
    }

)
document.getElementById("cashout-click").addEventListener("click",
    function () {
        document.getElementById("add-money-parent").style.display = "none"
        document.getElementById("cash-out-parent").style.display = "block"
    }
)