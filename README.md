# wall_app
[![Linkedin Badge](https://img.shields.io/badge/-alexandre-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alexandre-anicio/)](https://www.linkedin.com/in/alexandre-anicio/)

### `Description`
This application was built in a modular architecture allowing greater flexibility and high capacity to reuse components within the project components. In it's main structure we can find backend and frontend apps that are transformed in containers by using docker. 


### `Prerequisites`
To run this project you will need to install both [Docker Engine](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).

### `Installation`
After downloading this repository, you can build the images and start the containers by running:
```bash
docker-compose up --build
```
_note: use the flag `--build` when starting the containers for the first time only._

To stop containers and removes containers, networks, volumes, and images created by `up`, you can run:
```bash
docker-compose down -v
```

After starting the containers you should have both Front-End and Back-End apps running at:
- `Front-End`: [http://localhost:3030](http://localhost:3030)
- `Back-End`: [http://localhost:8000](http://localhost:8000)
- `Database`: port:5432


### `Tests`

To run all tests on the frontend app, you must run:
```bash
docker-compose exec frontend npm test
```

To run all tests on the backend app, you must run:
```bash
docker-compose exec backend python manage.py test
```
_note: use `exec` if the container is actually running, otherwise use `run`_

### `Development notes`
In this project configuration, when you start the containers, everything the apps need will be on the image of each container (`wall_app_db`, `wall_app_backend` and `wall_app_frontend`). Just for a better development experience (avoiding module not found lint errors), I recommend to install the packages of each app locally in your machine. For example:
```bash
cd frontend
npm install
```

Happy hacking! :)
