require 'rails_helper'

RSpec.describe "Tops", type: :request do

  describe "GET /" do
    it "returns http success" do
      get "/"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /somewhere" do
    it "returns http success" do
      get "/somewhere"
      expect(response).to have_http_status(:success)
    end
  end

end
