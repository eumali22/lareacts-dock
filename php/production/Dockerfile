FROM php:8.0-fpm-alpine

# install modules
RUN docker-php-ext-install opcache bcmath
COPY php/production/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# install composer
COPY --from=composer/composer /usr/bin/composer /usr/bin/composer

# set env variables
ENV USER=docker
ENV UID=1000
ENV GID=1000

# create group
RUN addgroup --gid "$GID" "$USER"

# create user
RUN adduser \
  --disabled-password \
  --gecos "" \
  --home "$(pwd)" \
  --ingroup "$USER" \
  --no-create-home \
  --uid "$UID" \
  "$USER"

# copy files from current directory to /var/www/html/public of container
COPY . /var/www/html

# copy permissions
COPY --chown="$USER":"$USER" . /var/www/html

# switch to created user
USER "$USER"

# install dependencies
RUN composer install --no-dev