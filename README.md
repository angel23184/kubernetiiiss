# Use docker context from minikube
    eval $(minikube docker-env)
# Build docker image
    docker build -t appsample .
# Run on k8s
    kubectl apply -f deployment.yaml
# Get service url from minikube or test it with curl
    minikube service appsample-service --url
    curl $(minikube service appsample-service --url)
# Delete everything
    kubectl delete -f deployment.yaml
