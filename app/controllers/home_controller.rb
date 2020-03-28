class HomeController < ApplicationController
  def index
  end

  def subscribe
    binding.pry
    head :ok
  end
end
