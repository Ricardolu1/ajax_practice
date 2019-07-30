myButton.addEventListener('click',function() {
  let request = new XMLHttpRequest
  request.open('GET','http://jack.com:8002/xxx')
  request.send()
  request.onreadystatechange=function() {
    if (request.readyState===4) {
      console.log('请求响应完毕')
      console.log(request.status)
      if (request.status>=200&&request.status<300) {
        console.log('请求成功了')
        console.log(request.responseText)
        let string=request.responseText
        let object=window.JSON.parse(string)
        console.log(object)
      }else if (request.status>=400) {
        console.log('请求失败了')
      }
    }
  }
})
