const { getProvince, getAmphur } = require('./model');

module.exports = (server) => {
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: () => {
                return '<h1>Welcome to Thailand Province and Amphur Service</h>'
            }
        },
        {
            method: 'GET',
            path: '/province',
            handler: () => {
                return getProvince();
            }
        },
        {
            method: 'GET',
            path: '/amphur/{province_id}',
            handler: (request) => {
                const { province_id } = request.params
                return getAmphur(province_id);
            }
        }
    ]);
};