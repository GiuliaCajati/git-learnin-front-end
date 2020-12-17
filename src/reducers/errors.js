
const errors = (state = [], action) => {
    switch(action.type){
        case "ERROR":
            return action.payload
    }
}

export default errors;