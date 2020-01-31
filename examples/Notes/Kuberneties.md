# Kuberneties Notes
My Notes on Kuberneties 


### It's important to have precise vocabulary to talk Kuberneties
* Kubeadm 
* Scaling worker nodes
* Kubernetes 
    * Is an open-source system for automating deployment, scaling, and management of containerized applications.
* Node 
    * Kublet
    * Communicates with master
    * Runds pods
* Pods
    * Runs 1+ containers
    * Exist on a node
* Service 
    * Handels Request
    * Usally a load ballancer
* Deployment
    Defines desired state - Kubernetes handles the rest  

### Steps for setting up a Kuberneties Cluster

#### Step 1
Chose a Distro
Ubuntu, centOS, CoreOS, RancherOS, SUSE, Talos ...

 #### Step 2
 Make your distro a configurable as a template/AMI/...
 * Countless blogs with outdated methods
 * Will the template work with my enviornment? (ie Cloud Init vs Static IP)
 * Process for updateding templates
 * Install Docker and Kuberneties components? Automate?
 * Sizing requirements?
 
 #### Step 3
 Installing Kuberneties
 
 * What container runtime do I want to use?
     * Docker? RKT Or some other CRI compatible offering?
     * Lessons learned from running Docker in production?
     * What container runtime version is supported with the version of Kuberneties? What happens after yum install docker-ce?
 
 * Architecturally, single or multi-master? Stacked or separate etcd?
     * Different paths in the docs
     * Load Balancers, DNS, certificate sharing, and more to investigate.
 
 #### Step 4
 Networking 
 
 * More Research to weigh out the differences:
     * is there an advantage to have overly L@ vs L3?
     * Kubeadm init requires special instructions for each solution
     * What tools are available for troubleshooting?
     * How to manage at scale?
     * what is Scaling point?
 
Questions?
Can I troubleshooting Interpod communications? 
 
 #### Step 5
Persistent Storage
* Native in-tree driver to provide persistent backing for kubernetes applications
* Continually evolving (API, process, plugin model)
* Cloud/Provider Specific Configs and initializations
* Few examples of how to locate or properly configure flags on Kubelet and manifiest after cluster initialization 
* Few examples with Kubeadm exist (even for major cloud providers)

Questions?
How do I communicate with VSphere or Container Storage Interface (CSI)

 #### Step 6
 Moving to Production
 
 More to do:
 * Operationale the entire stack
 * Logging 
 * Monitoring 
 * Dependency Management
 * Upgreades
 * Automated Repeatability 
 * Regression Testing
 * Support
 
 Notes on Kubeadm
 * Create Dynamic HA (Multi -Master) clusters (Beta in 1.15)
 * Kubeadm for Windows .NET
 * Advanced kubadm configuration to match Kubernetes parameters
 * Advanced Kubeadm config using Kustomize
 * kubernetes Academy 
 
 ### Commands
 
CLI commands
* $ docker run -it ubuntu bash
    * runs a container with ubuntu os and bash
* $ sudo docker run (name of container)
* $ sudo docker ps
    * gets list of containers
* $ sudo docker kill (Process ID's)
    * Stops the containers
* $ docker run --detach --publish=80:80 --name=webserver nginx
    * Runs a container with nginx
*  Stop and remove containers
    * $ docker container ls
    * $ docker container stop webserver
    * $ docker container ls -a
    * $ docker container rm webserver
    * $ docker image ls
    * $ docker image rm nginx
 
    
 
 
 
  
  


