// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};




export function filtrarVivo(data,tipo){
  let resultado = data.filter(unpersonaje=>unpersonaje.status==tipo)
  return resultado
}
