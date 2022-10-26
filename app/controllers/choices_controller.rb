class ChoicesController < ApplicationController
    def index
        render json: Choice.all, status: :ok
    end

    def show
        choice = Choice.find(params[:id])
        render json: choice, status: :ok
    end
end
