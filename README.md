# articleTestApi
- Rest Api to do article testing
- Create docker image `docker build -t bidurbabu/article-test-api .`
- Run the docker image `docker run -p 80:3000 -d bidurbabu/article-test-api`
- Port: 80 is the host port where you want to map the port 3000 of the container.
- The api can be called by: `curl localhost/articles/981`
