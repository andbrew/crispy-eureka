# crispy-eureka

## Installation
1. Clone repo: `git clone https://github.com/andbrew/crispy-eureka.git`
2. Change directory: `cd crispy-eureka/`
3. Install Node.js dependencies: `npm install`
4. Start server: `npm start`

Server will be listening on `localhost:3000`

## REST table
| Method | Path           | Function                    |
| :----: | -------------- | --------------------------- |
| GET    | /results/n1/n2 | `add(req, res, next)`       |
| POST   | /results/      | `multiply(req, res, next)`  |
| PUT    | /results/      | `divide(req, res, next)`    |
| PATCH  | /results/      | `power(req, res, next)`     |
| DELETE | /results/n1/n2 | `substract(req, res, next)` |
