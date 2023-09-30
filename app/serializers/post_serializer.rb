class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :content
end
