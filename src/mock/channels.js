import mock from '../utils/mock'

mock.onGet('/api/user/channels').reply(200, {
    channels: [
        {
            id: 1,
            name: 'futebol',
            selected: true,
        },
        {
            id: 2,
            name: 'basquete',
            selected: false,
        },
    ]
})