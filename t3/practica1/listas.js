"use strict";

let book = { 
    ISBN: 978-84-9804-654-0, 
    title: "El Quijote", 
    author: "Miguel de Cervantes", 
    publicationDate: new Date(1605, 0, 1), 
    price: 20, 
  }

  let a={}


const LIMITE = 10;

function create(){
    return [];
  }

/**
 * 
 * nos encontramos con el dilema de que el elemento book es un objeto
 * pero tenemos que comprobar que lista sea un array vacio, por lo que 
 * para evitar problemas usaremos una comprobacion de tipo de dato
 */
function isEmpty(list){
  if(Array.isArray(list)){
    return list.length === 0;
  }else{
    return Object.keys(list).length === 0;
  }

  //en caso de que este vacio retorna true
}

function isFull(list){
  return list.length === LIMITE;
  //en caso de lleno retorna true
}

function size(list){
  return list.length;
}

function add(list, elem){
  list.push(elem);
  return size(list)
}

function addAt(list, elem, index){
  list.splice(index,0, elem);
  return size(list)
}

function get(list, index){
  return list[index];
}

function test(){
  const lista = create();
  console.log(lista);
  console.log(isEmpty(lista));

  //llenemos la lista
  lista.forEach(llave =>{
    add(lista, book);
    return size(lista);
  })


  console.log(lista);
  console.log(isFull(lista));
  console.log(size(create()));  
  console.log(add(create(), book));
  console.log(addAt(create(), book, 3));
  console.log();
}

test();