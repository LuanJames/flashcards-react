FROM node:6.2.0
MAINTAINER Luan James <capjam@gmail.com>

RUN npm install -g yo@1.8.1
RUN npm install -g generator-react-webpack-alt
# adduser --disabled-password --gecos "" yeoman; echo "yeoman ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
RUN mkdir /myapp
WORKDIR /myapp

ADD . /myapp
