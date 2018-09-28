const knex = require('../database/knex');

const getProvince = () => {
    return knex('provinces').select().then((data) => {
        if (!data) {
            return {
                message: 'no found any province'
            };
        }
        return {
            provinces: data,
            total: data.lenght
        };
    }).catch(err => {
        return {
            message: 'something went wrong!!'
        };
    });
};

const getAmphur = (province_id) => {
    return knex('amphurs').where({
        province_id: province_id
    }).select().then(data => {
        if (!data) {
            return {
                message: 'no found any province'
            };
        }
        return {
            amphurs: data,
            total: data.lenght
        }
    }).catch(err => {
        return {
            message: 'something went wrong!!'
        }
    });
};

module.exports = {
    getAmphur,
    getProvince
};