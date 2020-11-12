# fizzbuzz-demo
A simple `fizzbuzz` express app.
Exposes a `POST /fizzbuzz` endpoint which expects the following json payload:
```json
{
    "count": 5
}
```
`count` expected to be of Number type.

It returns:
```json
{
    "response": "",
    "errors": []
}
```

## Running locally
### Using `npm`
```sh
git clone git@github.com:zeako/fizzbuzz-demo.git && cd fizzbuzz-demo
npm install
npm run start
```

### Using `docker` on port 3000
```sh
docker run --rm -it -p 3000:3000 zeako/fizzbuzz-demo # latest
```

### Endpoint testing
```
curl --location --request POST 'http://localhost:3000/fizzbuzz' --header 'Content-Type: application/json' --data-raw '{
    "count": 15
}'
```
