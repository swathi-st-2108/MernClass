document.addEventListener("DOMContentLoaded", ()=>  {
    const loginsection=document.getElementById("loginsection");
    const crudsection=document.getElementById("crudsection");
    const loginform=document.getElementById("loginform");
    const logoutbtn=document.getElementById("logoutbtn");
    const studentform=document.getElementById("studentform");
    const studentlist=document.getElementById("studentlist");

    const studentname=document.getElementById("studentname");
    const rollno=document.getElementById("rollno");
    const department=document.getElementById("department");
    const cgpa=document.getElementById("cgpa");
    const gender=document.getElementById("gender");

    function checkLogin() {
        if(sessionStorage.getItem("loggedInuser") === "true") {
            loginsection.style.display = "none";
            crudsection.style.display = "block";
            
        }
    }



})