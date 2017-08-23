export const scrollToContainer = (container) => {
  console.log('container', container);
  return {
    type: 'scroll',
    container
  };
}