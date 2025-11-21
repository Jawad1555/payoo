//login button
    document.getElementById('login-btn').addEventListener("click", function () {
      const mobileNumber = 1533057239;
      const pin = 2222;

      const mobileNumberValue = document.getElementById("mobile-number").value;
      const pinNumberValue = document.getElementById("pin-number").value;

      const mobileNumberValueConverted = parseInt(mobileNumberValue);
      const pinNumberValueConverted = parseInt(pinNumberValue);

      
    if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted=== pin){
window.location.href="./home.html"
    }
    else{
     alert('Invalid')
    }
    
    })