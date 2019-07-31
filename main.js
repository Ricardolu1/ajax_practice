myButton.addEventListener('click',function() {
  let request = new XMLHttpRequest
  request.open('post','/xxx')
  request.setRequestHeader('frank','15')
  request.send('我偏要设置request第四部分')
  request.onreadystatechange=function() {
    if (request.readyState===4) {
      console.log('请求响应完毕')
      console.log(request.status)
      console.log(request.statusText)//可以获取到ok
      if (request.status>=200&&request.status<300) {
        console.log('请求成功了')
        console.log(request.getResponseHeader('Content-Type'))
        console.log(request.responseText)
        let string=request.responseText
        let object=window.JSON.parse(string)
      }else if (request.status>=400) {
        console.log('请求失败了')
      }
    }
  }
})

let script=document.createElement('script')
document.body.appendChild('script')

alert('1')