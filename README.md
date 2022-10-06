# Tiny Docker Setup for Laravel 9 (PHP8 + Nginx)

## Description

laravel-tinydock is a small Laravel development setup/template utilizing Docker. It contains the initial files of a laravel project (with Breeze already installed.)

Laravel 9 already provides a development docker setup called Sail, but I wanted to use a container that is close to the setup that I will have once deployed to production. I also wanted to remove unused modules to reduce the size of the containers.

## Pre-requisites

Before using laravel-tinydock, make sure these are installed:
* Docker
* PHP
* composer
* Node and npm
* git

## Installation

### 1. GitHub Checkout
Clone the repository and go to your new project's root directory.

    $ git clone https://github.com/eumali22/laravel-tinydock.git <your-project-name>
    $ cd <your-project-name>

### 2. Build Project

Install dependencies:
        
    $ composer install
    $ npm install

Build frontend resources. This will also start the vite watch job:

    $ npm run dev

Create .env file and generate app key:
    
    $ cp .env.example .env
    $ php artisan key:generate

### 3. Run the containers
Within the project root:

    $ docker-compose up

You should now be able to access the Laravel app from this URL: http://localhost:8080

The project's root directory is mounted as a volume in the docker-compose.yml, so you can edit your development files and immediately see the changes.

