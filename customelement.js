class OlgaElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Help me";
    }
}

customElements.define("x-olga", OlgaElement);

