import React  from 'react'
import axios from 'axios'


export const getAllCustomers1 = function(perpage , page) {
     return axios.get(`https://127.0.0.1/wordpress/wp-json/wc/v3/customers?consumer_key=${process.env.REACT_APP_CLIENT_KEY}&consumer_secret=${process.env.REACT_APP_CLIENT_SECRET}&per_page=${perpage}&page=${page}`)
    
}
