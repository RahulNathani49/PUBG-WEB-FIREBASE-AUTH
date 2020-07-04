var signupForm = document.getElementById("signup-form ");


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // GET USER INFO
    const email = document.getElementById("signup-email ").value;
    const chid = document.getElementById("signup-chid ").value;
    const password = document.getElementById("signup-password ").value;

    // SIGNUP WITH USER
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        const modal = document.getElementById('modal-signup ');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });

});


const logout = document.getElementById("logout ");
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("LOGGED OUT!");
    });
});


const loginForm = document.getElementById("login-form ");
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email ").value;
    const password = document.getElementById("login-password ").value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const modal = document.getElementById('modal-login ');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
});