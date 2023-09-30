class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :sender_id, :receiver_id
end
