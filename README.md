# learnpedia-api
Repositório learnpedia-api

Configuração do servidor + API:

1. Instale o NodeJs via package manager (Ubuntu) digitando no seu terminal do linux:

	a) curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash
	b) sudo apt-get install -y nodejs 

2. Instale o mongoDB digitando no seu temrinal do linux:

	a) sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
	b) No caso de ubuntu 12 digite: echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
	   No caso de Ubuntu 14 digite: echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
	c) sudo apt-get update
	d) sudo apt-get install -y mongodb-org

3. Instale ferramentas adicionais para servidor difitando no seu temrinal do linux:

	a) npm install --save-dev nodemon
	b) npm install express --save
	c) npm install mongoose --save

4. Inicie o serviço mongoDb digitando no seu terminal do linux:
	
	a) sudo service mongod start

obs: caso deseje para-lo digite:sudo service mongod stop




