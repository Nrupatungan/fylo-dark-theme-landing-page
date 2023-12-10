const form = document.querySelector('form');
const email = document.querySelector('#email');
const submit_btn = document.querySelector('#submit');
const body = document.body;

//Events
window.addEventListener('load', () => {
    email.value = "";
})

form.addEventListener('submit', e => {

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!emailRegex.test(email.value)) {
        e.preventDefault();
        show_alert();
        console.log('Invalid email');
        return false;
    }

    console.log('Form is valid');
    return true;
})

email.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "Backspace":
        // Do something for "backspace" key press.
        remove_alert();
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true,
)

email.addEventListener('focus', e => {
    e.preventDefault();
    remove_alert();
})

// Helper functions
const show_alert = () => {
    const div = document.createElement('div');
    div.append("Please provide a valid email address");
    
    if(body.scrollWidth < 768){
        div.className = "alert text-xs text-start ps-8 text-Light_Red font-Raleway font-bold mb-5";
        email.classList.replace('mb-6', 'mb-1');
        email.after(div);
    }else{
        div.className = "alert text-xs text-start ps-8 text-Light_Red font-Raleway font-bold";
        form.classList.add('mb-1');
        form.after(div);
    }
    
    submit_btn.disabled = true;
    submit_btn.classList.replace('cursor-pointer', 'cursor-not-allowed');
}

const remove_alert = () => {
    if(form.scrollWidth < 768){
        email.classList.replace('mb-1', 'mb-6');
    }else{
        form.classList.remove('mb-1');
    }

    document.querySelector('.alert').remove();
    submit_btn.disabled = false;
    submit_btn.classList.replace('cursor-not-allowed', 'cursor-pointer');
}