/** @note a type of aggregation where objects has a hight relationship with their owners but without a own life (dependencies) */

const User =  {
    fullName: 'John Doe',
    email: 'johndoe@email.com',
    username: 'johndoe',

    /** @note composition, object inside an object */
    address: {
        street: '123 Main St',
        city: 'San Francisco',
        state: 'California'
    }
}
