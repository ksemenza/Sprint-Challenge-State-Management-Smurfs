import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const POST_SMURFS_START = 'POST_SMURFS_START'
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS'
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE'

export const DELETE_SMURFS_START = 'DELETE_SMURFS_START'
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS'
export const DELETE_SMURFS_FAILURE = 'DELETE_SMURFS_FAILURE'

export const EDIT_SMURFS_START = 'EDIT_SMURFS_START'
export const EDIT_SMURFS_SUCCESS = 'EDIT_SMURFS_SUCCESS'
export const EDIT_SMURFS_FAILURE = 'EDIT_SMURFS_FAILURE'

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({type:FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error(err); 
        dispatch({type: FETCH_SMURFS_FAILURE, payload: err.res})
    })
}

export const addSmurf = (body) => dispatch => {
    dispatch({type:POST_SMURFS_START})
    axios.post('http://localhost:3333/smurfs', body)
    .then(res => {
        console.log(res)
        dispatch({type:POST_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error(err); 
        dispatch({type:POST_SMURFS_FAILURE, payload: err.res})
    })
}

export const deleteSmurf = body => dispatch => {
dispatch({type:DELETE_SMURFS_START})
axios.delete(`http:localhost:3333/smurfs${body}`)
.then(res => {
    console.log(res)
    dispatch({type: DELETE_SMURFS_SUCCESS, payload: res.data})
})
.catch(err => {
    console.error(err); 
    dispatch({type:DELETE_SMURFS_FAILURE, payload: err.res})
})
}

export const editSmurf = body => dispatch => {
    dispatch({type: EDIT_SMURFS_START})
    axios.put(`http://localhost:3333/smurfs${body.id}`, body)
    .then(res => {
        console.log(res)
        dispatch({type:EDIT_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error(err); 
        dispatch({type:EDIT_SMURFS_FAILURE, payload: err.res})
    })
}