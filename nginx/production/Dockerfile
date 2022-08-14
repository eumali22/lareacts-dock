FROM nginx:alpine

# copy config to container
COPY nginx/default.conf /etc/nginx/conf.d

# copy files from current directory to /var/www/html of container
COPY . /var/www/html
