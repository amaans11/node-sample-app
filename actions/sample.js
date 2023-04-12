import db from '../database/connection.js';
import shopifyAxios from '../api/shopify.js';

export default async () => {

    // Select records from database
    db.query(
        'SELECT * FROM fulfillment_history WHERE id = ?',
        [2],
        function (error, data) {
            if(error) throw error;
            console.log('Database selection:', data);
        }
    );

    // Send request to Shopify api
    try {

        const orderId = '4079354216611';

        const response = await shopifyAxios.get(`/orders/${orderId}/fulfillments.json`);

        console.log('Shopify fulfilments:', response.data);

    } catch (error) {
        console.log(error);
    }

};
