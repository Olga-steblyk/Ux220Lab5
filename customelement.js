class OlgaElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "That's me in the corner";
    }
}

customElements.define("x-olga", OlgaElement);

class CenterElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}
customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML=new Date().getFullYear();

    }
}
customElements.define("x-fullyear", YearElement);