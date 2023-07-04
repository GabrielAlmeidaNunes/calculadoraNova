const visor = document.getElementById('visor');
let visorResultado = document.querySelector('#visorResultado');
const botoes = document.querySelectorAll('.btn');
const botaoCorrige = document.querySelector('.btnCorrige');
const botaoIgual = document.querySelector('.btnIgual');

const calculadora  =  document.getElementById('calculadora')

const tema  =  document.getElementById('modo');

tema.addEventListener('click', function(){
  const escuro=document.body.classList.toggle('modoEscuro');
  const claro=document.body.classList.toggle('modoClaro');

  if(escuro){
    tema.style.background='white';
    tema.style.color='#212529';
    calculadora.style.borderColor='white';
    tema.innerText='Tema Claro'
    

  }else{
    calculadora.style.borderColor='#212529';
    tema.innerText='Tema Escuro';
    tema.style.background='#212529';
    tema.style.color='white';

  }
})

const teclas=["(", ")", "/", "7", "8", "9", "*", "4", "5", "6","-", "1", "2", "3", "+", "0", "."];

visor.addEventListener('keydown',function(ev){
  ev.preventDefault() 
  
  if(teclas.includes(ev.key)){
    visor.value+=ev.key;
    return
  }

  if(ev.key==='Backspace'){
    visor.value = visor.value.slice(0, -1) 
  }

  if(ev.key==='Enter'){
    calculaResultado();
  }
   
})


botoes.forEach(function(botao){
  botao.addEventListener('click', function(){
    const value = botao.dataset.value; 
    visor.value+=value;
  })
})


botaoCorrige.addEventListener('click', function(){
  visor.value = '';
  visorResultado.value=''
  visor.focus();
})

botaoIgual.addEventListener('click',calculaResultado );

function calculaResultado(){
  visorResultado.value='ERROR'
  visorResultado.classList.add('erro');

  let resultado= eval(visor.value);
  visorResultado.value=resultado;
  visorResultado.classList.remove('erro')
}

const botaoCopia=document.getElementById('btnCopy');

botaoCopia.addEventListener('click',function(){
  if(botaoCopia.innerText=='Copy'){
    botaoCopia.innerText='Copiado';
    botaoCopia.classList.add('copiando');
    navigator.clipboard.writeText(visorResultado.value);
  }else{
    botaoCopia.innerText='Copy';
    botaoCopia.classList.remove('copiando');
  }
})
