function tampil() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    document.getElementById("thanks").innerHTML="<b>Thank for your response. Your data recorded as :</b>"
    document.getElementById("hello").innerHTML="Hello, my name is " + "<b>" + name + "</b>"
    document.getElementById("contact").innerHTML="Please contact me through : " + "<b>" + email + "</b>"
    document.getElementById("messages").innerHTML="I want to say about : " + "<br>" + "<b>" + message + "</b>"
}

function calculate() {
    var bottle = parseInt(document.getElementById("botol").value)
    var straw = parseInt(document.getElementById("sedotan").value)
    var putung = parseInt(document.getElementById("rokok").value)
    var day = 365
    var hasil = (bottle + straw + putung) * day
    document.getElementById("hasil").innerHTML="Total sampah plastik per tahun " + "<b>" + hasil + "</b>"
}