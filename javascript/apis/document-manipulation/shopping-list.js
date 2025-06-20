const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", () =>{
    let value = input.value;
    input.value = "";
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newBtn = document.createElement("button");

    li.appendChild(span);
    li.appendChild(newBtn);

    span.textContent = value;
    newBtn.textContent = "Delete";
    ul.appendChild(li);
    focus();
});
