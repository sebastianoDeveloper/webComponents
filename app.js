import "./Componentes/product-card.js"
class MyElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow( {mode: 'open' } )
  }

  getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `
    <section>
      <h1>
        <slot name="title"></slot>
      </h1>
      <div>
        <p>
          <slot name="parrafo"></slot>
        </p>
      </div>
      <slot></slot>
    </section>
    ${this.getStyles()}
    `
    return template
  }
  getStyles() {
    return `
    <style>
    :host{
      --primary-color: green;
      --secundary-color: brown;
      --heading-primary: 30px;
      --heading-secundary: 25px;
      display: inline-block;
      width: 100%;
      min-width: 300px;
      max-width: 450px;
      }
      section{
        background: var(--primary-color);
      }
      section div{
        background: var(--secundary-color);
      }
      h1{
        font-size: var(--heading-primary);
      }
      section div{
        font-size: var(--heading-secundary);
      }
    </style>
      `
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
   }
  connectedCallback() {
    this.render()
  }
}
// *aqui definimos el componete
// *y damos de alta la etiqueta, k viene de la clase
customElements.define('my-element', MyElement)

// aqui voy aprevechar para hacer la linea de codigo  de JS k va a retirar el elemento,una vez k ya este en el nodo lo voy a borrar
