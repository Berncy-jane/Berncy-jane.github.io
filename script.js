const accordionItems = document.querySelectorAll(".contentbox");

accordionItems.forEach(item => {
    item.addEventListener("click", function() {
        if(!item.classList.contains('active')){
            closeAccordions()
        }
        this.classList.toggle('active');
    });
});
function closeAccordions(){
    accordionItems.forEach((item) =>{
        item.classList.remove( 'active') 
    })
}
function validateForm(event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var error = document.getElementById("error");

    if (username === "your_username" && password === "your_password") {
      alert("Login successful!");
    } else {
      error.style.display = "block";
      error.innerHTML = "Invalid username or password";
    }
  }

  function signup(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var error = document.getElementById("error");

    if (password !== confirmPassword) {
      error.style.display = "block";
      error.innerHTML = "Passwords do not match";
    } else {
      alert("Signup successful for user: " + username);
    }
  }

  function toggleForms() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var formTitle = document.getElementById("formTitle");

    if (loginForm.style.display === "block") {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      formTitle.innerText = "Sign Up";
    } else {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      formTitle.innerText = "Login";
    }
  }
  function submitForm(event) {
    event.preventDefault();
    alert("Your order has been placed!");
  }