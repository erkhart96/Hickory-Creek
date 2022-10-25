class CollectedItemsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    # POST /collected_items
    def index
        render json: CollectedItem.all, status: :ok
    end

    def create
        collected_item = CollectedItem.create!(ci_params)
        render json: collected_item.item, status: :created
    end

    private
    def ci_params
        params.permit(:character_id, :item_id)
    end

    def invalid(error)
        render json: {errors: error}, status: 422
    end
end
