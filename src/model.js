const knex = require('../knex');

exports.getProvince = () => {
    return knex('provinces').select().then((data) => {
        if (!data) {
            return {
                message: 'no found any province'
            }
        }
        return {
            provinces: data,
            total: data.lenght
        }
    }).catch(err => {
        return {
            message: 'something went wrong!!'
        }
    })
}

exports.getAmphur = (province_id) => {
    return knex('amphurs').where({
        province_id: province_id
    }).select().then(data => {
        if (!data) {
            return {
                message: 'no found any province'
            }
        }
        return {
            provinces: data,
            total: data.lenght
        }
    }).catch(err => {
        return {
            message: 'something went wrong!!'
        }
    })
}