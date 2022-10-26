class SituationChoicesController < ApplicationController

    def index
        render json: SituationChoice.all, status: :ok
    end
end
