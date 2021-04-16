import mock from '../utils/mock'

mock.onGet('/api/user/contacts').reply(200, {
    contacts: [
        {
            id: 1,
            username: 'l3l3',
            status: 'on',
        },
        {
            id: 2,
            username: 'l0l0',
            status: 'off',
        },
        {
            id: 3,
            username: 'lala',
            status: 'out',
        },
        {
            id: 4,
            username: 'l1l1',
            status: 'occuped',
        },
    ]
})