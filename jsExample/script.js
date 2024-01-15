const content = [
    {title: 'HTML', text: 'Учи HTML и всё будет хорошо'},
    {title: 'CSS', text: 'Учи CSS и всё будет хорошо'},
    {title: 'JavaScript', text: 'Учи JavaScript и всё будет ещё лучше'}
]

const container = document.querySelector("ul")

function toHTML(item) {
    return `
    <li>
        <h3>${item.title}</h3>
        <div class="content">${item.text}</div>
    </li>
    `
}

function renderContent() {
    const html = content.map(toHTML).join('')
    container.insertAdjacentHTML('afterbegin', html)
}
renderContent()
// ======

function removeActiveClasses() {
    container
        .querySelectorAll('li')
        .forEach((li) => li.classList.remove('active'))
}

container.addEventListener('click', e => {
    if(
        e.target.tagName.toLowerCase() === 'li' || 
        e.target.closest('li')?.tagName.toLowerCase() === 'li'
    ) {
        removeActiveClasses()
        e.target.closest('li').classList.add('active')
    }
})