const copyToClipboard = (type, foodId, element) => {
  const url = `${window.location.origin}/${type}/${foodId}`;
  navigator.clipboard.writeText(url);
  const messageElement = document.createElement('p');
  messageElement.innerHTML = 'Link copiado!';
  element.parentNode.appendChild(messageElement);
};

export default copyToClipboard;
