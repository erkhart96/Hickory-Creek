class CharacterChoicesController < ApplicationController
    def index
        render json: CharacterChoice.all, status: :ok
    end

    def show
        character_choice = CharacterChoice.find(params[:id])
        render json: character_choice, status: :ok
    end

    def create
        character_choice = CharacterChoice.create(character_choice_params)
        render json: character_choice
    end

    def update
        character_choice = CharacterChoice.find(params[:id])
        character_choice.update(character_choice_params)
        render json: character_choice, status: :ok
    end

    private
    def character_choice_params
        params.permit(:character_id, :choice_id)
    end
end
