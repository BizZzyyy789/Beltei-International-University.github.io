function downloadPDF() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("number").value;
    var city = document.getElementById("nation").value;
    var state = document.getElementById("pass").value;
    var age = document.getElementById("age").value;
    var doc = new jsPDF();
    doc.text(20, 20, "Name: " + name);
    doc.text(20, 30, "Email: " + email);
    doc.text(20, 40, "Phone: " + phone);
    doc.text(20, 50, "City: " + city);
    doc.text(20, 60, "State: " + state);
    doc.text(20, 80, "State: " + age);
    doc.save("form.pdf");
 } 
 window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) || 
        (e.ctrlKey && e.keyCode == 85)) { 
        e.preventDefault();
    }
});
