const axios = require('axios');
const TOKEN = '7250034737:AAH5COB4hoWn2PD1nmsO48L6BauCQabdAzA';
const URL = `https://api.telegram.org/bot${TOKEN}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            try {
                return axios.get(`/${method}`, {
                    baseURL: URL,
                    params,
                });
            } catch (err) {
                console.log(`Error: ${err}`);
            }
        },

        post(method, data) {
            try {
                return axios({
                    method: 'post',
                    url: `/${method}`,
                    data,
                    baseURL: URL
                });
            } catch (err) {
                console.log(`Error: ${err}`);
            }

        }
    }

}
module.exports = { axiosInstance: getAxiosInstance() };