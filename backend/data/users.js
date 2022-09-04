import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Yogi',
        email: 'yogi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Adianta',
        email: 'adianta@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
