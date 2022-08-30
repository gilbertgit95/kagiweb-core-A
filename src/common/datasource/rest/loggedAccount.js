import Rest from './baseConnection'

const getAccountInfo = async () => {
    return await Rest({
        method: 'GET',
        url: '/api/v1/loggedAccount'
    })
}

const updateCredential = async (data) => {
    return await Rest({
        method: 'POST',
        url: '/api/v1/loggedAccount/credential',
        data: data
    })
}


export default {
    getAccountInfo,
    updateCredential
}
