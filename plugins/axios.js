export default function ({ $axios, redirect }) {
  $axios.setBaseURL('http://localhost:9000/')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === "500") {
      redirect("/500")
    }
    if (code === 403) {
      redirect('/account/login')
    }
  })
}
