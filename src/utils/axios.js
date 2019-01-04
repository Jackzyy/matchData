import axios from 'axios'

var instance = axios.create({
    // baseURL:process.env.NODE_ENV === 'development' ? '/api' : '/',
    // baseURL:'https://www.easy-mock.com/mock/5c1760cb55d50372367852cd/zhangyu',
    baseURL:'',
    timeout: 15000
});

const fetch = {
    get(url,data,config){
        return new Promise((resolve, reject) => {
            instance.get(url, {params:data}, config).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        });
    },
    
    post(url,data,config){
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        });
    },
}

export default fetch