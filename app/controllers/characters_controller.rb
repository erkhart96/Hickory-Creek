class CharactersController < ApplicationController
    def index
        render json: Character.all, status: :ok
    end

    def show
        character = Character.find(session[:character_id])
        if character
            render json: character, status: :ok
        else
            render json: {error: 'Not authorized'}, status: :unauthorized
        end
    end

    def create
        character = Character.create!(character_params)
        CharacterChoice.create(character_id: character.id, choice_id: 1)
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
        params.permit(:username, :password)
    end
end
