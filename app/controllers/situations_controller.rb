class SituationsController < ApplicationController
    def index
        render json: Situation.all, status: :ok
    end

    def show
        situation = Situation.find(params[:id])
        render json: situation, status: :ok
    end
end
