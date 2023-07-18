

const test2 = () => {
    const href = document.createElement('a')
    href.textContent = "Ссылка на статью"
    href.href = "#"
   const ter =  document.getElementById('main')
    ter.append(href)


}
test2()