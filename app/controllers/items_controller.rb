class ItemsController < ApplicationController
    def index
        render json: Item.all, status: :ok
    end
end
