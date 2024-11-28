let text = 'Thruxuri Twitch';
let h2 = document.getElementById('Thruxuri Twitch');

text.split('').forEach((char,index) => {
    let span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0\u00A0' : char;
    span.style.transitionDelay = `${(index % 10) * 0.1}s`
    h2.appendChild(span);
})
