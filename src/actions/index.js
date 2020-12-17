

const URL = "http://localhost:3000/"


//doublecheck backend path = login 
const login = (user) => {
    return (dispatch) => {
        fetch( URL + "login", {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                    "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json)
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
export default login;