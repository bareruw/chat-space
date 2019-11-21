json.content  @message.content
json.image  @message.image.url
json.group_id  @message.group_id
json.user_name  @message.user.name
json.time  @message.created_at.strftime("%Y/%m/%d %H:%M")
# json.updated_at  @message.updated_at
