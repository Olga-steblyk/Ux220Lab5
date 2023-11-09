class OlgaElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "That's me in the corner";
    }
}

customElements.define("x-olga", OlgaElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.htmlHTML =`<div style="text-align:center>${this.HTML}</div>`;
    }
}
customElements.define("x-center", CenterElement);