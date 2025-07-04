export default () => {
    const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let r = ''
    for (let i = 0; i < 6; i++) r += c.charAt(Math.floor(Math.random() * c.length))
    return r
  }
  