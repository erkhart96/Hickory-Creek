class SessionsController < ApplicationController
    def create
        character = Character.find_by(username: params[:username])
        if character&.authenticate(params[:password])
            session[:character_id] = character.id
            render json: character, status: :created
        else
            render json: {error: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :character_id
        head :no_content
    end

    
end