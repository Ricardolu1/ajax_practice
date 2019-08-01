function success(responseText) {
  console.log(responseText)
}
function fail(request) {
  console.log(request)
}

myButton.addEventListener('click',function() {
  $.ajax({
    url:'/xx',
    type:'get'
  }).then(
    (responseText)=> {
      console.log(responseText)
      return 'll'
    },
    (request)=> {
      console.log(request)
      return '12'
    }     
  ).then(
    (n)=>{console.log(n)},
    (x)=>{console.log('error2')}
  )
})
 


  








































































































// window.jQuery.ajax=function(options) {
//   let url=options.url
//   let method=options.method
//   let headers =options.headers
//   let body =options.body
//   let successFn=options.successFn
//   let failFn =options.failFn  
//   //我直接用变量先把对象里的东西拿出来，到时候写的时候就不用点了
//   let request=new XMLHttpRequest()
//   request.open(method,url)
//   for(let key in headers){
//     let value =headers[key]
//     request.setRequestHeader(key,value)
//   }
//   request.onreadystatechange=()=>{
//     if (request.readyState===4) {
//       if (request.status>=200&&request.status<300) {
//         successFn.call(undefined,request.responseText)
//       }else if(request.status>=400){
//         failFn.call(undefined,request)
//       }
//     }
//   }
//   request.send(body)
// }



















// myButton.addEventListener('click',function() {
//   let request = new XMLHttpRequest
//   request.open('post','/xxx')
//   request.setRequestHeader('frank','15')
//   request.send('我偏要设置request第四部分')
//   request.onreadystatechange=function() {
//     if (request.readyState===4) {
//       console.log('请求响应完毕')
//       console.log(request.status)
//       console.log(request.statusText)//可以获取到ok
//       if (request.status>=200&&request.status<300) {
//         console.log('请求成功了')
//         console.log(request.getResponseHeader('Content-Type'))
//         console.log(request.responseText)
//         let string=request.responseText
//         let object=window.JSON.parse(string)
//       }else if (request.status>=400) {
//         console.log('请求失败了')
//       }
//     }
//   }
// })

// let script=document.createElement('script')
// document.body.appendChild('script')

// alert('1')