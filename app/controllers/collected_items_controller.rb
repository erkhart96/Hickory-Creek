class CollectedItemsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    # POST /collected_items
    def index
        render json: CollectedItem.all, status: :ok
    end

    def show
        collected_item = CollectedItem.find(params[:id])
        render json: collected_item, status: :ok
    end

    def create
        collected_item = CollectedItem.create!(ci_params)
        render json: collected_item.item, status: :created
    end

    def destroy
        collected_item = CollectedItem.find(params[:id])
        collected_item.destroy
        render json: {}, status: :ok
    end

    private
    def ci_params
        params.permit(:character_id, :item_id)
    end

    def invalid(error)
        render json: {errors: error}, status: 422
    end
end
