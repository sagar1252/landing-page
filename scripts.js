function validateInput()
{
    const firstName = document.getElementById("firstName").value;
   const lastName=document.getElementById("lastName").value;
   const CompanyName=document.getElementById("CompanyName").value;
   const phoneNumber=document.getElementById("phoneNumber").value;
   const phonePattern = /^[0-9]{10}$/;
   const email=document.getElementById("business_email").value;
   const job_dropdown = document.getElementById("Title").value;
   const companysize=document.getElementById("companysize").value;
   const industry=document.getElementById("industry").value;
 const department=document.getElementById("department").value;
 const state=document.getElementById("state").value;
 const zip=document.getElementById("zip").value;
const country=document.getElementById("country").value;
const terms=document.getElementById("terms").value;

   let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Pattern for valid email

   if (firstName===""){
    document.getElementById("firstNameError").innerHTML="Eneter First name";
       // return false;
    }
     if (lastName===""){
        document.getElementById("lastNameError").innerHTML="Enter Last Name";
    }
    if(CompanyName===""){
        document.getElementById("Company_Name").innerHTML="Company name";
    }
    if(phoneNumber==="") {
        document.getElementById("phoneNumberError").innerHTML = "Enter Phone Number";
    }else if (!phonePattern.test(phoneNumber)) {
        document.getElementById("phoneNumberError").innerHTML = "Enter a valid 10-digit phone number";
    }
    if(email===""){
        document.getElementById("email_error").innerHTML="enter email-ID";
    }else if (!emailPattern.test(email)) {
        document.getElementById("email_error").innerHTML = "Incorrect mail id";
    }
    if(job_dropdown===""){
        document.getElementById("dropdownError").innerHTML="Select Job ";
    }
    if(companysize===""){
        document.getElementById("companysizeError").innerHTML="Select company size";
    }
    if(industry===""){
        document.getElementById("industryError").innerHTML="Select industry";
    }
    if(department===""){
        document.getElementById("departmentError").innerHTML="Select department";
    }
    if(state===""){
        document.getElementById("stateError").innerHTML="Select state";
    }
    if(zip===""){
        document.getElementById("zipError").innerHTML="select zip code";
    }
    if(country===""){
        document.getElementById("countryError").innerHTML="Select Country";
    }
    if(terms===""){
        document.getElementById("termsError").innerHTML="Select checkbox";
    }
}

