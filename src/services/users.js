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

  export const register = async(user)=>{
    console.log(user)
    var response =  await fetch('http://localhost:3000/api/auth/register',{
      method : 'POST',
      headers:{
        'content-type':'application/json' 
      },
      body:JSON.stringify({
        'username': user.username,
         'email' : user.email,
        'password' : user.password,
        'id_role':2
      })
    })
    var data = await response.json()
    return data
  }

  export const restorePass = async(user)=>{

    var response =  await fetch('http://localhost:3000/api/auth/restore',{
      method : 'POST',
      headers:{
        'content-type':'application/json' 
      },
      body:JSON.stringify({
        'username': user.username,
         'email' : user.email
       
      })
    })
    var data = await response.json()
    return data

  }

  export const changePass = async(user)=>{
    var response =  await fetch('http://localhost:3000/api/auth/change',{
      method : 'POST',
      headers:{
        'content-type':'application/json' 
      },
      body:JSON.stringify({
        'username': user.username,
         'password' : user.password,
         'compare' : user.confPass,
         'code' : user.code
       
      })
    })
    var data = await response.json()
    return data
  }

  export const testSecure = async(token)=>{

    const response =  await fetch('http://localhost:3000/api/auth/',{
      method : 'GET',
      headers:{
        'content-type':'application/json', 
        'authorization' : token
      }

    })
    const data = await response.json()
    return data
  }