class CharactersController < ApplicationController
    def index
        render json: Character.all, status: :ok
    end

    def show
        character = Character.find(params[:id])
        render json: character, status: :ok
    end

    def create
        character = Character.create!(character_params)
        CharacterChoice.create(character_id: character.id, choice_id: 0)
        CollectedItem.create(character_id: character.id, item_id: 4)
        session[:character_id] = character.id
        render json: character, status: :created
    end

    def destroy
        character = Character.find(params[:id])
        character.destroy
        render json: {}, status: :ok
    end

    private
    def character_params
        params.permit(:username, :password, :health)
    end
end
