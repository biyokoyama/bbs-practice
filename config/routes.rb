Rails.application.routes.draw do

  #
  # pass all request to top#index
  #
  root 'top#index'
  get '*all', to: 'top#index'

end
