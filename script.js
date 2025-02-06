document.getElementById("registrationForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            let isValid = true;

            // Get form values
            let fname = document.getElementById("fname").value.trim();
            let lname = document.getElementById("lname").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let phone = document.getElementById("phone").value.trim();

            // Clear previous error messages
            document.getElementById("fnameError").innerText = "";
            document.getElementById("lnameError").innerText = "";
            document.getElementById("emailError").innerText = "";
            document.getElementById("passwordError").innerText = "";
            document.getElementById("phoneError").innerText = "";
            document.getElementById("successMessage").style.display = "none"; // Hide success message

            // Validate First Name
            if (fname === "") {
                document.getElementById("fnameError").innerText = "First name is required";
                isValid = false;
            }

            // Validate Last Name
            if (lname === "") {
                document.getElementById("lnameError").innerText = "Last name is required";
                isValid = false;
            }

            // Validate Email
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").innerText = "Enter a valid email";
                isValid = false;
            }

            // Validate Password (min 6 characters)
            if (password.length < 6) {
                document.getElementById("passwordError").innerText = "Password must be at least 6 characters long";
                isValid = false;
            }

            // Validate Phone (exactly 10 digits)
            let phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
                isValid = false;
            }

            // If all fields are valid, show success message
            if (isValid) {
                document.getElementById("successMessage").style.display = "block"; // Show success message
                document.getElementById("registrationForm").reset(); // Reset form
                
                setTimeout(() => {
                    document.getElementById("successMessage").style.display = "none";
                }, 3000);
            }
        });