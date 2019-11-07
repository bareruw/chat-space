# README

## users テーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|chat_id|integer|null: false, foreign_key: true|

   # Association
- has_many :chats,  through:  :chats_users
- has_many :comments
- has_many :chats_users

## chats テーブル
|Column|Type|Options|
|------|----|-------|
|group|string|null: false|
|user_id|integer|null: false, foreign_key: true|

   # Association
- has_many :users,  through:  :chats_users
- has_many :comments
- has_many :chats_users

## comments テーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|chat_id|integer|null: false, foreign_key: true|

   # Association
- belongs_to :user
- belongs_to :chat

## chats_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|chat_id|integer|null: false, foreign_key: true|

   # Association
- belongs_to :chat
- belongs_to :user