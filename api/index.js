import { Toast } from 'native-base'

const API_ADDRESS = 'http://raja-api.dev/api'
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBlMzVkOGM1MDg5MWQzMmNjMmE3YTE3ZTU3MDQ5ZDJlNDU1OGNlNjYyYzczNjA5ZmQ2MWIwZDFlNDExMDUxMWJlNjFhYzk4MGIwNmRjOTUwIn0.eyJhdWQiOiIxIiwianRpIjoiMGUzNWQ4YzUwODkxZDMyY2MyYTdhMTdlNTcwNDlkMmU0NTU4Y2U2NjJjNzM2MDlmZDYxYjBkMWU0MTEwNTExYmU2MWFjOTgwYjA2ZGM5NTAiLCJpYXQiOjE1MDkxODU4NjEsIm5iZiI6MTUwOTE4NTg2MSwiZXhwIjoxNTQwNzIxODYxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HM01NdF5irFPmKDmgzCG2WIr0R-JNt38stUCKolkVGkvJDE0waq907bTiOmo_i-rfj7dn9XN-RvQb05nBQ7uxbFf9mcyT3Gu9sdywSmbwiPk5T7hYNLcYulNzu-KjxkoS76PPnJFBmuF-bcFItItnBxswoof0bM31C-LKNVJqganoRwCG9WvQ8M4ngqOlYf2ZGHwO22xXxhY4kinrhjnTVS7icdkROqmIzLvuD2x5RlHpjZvchUAqljEdteydTN41g9HTe63Z_rHCIufH3HApv2l1aQFBiVqBHyEOxXXe1QHbcCV_ar-2AW0HfVuGM48b9J87NMPdovEoZVDlhv8zGVGWUwBDh9aaMfzvAXsM2uKZbwhCg1DCkjPNfe-Jm0UYCHnJh_KMh2Id2sgXA7Rx2I8J7FWCmd56Aw9SvaE0qZVOMIrFlS6MEXpwxxP-R0bR8uOwRAITfzrHvJic6g-5UUZ9ly1dz3aatORbyHv8zUon2Fh7Fyf8kE0_hZX8cbJAk0ow5pwlJlWNj8yf8rm7DeJaVnzWcJo2ikrXFdBqCOmjD2FzkmRW_OID4X_wd2ma8CADUFkx3FIDx759FKNlEpPLsEmiyMgeOl3ZOKbTH8JV9O0cV6wKFY3Mcov51T1owTXHNEn12WOGnxEYceBv6M3tlLvwVJ6R2Nu7bLZQfc"


export async function saveData(data) {
  const url = `${API_ADDRESS}/volunteer-register`

  return (
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      credentials: "same-origin"
    })
    .then(function(response) {
        // response.status     //=> number 100–599
        // response.statusText //=> String
        // response.headers    //=> Headers
        // response.url        //=> String
      return response.json()
      }
    )
    .then((res) => {
      switch (res.status_code) {
        case 20:
          Toast.show({
            text: 'Data berhasil tersimpan!',
            position: 'bottom',
            type: 'success',
            buttonText: 'Okay'
          })
        default:
          Toast.show({
            text: res.error.message,
            position: 'bottom',
            type: 'danger',
            buttonText: 'Tutup'
          })
      }

      return res;
    })
    .catch(error => {
      Toast.show({
        text: 'Data gagal tersimpan!',
        position: 'bottom',
        type: 'danger',
        buttonText: 'Tutup'
      })
    })
  )
}
