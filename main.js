myButton.addEventListener('click',function() {
  let request = new XMLHttpRequest
  request.open('GET','/xxx')
  request.send()
  setInterval(() => {
  console.log(request.readyState)
  }, 1);
})
