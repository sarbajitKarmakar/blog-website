const blogs = document.getElementsByClassName('blogs');
const para = document.getElementsByClassName("para");
const btn = document.getElementsByClassName("btn")[0];
let paragraph = [];

for (let i = 0; i < blogs.length; i++) {
    blogs[i].addEventListener("click", (e) => {
        for (let j = 0; j < blogs.length; j++) {
            blogs[j].classList.remove("zoom");
        }
        if (blogs[i].classList.contains("zoom")) {

            blogs[i].classList.remove("zoom");
        }else{
            blogs[i].classList.add("zoom");
        }
    });
}


for (let i = 0; i < para.length; i++) {
    const a = para[i].innerText.slice(0, 690);
    paragraph.push(para[i].innerText)
    if (para[i].innerText.length > 690) {
        para[i].innerHTML = a + `<span class="dot">.....</span>`;
    }

}

