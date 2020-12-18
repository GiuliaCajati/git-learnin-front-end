

const URL = "http://localhost:3000/"


//doublecheck backend path = login 
export const login = (user) => {
    return (dispatch) => {
        fetch( URL + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                    "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(loginData => {
            if (loginData.id){
                dispatch({
                    type: "LOGIN",
                    payload: loginData
                })
            }else{
                dispatch({
                    type: "ERROR",
                    payload: loginData
                })
            }
        })
    }
}

//first draft of signup action
export const signUp = (user) => {
    return (dispatch) => {
        fetch( URL + "signup", {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                    "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json)
        .then(signUpData => {
            if (signUpData.id){
                dispatch({
                    type: "SIGNUP",
                    payload: signUpData
                })
            }else{
                dispatch({
                    type: "ERROR",
                    payload: signUpData
                })
            }
        })
    }
}
