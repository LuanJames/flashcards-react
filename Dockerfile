FROM node:6.2.0
MAINTAINER Luan James <capjam@gmail.com>

# RUN npm install -g yo@1.8.1
# RUN npm install -g generator-react-webpack-alt
#### for install yo <---> adduser --disabled-password --gecos "" yeoman; echo "yeoman ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN mkdir /myapp
WORKDIR /myapp

ADD package.json /myapp/package.json
RUN npm install

ADD . /myapp

CMD npm start