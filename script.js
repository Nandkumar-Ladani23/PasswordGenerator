const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+[]{}|;:,.<>?/~`-='
};

const options = {
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false
};

//DOM Elements
const passwordText = document.getElementById('passwordText');
const generateButton = document.getElementById('generateBtn');
const copyButton = document.getElementById('copyBtn');
const regenerateButton = document.getElementById('regenerateBtn');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');
const notification = document.getElementById('notification');

const checkboxes = {
    uppercase: document.getElementById('uppercaseCheck'),
    lowercase: document.getElementById('lowercaseCheck'),
    numbers: document.getElementById('numbersCheck'),
    symbols: document.getElementById('symbolsCheck')
};

function getRandomChar(charset){
    return charset.charAt(Math.floor(Math.random() * charset.length));
}

function shuffleString(str){
    const arr = str.split('');
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}
function updateLengthDisplay() {
    lengthValue.textContent = options.length;
}

function toggleOption(){
    const checkCount = Object.values(options).filter((value, index) => index > 0 && value === true).length;
    if(checkCount === 1 && options[Option] === true){
        showNotification('At least one Character type must be selected.', 'error');
        return
    }
    options[Option] = !options[Option];
    checkboxes[Option].classList.toggle('checked');
}


function generatePassword() {
    let charsets = '';
    if (options.uppercase) charsets += (characters.uppercase);
    if (options.lowercase) charsets += (characters.lowercase);
    if (options.numbers) charsets += (characters.numbers);
    if (options.symbols) charsets += (characters.symbols);

    if (charsets.length === 0) {
        showNotification('At least one character type must be selected.', 'error');
        return;
    }

    let password = '';
    if(options.uppercase) password += getRandomChar(characters.uppercase);
    if(options.lowercase) password += getRandomChar(characters.lowercase);
    if(options.numbers) password += getRandomChar(characters.numbers);
    if(options.symbols) password += getRandomChar(characters.symbols);
    for (let i = password.length; i < options.length; i++) {
        password += getRandomChar(charsets);
    }

    password = shuffleString(password);
    passwordText.textContent = password;
    passwordText.classList.add('fade-in')
    setTimeout(() => {
        passwordText.classList.remove('fade-in')
    }, 500);
    calculateStrength(password);
}

function calculateStrength(password){
    let score = 0;
    let feedback = '';

    if (password.length >= 12) {
        score += 25;
    }
    else if(password.length >= 8){
        score += 15;
    }else if(password.length >= 4){
        score += 10;
    }else{
        score += 5;
    }
    if(/[A-Z]/.test(password)) score += 15;
    if(/[a-z]/.test(password)) score += 15;
    if(/[0-9]/.test(password)) score += 15;
    if(/[!@#$%^&*()_+[\]{}|;:,.<>?/~`-]/.test(password)) score += 20;

    if(password.length > 16 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+[\]{}|;:,.<>?/~`-]/.test(password)){
        score += 10;
    }
    let strengthClass = '';
    if(score < 40){
        strengthClass = 'weak';
        feedback = 'weak';
    }else if(score < 60){
        strengthClass = 'fair';
        feedback = 'fair';
    }else if(score < 80){
        strengthClass = 'good';
        feedback = 'good';
    }else{
        strengthClass = 'strong';
        feedback = 'strong';
    }
    strengthFill.className = `strength-fill ${strengthClass}`;
    strengthText.textContent = feedback;

}
async function copyPassword() {
    const password = passwordText.textContent;
    if(password === 'Click "Generate" to create a password'){
        showNotification('Generate a password first.', 'error');
        return;
    }

    try {
        await navigator.clipboard.writeText(password);
        showNotification('Password copied to clipboard!', 'success');
    } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = password;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Password copied to clipboard!', 'success');
    }
}

function showNotification(message, type = 'success'){
    notification.textContent = message;
    notification.style.backgroundColor = type === 'error' ? 'red' : 'green';
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

generateButton.addEventListener('click', generatePassword);
regenerateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);


lengthSlider.addEventListener('input', (e) => {
    options.length = parseInt(e.target.value);
    updateLengthDisplay();
    generatePassword();
});

document.querySelectorAll('.checkbox-item').forEach(item => {
    item.addEventListener('click', () => {
        const option = item.dataset.option;
        toggleOption(option);
        generatePassword();
    });
});