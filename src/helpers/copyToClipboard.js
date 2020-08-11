const copyToClipboard = (type, foodId) => {
  const url = `${window.location.origin}/${type}/${foodId}`;
  navigator.clipboard.writeText(url);
  alert('Link copiado!');
};

export default copyToClipboard;
