# articleTestApi
Rest Api to do article testing
To create docker image use 'docker build -t bidurbabu/article-test-api .'
To run the docker image use 'docker run -p 80:3000 -d bidurbabu/article-test-api'
Port: 80 is the host port where you want to map the port 3000 of the container.
The api can be called by: curl localhost/articles/981
