export const login = async(user)=>{
  console.log(user)
    var response =  await fetch('http://localhost:3000/api/auth/login',{
      method : 'POST',
      headers:{
        'content-type':'application/json' 
      },
      body:JSON.stringify({
        'username': user.username,
        'password' : user.password
      })
    })
    var data = await response.json()
    return data
    
  }