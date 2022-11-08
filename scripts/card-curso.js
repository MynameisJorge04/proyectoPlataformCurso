//A travez de atributos
class myElement extends HTMLElement {
    constructor() {
      super();
      //Asi podmeos ocupar el shadowDOM
      this.attachShadow({mode : "open"});
    }

    static get observedAttributes(){
      return ["title", "parrafo","discontprice",'oldprice','priceactual','img','imagencarrito'];
    }
  
    //le asignamos a la variable title que obtenemos desde el observador de
    //nuestro componente un nuevo valor 
  
    attributeChangedCallback(attr, oldVal, newVal){
  
      //Podemos hacer mas eficiente a travez de esta funcion
      if (oldVal !== newVal) {
        this[attr] = newVal
      }
  
    }
  
    getTemplate(){
      const template = document.createElement('template');
      //Ocupando atributos no con slots
      template.innerHTML = `
      <div class="card--curso">
        <div class="card--curso--top">
            <a href="./error.html"><img src="${this.img}" alt="Iamgen curso1"></a>
            <div class="card--curso--body">
                <h2>${this.title}</h2>
                <p>${this.parrafo}</p>
            </div>
        </div>

        <div class="card--curso--bottom">
            <div class="precio--descuento--curso">
                <div class="price_descount">
                    <span>${this.discontprice}</span>
                </div>

                <div class="price_old">
                    <span>${this.oldprice}</span>
                </div>
            </div>

            <div class="compra_button_cursos">
                <form class="form_compra_cursos">
                    <button class="compra_curso_carrito_button">
                        <span><img src="${this.imagencarrito}" alt="carrito"></span>
                        <span>
                        Comprar
                        </span>
                        <span>
                        ${this.priceactual}
                        </span>
                    </button>
                </form>
            </div>

        </div>

    </div>
        ${this.getStyles()}
      `;
  
      //Podemos returnar a travez de buenas practicas
      return template;
    }
  
    getStyles(){
      return `
        <style>
        .card--curso{
            width: 100%;
            background-color: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            height: auto;
            margin-bottom: 1em;
          }
          
          .card--curso--top img{
            width: 100%;
            height: auto;
          }
          
          .card--curso--top:hover img{
              filter: grayscale(100%);
              transition: .3s ease-in-out;
          }
          
          .card--curso--body{
            padding: 1em;
          }
          
          .card--curso--body h2 {
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 2.6rem;
            color: #201E1C;
          }
          
          .card--curso--body p {
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: #757575;
            margin-top: 0.5em;
          }
          
          .card--curso--bottom{
            padding: 0 1em 1em 1em;
          }
          
          .precio--descuento--curso{
            display: flex;
          }
          
          .precio--descuento--curso span {
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 1.8rem;
            color: #028090;
          }
          
          .price_old{
            margin-left: 0.5em;
          }
          
          /*Boton de compra -- Seccion curso -- Pagina home*/
          
          .compra_button_cursos{
            display: flex;
            flex-grow: 1;
            border: none;
            margin: 0 1.2rem;
            height: 4.8rem;
            background-color: #028090;
            margin-top: 0.7em;
          }

          .compra_button_cursos:hover{
            background-color: #05668D;
          }
          
          .form_compra_cursos{
            display: flex;
            align-items: center;
            padding: 0 2.4rem 0 0;
            justify-content: center;
            margin-left: calc(50% - 8.3em);
          }
          
          .compra_curso_carrito_button{
            display: flex;
            border: none;
            background-color: transparent;
            align-items: center;
          }
          
          .compra_curso_carrito_button span{
            
            padding-left: 0.5em;
            color: #ffffff;
          }
          
          
          /*Cursos posibles imagenes -- Seccion imegenes curso -- Pagina home*/
          
          
          .imagenes--cursos--container--general{
              width: 100%;
              align-self: center;
              max-width: 90em;
              text-align: center;
          }
          
          .cursos--diferentes h2{
              font-size: 2.8rem;
              font-weight: 600;
              line-height: 3.4rem;
              color: #201E1C;
              padding-top: 0.5em;
          }
          
          .container--images--cursos{
              padding: 4em;
              display: flex;
              flex-wrap: wrap;
          }
          
          .imagen--cursos{
              padding: 0.5em;
              width: 25%;
              justify-content: center;
              align-self: center;
              
          }
          
          .imagen--cursos img{
              width: 70%;
              height: auto;
          }

          .minatura{
            background-color: white;
          
            position: absolute;
            max-height: 10em;
            max-width: 10em;
          }
        
          .minatura img{
            padding: 0.5em;
            height: 10vh;
            border: solid 3px;
          }

          @media (min-width: 600px) {

            /*Bloque de academia*/
        
            .card--curso {
              width: 100%;
            }
        
        }

        


       </style>
      `;
  
    }

    //Por buenas practicas debemos tener tarea para cada circunstancia 
    render(){
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));

    }
  
    connectedCallback() {
      this.render();
    }




  }
  
  //De esta forma costumizamos nuestro elemento
  customElements.define("card-curso", myElement);

  