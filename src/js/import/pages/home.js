const button = document.getElementById("form_button");
const email = document.getElementById("email");

/* eslint-disable */   
const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true);
    }

    return (false);
};

email.addEventListener("input", (event) => {

    if(validateEmail(event.target.value)) {
        button.removeAttribute("disabled", "disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    }

});

const testData = (event) => {
    event.preventDefault();

    const modal = document.querySelector(".modal");
    const modalTextOk = document.querySelector(".modal__text--ok");
    const modalTextBad = document.querySelector(".modal__text--bad");

    const form = document.getElementById("form");
  
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").checked;
    const question = document.getElementById("question").value;

    const type = company ? "company" : "person";

    const formData = {
        name,
        email: email.value,
        type,
        question
    };
    
 
        grecaptcha.execute('6Lf5jucUAAAAAD_bT8igqkBBV4N5T3sPk-RUVYmn', {action: "recaptcha"})
            .then((token) => {
                fetch("https://www.k109.ru/send-email",{
                    method: 'POST',
                    headers:{
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'     
                    },
                    body: JSON.stringify({
                        ...formData,
                        token
                    })
                })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    if(data.success) {
                        document.getElementById("ok").innerHTML = "";
                        document.getElementById("ok").appendChild(document.createTextNode(data.msg));
                        modal.setAttribute("style", "display:flex");
                        modalTextOk.setAttribute("style", "display:block");
                        form.reset();
                        setTimeout(() => {
                            modal.setAttribute("style", "display:none");
                            modalTextOk.setAttribute("style", "display:none");
                        }, 2000);
                    } else {
                        document.getElementById("bad").innerHTML = "";
                        document.getElementById("bad").appendChild(document.createTextNode(data.msg));
                        modal.setAttribute("style", "display:flex");
                        modalTextBad.setAttribute("style", "display:block");
                        
                        setTimeout(() => {
                            modal.setAttribute("style", "display:none");
                            modalTextBad.setAttribute("style", "display:none");
                        }, 5000);
                    }
                })
                .catch(() => {
                    document.getElementById("bad").innerHTML = "";
                    document.getElementById("bad").appendChild(document.createTextNode(" The message was not delivered, something went wrong"));
                    modal.setAttribute("style", "display:flex");
                    modalTextBad.setAttribute("style", "display:block");
            
                    setTimeout(() => {
                        modal.setAttribute("style", "display:none");
                        modalTextBad.setAttribute("style", "display:none");
                    }, 5000);
                });
                return false;
            });
    
};

/* eslint-enable */

document.getElementById("form").addEventListener("submit", testData);