import aloha from './components/head'

console.log('pesan dari script.js')
aloha()

// instagram
import jsonp from 'fetch-jsonp'

const token = '789814318.90b86c5.364873874efd4dab8c3ee28c12be8d4a'
const apiURL = 'https://api.instagram.com/v1/users/self/media/recent'

jsonp(`${apiURL}?access_token=${token}&count=12`).then((res) => {
  return res.json()
}).then((res) => {
  console.log(res.data)
})
