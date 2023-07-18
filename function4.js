const test4 = (text)=>{
    const list = document.getElementById("list")
    const tex = document.createElement("p")
    const li = document.createElement("li")
    tex.textContent = text
    list.append(li)
    li.append(tex)
}
test4('Muslim')