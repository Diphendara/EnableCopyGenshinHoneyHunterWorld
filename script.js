// Enable selection in all the web
let style = document.createElement('style')
style.innerHTML = '*{ user-select: auto !important }'
document.body.appendChild(style)