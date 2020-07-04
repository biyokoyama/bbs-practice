#
# builder
#
FROM ruby:2.6.5 AS builder
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
WORKDIR /tmp
ADD Gemfile /tmp/Gemfile
ADD Gemfile.lock /tmp/Gemfile.lock
RUN bundle install --jobs=4 --retry=3

#
# rails
#
FROM ruby:2.6.5
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn
COPY --from=builder /usr/local/bundle /usr/local/bundle
WORKDIR /myapp
ADD . /myapp
