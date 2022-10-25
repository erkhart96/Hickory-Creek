class CharactersController < ApplicationController
    def index
        render json: Character.all, status: :ok
    end

    def show
        character = Character.find(params[:id])
        render json: character, status: :ok
    end
end
