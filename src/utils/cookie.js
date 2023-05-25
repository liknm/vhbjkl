import Cookies from 'universal-cookie';

const cookie = new Cookies();
export default cookie
export const setCookie = (username, userGroup, userClass) => {
    cookie.set('username', username)
    cookie.set('userClass', userClass)
    cookie.set('userGroup', userGroup)
}
export const resetCookie = () => {
    cookie.remove('username')
    cookie.remove('userClass')
    cookie.remove('userGroup')
}
export const loadCookie = () => {
    const username = cookie.get('username') || null
    const userClass = cookie.get('userClass') || null
    const userGroup = cookie.get('userGroup') || null
    const user = {username, userClass, userGroup}
    console.log(user)
    return user
}